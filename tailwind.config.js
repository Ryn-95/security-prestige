/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0a',
          secondary: '#1a1a1a',
          card: '#1a1a1a',
          'card-hover': '#252525',
        },
        golden: {
          DEFAULT: '#d4af37',
          light: '#f4d03f',
          muted: '#b8860b',
          dark: '#b8860b',
        },
      },
      fontFamily: {
        'sf-pro': ['SF Pro Display', 'system-ui', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'willFadeIn 0.8s ease-out',
        'slide-in': 'willSlideIn 0.8s ease-out',
        'scale': 'willScale 0.8s ease-out',
        'float': 'willFloat 6s ease-in-out infinite',
      },
      keyframes: {
        willFadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        willSlideIn: {
          from: {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        willScale: {
          from: {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        willFloat: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
