import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#10b981', // Emerald green (medical)
        'primary-dark': '#059669',
        'primary-light': '#d1fae5',
        secondary: '#0f766e', // Teal
        accent: '#f59e0b', // Amber
        neutral: '#f3f4f6',
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        blob: 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      backgroundColor: {
        light: '#ffffff',
        dark: '#111827',
      },
      textColor: {
        light: '#000000',
        dark: '#f3f4f6',
      },
    },
  },
  plugins: [],
};

export default config;
