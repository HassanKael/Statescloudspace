/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B1F3B',
          dark: '#081629',
        },
        secondary: {
          DEFAULT: '#1CC2B8',
          light: '#3DD6CC',
          dark: '#16A89F',
        },
        accent: {
          DEFAULT: '#FF8A3D',
          light: '#FFA366',
          dark: '#E67528',
        },
        neutral: {
          50: '#F5F7FA',
          100: '#E1E5EC',
          700: '#3C4350',
          900: '#1A1D23',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Open Sans', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
