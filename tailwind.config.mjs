/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,ts,tsx,js,jsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0A',
        paper: '#FAFAF9',
        line: '#E7E5E4',
        muted: '#525252',
        subtle: '#737373',
        accent: '#1E3A8A',
        'accent-soft': '#EEF2FF',
      },
      fontFamily: {
        display: ['"Geist Variable"', 'system-ui', 'sans-serif'],
        body: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        mono: ['"SF Mono"', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      maxWidth: {
        content: '72rem',
        prose: '38rem',
      },
      letterSpacing: {
        tightish: '-0.015em',
        tighter2: '-0.03em',
      },
    },
  },
  plugins: [],
};
