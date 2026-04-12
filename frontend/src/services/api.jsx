const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const request = async (path, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed. Please try again.");
  }

  return data;
};

export const signup = (formData) =>
  request("/auth/signup", {
    method: "POST",
    body: JSON.stringify(formData),
  });

export const signin = (formData) =>
  request("/auth/signin", {
    method: "POST",
    body: JSON.stringify(formData),
  });

export const getCurrentUser = (token) =>
  request("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
