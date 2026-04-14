'use client';

import { createContext, useContext, ReactNode, useEffect, useState } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize on mount
    const html = document.documentElement;
    const saved = localStorage.getItem('app-theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : systemDark;
    
    setIsDark(dark);
    
    if (dark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }

    // Listen for theme changes from other tabs
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'app-theme') {
        const newDark = e.newValue === 'dark';
        setIsDark(newDark);
        if (newDark) {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newDark = !isDark;

    // Update state
    setIsDark(newDark);

    // Update DOM
    if (newDark) {
      html.classList.add('dark');
      localStorage.setItem('app-theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('app-theme', 'light');
    }

    // Force a manual update to ensure it works
    console.log('Theme toggled to:', newDark ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return { isDark: false, toggleTheme: () => {} };
  }
  return context;
}
