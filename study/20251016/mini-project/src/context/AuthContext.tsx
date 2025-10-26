import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  user: string | null;
  login: (username: string, password?: string) => Promise<void>;
  join: (username: string, password?: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'mini_project_auth_user';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) setUser(raw);
  }, []);

  const login = async (username: string) => {
    // In a real app you'd call an API. Here we just persist username.
    localStorage.setItem(STORAGE_KEY, username);
    setUser(username);
  };

  const join = async (username: string) => {
    // fake register
    localStorage.setItem(STORAGE_KEY, username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, join, logout }}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
