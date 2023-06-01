'use client';

import { createContext, useEffect, useState } from 'react';
import { User } from '../types/user';

export type AuthContextValue = {
  user: User | null;
  setUser: (user: User) => void;
};

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  setUser: () => null,
});

interface AuthProviderProps {
  children: React.ReactNode;
}

// interface AuthResponse {
//   user: User;
// }

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  // const router = useRouter();

  useEffect(() => {
    // const initAuth = async () => {
    //   // Get user data from localstorage
    //   const user = localStorage.getItem('user');
    //   if (user) setUser(JSON.parse(user));
    //   try {
    //     const { data } = await apiInternalClient.get<AuthResponse>('/api/session/');
    //     // Save user data in localstorage
    //     localStorage.setItem('user', JSON.stringify(data.user));
    //     setUser(data.user);
    //   } catch (error) {
    //     const { response } = error as ApiResponseError;
    //     router.push(response?.data.redirectURL || '/login');
    //   }
    // };
    // const hasCookie = existsCookie('token');
    // hasCookie && initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};
