import http from "node:http";
import { config } from "./config.js";
import { createJwt, verifyJwt } from "./auth.js";
import { connectDB } from "./db.js";
import { User } from "./models/User.js";

const sendJson = (response, statusCode, payload) => {
  response.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": config.frontendOrigin,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  });
  response.end(JSON.stringify(payload));
};

const readJsonBody = async (request) => {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
};

const issueAuthResponse = (user) => ({
  user: user.toPublicProfile(),
  token: createJwt(
    { sub: user._id.toString(), email: user.email },
    config.jwtSecret,
    config.jwtExpiresIn,
  ),
});

const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const getValidationMessage = (error) => {
  if (error?.name === "ValidationError") {
    return Object.values(error.errors)[0]?.message || "Validation failed.";
  }

  if (error?.code === 11000) {
    return "An account with this email already exists.";
  }

  return null;
};

const handleSignup = async (request, response) => {
  const { name = "", email = "", password = "" } = await readJsonBody(request);

  if (!name.trim() || !email.trim() || !password) {
    return sendJson(response, 400, {
      message: "Name, email, and password are required.",
    });
  }

  if (!isEmail(email)) {
    return sendJson(response, 400, { message: "Enter a valid email address." });
  }

  if (password.length < 8) {
    return sendJson(response, 400, {
      message: "Password must be at least 8 characters.",
    });
  }

  const existingUser = await User.findOne({ email: email.toLowerCase().trim() });

  if (existingUser) {
    return sendJson(response, 409, {
      message: "An account with this email already exists.",
    });
  }

  try {
    const user = await User.create({ name, email, password });

    return sendJson(response, 201, issueAuthResponse(user));
  } catch (error) {
    const validationMessage = getValidationMessage(error);

    if (validationMessage) {
      return sendJson(response, error.code === 11000 ? 409 : 400, {
        message: validationMessage,
      });
    }

    throw error;
  }
};

const handleSignin = async (request, response) => {
  const { email = "", password = "" } = await readJsonBody(request);
  const user = await User.findOne({ email: email.toLowerCase().trim() }).select(
    "+password",
  );

  if (!user || !(await user.comparePassword(password))) {
    return sendJson(response, 401, { message: "Invalid email or password." });
  }

  return sendJson(response, 200, issueAuthResponse(user));
};

const handleMe = async (request, response) => {
  const authorization = request.headers.authorization || "";
  const token = authorization.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : "";

  try {
    const payload = verifyJwt(token, config.jwtSecret);
    const user = await User.findById(payload.sub);

    if (!user) {
      return sendJson(response, 404, { message: "User not found." });
    }

    return sendJson(response, 200, { user: user.toPublicProfile() });
  } catch {
    return sendJson(response, 401, { message: "Invalid or expired token." });
  }
};

const server = http.createServer(async (request, response) => {
  try {
    if (request.method === "OPTIONS") {
      return sendJson(response, 204, {});
    }

    const url = new URL(request.url, `http://${request.headers.host}`);

    if (request.method === "GET" && url.pathname === "/api/health") {
      return sendJson(response, 200, { status: "ok" });
    }

    if (request.method === "POST" && url.pathname === "/api/auth/signup") {
      return handleSignup(request, response);
    }

    if (request.method === "POST" && url.pathname === "/api/auth/signin") {
      return handleSignin(request, response);
    }

    if (request.method === "GET" && url.pathname === "/api/auth/me") {
      return handleMe(request, response);
    }

    return sendJson(response, 404, { message: "Route not found." });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return sendJson(response, 400, { message: "Request body is invalid." });
    }

    return sendJson(response, 500, { message: "Something went wrong." });
  }
});

connectDB()
  .then(() => {
    server.listen(config.port, () => {
      console.log(`Newsmania API running on:${config.port}`);
    });
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
