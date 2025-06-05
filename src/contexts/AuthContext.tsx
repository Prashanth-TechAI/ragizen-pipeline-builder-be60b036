
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner';

interface User {
  email: string;
  username?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  signup: (username: string, email: string, password: string) => boolean;
  forgotPassword: (email: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email: string, password: string) => {
    // Demo credentials check
    if (email === 'test@gmail.com' && password === 'test123') {
      const user = { email, username: 'TestUser' };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Login successful');
      return true;
    } else {
      toast.error('Invalid email or password');
      return false;
    }
  };

  const signup = (username: string, email: string, password: string) => {
    // Demo signup - in real app, this would call API
    const user = { email, username };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    toast.success('Account created successfully');
    return true;
  };

  const forgotPassword = (email: string) => {
    // Demo forgot password - in real app, this would call API
    toast.success('Password reset email sent');
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, forgotPassword, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
