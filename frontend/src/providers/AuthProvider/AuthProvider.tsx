import { type ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<string | null>('aaa');

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
