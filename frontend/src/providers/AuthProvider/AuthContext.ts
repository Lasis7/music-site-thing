import { createContext } from 'react';

export interface AuthContextType {
  user: string | null;
  logIn: (username: string) => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
