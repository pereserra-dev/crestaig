/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#173f31',
        secondary: '#fbf8f1',
        accent: '#c59754',
        cream: '#f6f1e8',
        ink: '#17231c',
        muted: '#6f766d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
