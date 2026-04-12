import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LogIn, UserPlus } from "lucide-react";
import { useAuth } from "../context/useAuth";

function Login({ mode = "signin" }) {
  const isSignup = mode === "signup";
  const navigate = useNavigate();
  const { isAuthenticated, signIn, signUp, user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const content = useMemo(
    () => ({
      title: isSignup ? "Create your Newsmania account" : "Welcome back",
      subtitle: isSignup
        ? "Save your preferences now and make personalized news easier later."
        : "Sign in to continue building your personal news space.",
      button: isSignup ? "Create account" : "Sign in",
      switchText: isSignup
        ? "Already have an account?"
        : "New to Newsmania?",
      switchLink: isSignup ? "/login" : "/signup",
      switchAction: isSignup ? "Sign in" : "Create account",
    }),
    [isSignup],
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({ ...currentData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (isSignup && formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (isSignup) {
        await signUp({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      } else {
        await signIn({
          email: formData.email,
          password: formData.password,
        });
      }

      navigate("/", { replace: true });
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-160px)] bg-slate-50 px-4 py-10">
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm md:grid-cols-[1fr_1.1fr]">
        <section className="bg-gray-950 p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
            Newsmania
          </p>
          <h1 className="mt-6 text-3xl font-bold leading-tight md:text-4xl">
            Follow the news that matters to you.
          </h1>
          <p className="mt-4 text-sm leading-6 text-gray-300 md:text-base">
            Your account will support saved topics, bookmarks, and personalized
            category feeds as the news aggregator grows.
          </p>

          <div className="mt-8 space-y-4 text-sm text-gray-200">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              Categorized headlines across business, sports, technology,
              health, entertainment, and trending stories.
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              JWT authentication keeps the frontend ready for protected news
              preferences and profile APIs.
            </div>
          </div>
        </section>

        <section className="p-6 sm:p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-950">
              {content.title}
            </h2>
            <p className="mt-2 text-sm text-gray-600">{content.subtitle}</p>
          </div>

          {user && (
            <div className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
              Signed in as {user.name}
            </div>
          )}

          {error && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {isSignup && (
              <label className="block">
                <span className="text-sm font-medium text-gray-800">Name</span>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                  name="name"
                  onChange={handleChange}
                  placeholder="Rahul Sharma"
                  required
                  type="text"
                  value={formData.name}
                />
              </label>
            )}

            <label className="block">
              <span className="text-sm font-medium text-gray-800">Email</span>
              <input
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                name="email"
                onChange={handleChange}
                placeholder="you@example.com"
                required
                type="email"
                value={formData.email}
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-gray-800">
                Password
              </span>
              <div className="mt-2 flex rounded-lg border border-gray-300 focus-within:border-gray-950 focus-within:ring-2 focus-within:ring-gray-950/10">
                <input
                  className="w-full rounded-lg px-4 py-3 text-gray-900 outline-none"
                  minLength={8}
                  name="password"
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  required
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                />
                <button
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="px-4 text-gray-500 hover:text-gray-950"
                  onClick={() => setShowPassword((isVisible) => !isVisible)}
                  type="button"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </label>

            {isSignup && (
              <label className="block">
                <span className="text-sm font-medium text-gray-800">
                  Confirm password
                </span>
                <input
                  className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-gray-950 focus:ring-2 focus:ring-gray-950/10"
                  minLength={8}
                  name="confirmPassword"
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  required
                  type={showPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                />
              </label>
            )}

            <button
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-300"
              disabled={isSubmitting}
              type="submit"
            >
              {isSignup ? <UserPlus size={18} /> : <LogIn size={18} />}
              {isSubmitting ? "Please wait..." : content.button}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            {content.switchText}{" "}
            <Link
              className="font-semibold text-gray-950 underline underline-offset-4"
              to={content.switchLink}
            >
              {content.switchAction}
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}

export default Login;
