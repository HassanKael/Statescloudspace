/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A3263',
          dark: '#132749',
        },
        secondary: {
          DEFAULT: '#1CC2B8',
          light: '#3DD6CC',
          dark: '#16A89F',
        },
        accent: {
          DEFAULT: '#F26419',
          light: '#FF7A33',
          dark: '#D15614',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      transitionDuration: {
        '300': '300ms',
      },
    },
  },
  plugins: [],
};
