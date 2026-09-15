/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          black: '#0B0B0C',
          dark: '#121214',
          surface: '#17171A',
          charcoal: '#222226',
          border: 'rgba(212, 158, 106, 0.15)',
          gold: '#D49E6A',
          'gold-light': '#F0C696',
          'gold-muted': 'rgba(212, 158, 106, 0.6)',
          cream: '#F5F0EB',
          'cream-muted': '#B8B0A6',
          rust: '#C85A32',
          flame: '#E65C00',
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'ember-glow': 'radial-gradient(circle at center, rgba(200, 90, 50, 0.15) 0%, rgba(11, 11, 12, 0) 70%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
