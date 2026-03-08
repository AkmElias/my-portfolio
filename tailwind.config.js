/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: 'var(--portfolio-bg)',
          surface: 'var(--portfolio-surface)',
          'surface-alt': 'var(--portfolio-surface-alt)',
          text: 'var(--portfolio-text)',
          'text-secondary': 'var(--portfolio-text-secondary)',
          'text-muted': 'var(--portfolio-text-muted)',
          border: 'var(--portfolio-border)',
          'nav-bg': 'var(--portfolio-nav-bg)',
          accent: '#FF8400',
          'accent-fg': 'var(--portfolio-accent-fg)',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
