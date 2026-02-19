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
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['2.5rem', { lineHeight: '1.15', fontWeight: '800' }],
        'h1-desktop': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'h2-mobile': ['2rem', { lineHeight: '1.25', fontWeight: '700' }],
        'h2-desktop': ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h3-mobile': ['1.5rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h3-desktop': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'h4-mobile': ['1.125rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4-desktop': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'button': ['1rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      transitionDuration: {
        '300': '300ms',
      },
      animation: {
        'scroll-rtl': 'scroll-rtl 25s linear infinite',
      },
      keyframes: {
        'scroll-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
      },
    },
  },
  plugins: [],
};
