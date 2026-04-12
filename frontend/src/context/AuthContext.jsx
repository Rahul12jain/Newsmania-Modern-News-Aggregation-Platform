import { useCallback, useEffect, useMemo, useState } from "react";
import { getCurrentUser, signin, signup } from "../services/api";
import { AuthContext } from "./auth-context-value";
const tokenStorageKey = "newsmania_token";
const userStorageKey = "newsmania_user";

const getStoredUser = () => {
  try {
    return JSON.parse(localStorage.getItem(userStorageKey));
  } catch {
    return null;
  }
};

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(tokenStorageKey));
  const [user, setUser] = useState(getStoredUser);
  const [isCheckingSession, setIsCheckingSession] = useState(Boolean(token));

  const saveSession = useCallback(({ token: nextToken, user: nextUser }) => {
    localStorage.setItem(tokenStorageKey, nextToken);
    localStorage.setItem(userStorageKey, JSON.stringify(nextUser));
    setToken(nextToken);
    setUser(nextUser);
  }, []);

  const signUp = useCallback(async (formData) => {
    const session = await signup(formData);
    saveSession(session);
    return session;
  }, [saveSession]);

  const signIn = useCallback(async (formData) => {
    const session = await signin(formData);
    saveSession(session);
    return session;
  }, [saveSession]);

  const signOut = useCallback(() => {
    localStorage.removeItem(tokenStorageKey);
    localStorage.removeItem(userStorageKey);
    setToken(null);
    setUser(null);
    setIsCheckingSession(false);
  }, []);

  useEffect(() => {
    if (!token) {
      return;
    }

    let isActive = true;

    getCurrentUser(token)
      .then(({ user: currentUser }) => {
        if (isActive) {
          setUser(currentUser);
          localStorage.setItem(userStorageKey, JSON.stringify(currentUser));
        }
      })
      .catch(() => {
        if (isActive) {
          signOut();
        }
      })
      .finally(() => {
        if (isActive) {
          setIsCheckingSession(false);
        }
      });

    return () => {
      isActive = false;
    };
  }, [signOut, token]);

  const value = useMemo(
    () => ({
      isAuthenticated: Boolean(token && user),
      isCheckingSession,
      signIn,
      signOut,
      signUp,
      token,
      user,
    }),
    [isCheckingSession, signIn, signOut, signUp, token, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
