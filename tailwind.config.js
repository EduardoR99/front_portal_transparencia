/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#005BAC',
      'secondary': '#FFD700',
      'green': '#008000',
      'white': '#fff',
      'red': '#f00',
    },
    extend: {},
  },
  plugins: [],
}