/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#0b7fab',
      'primaryfont': '#174469',
      'navbar': 'a5c9e5',
      'secondary': '#FFD700',
      'secondaryLight': '#eaef2c',
      'green': '#008000',
      'white': '#fff',
      'red': '#f00',
    },
    extend: {},
  },
  plugins: [],
}