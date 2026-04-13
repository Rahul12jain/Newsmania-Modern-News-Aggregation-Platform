import "./loadEnv.js";

const frontendOrigins = (
  process.env.FRONTEND_ORIGIN ||
  "http://localhost:5173,https://newsmania-modern-news-aggregation-p.vercel.app"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

export const config = {
  port: Number(process.env.PORT) || 5000,
  mongoUri: process.env.MONGO_URI || "",
  jwtSecret:
    process.env.JWT_SECRET ||
    "newsmania-dev-secret-change-before-production",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  frontendOrigins,
};
