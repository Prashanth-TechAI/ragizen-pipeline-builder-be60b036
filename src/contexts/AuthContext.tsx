
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from '@/components/ui/sonner';

interface User {
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
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
      const user = { email };
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success('Login successful');
      return true;
    } else {
      toast.error('Invalid email or password');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
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
