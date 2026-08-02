import { createContext, type ReactNode, useContext, useState } from 'react';

export interface AuthContextType {
  user: string | null;
  logIn: (username: string) => void;
  logOut: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>('a');

  function logIn(username: string) {
    setUser(username);
  }

  function logOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
