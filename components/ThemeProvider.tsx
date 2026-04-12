'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
      
      setIsDark(isDarkMode);
      updateTheme(isDarkMode);
    } catch (e) {
      // Silently fail in case localStorage is not available
    }
    setMounted(true);
  }, []);

  const updateTheme = (dark: boolean) => {
    try {
      if (dark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch (e) {
      // Silently fail
    }
  };

  const toggleTheme = () => {
    setIsDark(prev => {
      const newValue = !prev;
      updateTheme(newValue);
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return { isDark: false, toggleTheme: () => {}, mounted: false };
  }
  return context;
}
