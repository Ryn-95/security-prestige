import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        gold: {
          DEFAULT: '#D4AF37',
          20: 'rgba(212,175,55,0.2)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4pt': '4px',
        '8x': '2rem',
        '12x': '3rem',
      },
      borderRadius: {
        DEFAULT: '8px',
        sm: '4px',
      },
      transitionDuration: {
        DEFAULT: '200ms',
        400: '400ms',
      },
      maxWidth: {
        '60vw': '60vw',
      },
    },
  },
  plugins: [],
} satisfies Config 