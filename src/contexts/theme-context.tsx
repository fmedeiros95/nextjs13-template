'use client';

import { createContext, useState } from 'react';

export type ThemeContextValue = {
  menuOpened: boolean;
  toggleMenuOpened: (isOpen: boolean) => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  menuOpened: false,
  toggleMenuOpened: () => null,
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [menuOpened, toggleMenuOpened] = useState<boolean>(false);

  return <ThemeContext.Provider value={{ menuOpened, toggleMenuOpened }}>{children}</ThemeContext.Provider>;
};
