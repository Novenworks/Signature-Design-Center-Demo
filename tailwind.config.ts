import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fdfbf7',
          100: '#f9f3e9',
          200: '#f2e5cf',
          300: '#e7d1ab',
          400: '#d7b375',
          500: '#c69947',
          600: '#b18037',
          700: '#94632e',
          800: '#79502b',
          900: '#644227',
          gold: '#C59A46',
          dark: '#141414',
          charcoal: '#1F2428',
          stone: '#2A3036',
          cream: '#FAF8F5',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
