/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0d14',
        surface: '#121824',
        line: '#1e293b',
        terminal: '#10b981',
        cyber: '#3b82f6',
        muted: '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      boxShadow: {
        terminal: '0 0 0 1px rgba(16,185,129,.18), 0 20px 50px rgba(0,0,0,.35)',
        cyber: '0 0 40px rgba(59,130,246,.16)',
      },
    },
  },
  plugins: [],
};
