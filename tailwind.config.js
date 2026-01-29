/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ffb6c1',
          DEFAULT: '#ff69b4', // Hot Pink
          dark: '#ff1493',
        },
        accent: {
          peach: '#ffdab9',
          nude: '#faf0e6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
