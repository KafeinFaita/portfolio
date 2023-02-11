/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('./src/assets/header.jpg)",
      },
      fontFamily: {
        heading: ['Roboto Slab', 'serif'],
        body: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}