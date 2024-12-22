/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      animation: {
        'slide-left': 'slideLeft 1s ease-in-out forwards',
        'slide-right': 'slideRight 1s ease-in-out forwards',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

