/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      colors: {
        'azion-gray': '#B5B5B5',
      },
    },
  },
  plugins: [],
};