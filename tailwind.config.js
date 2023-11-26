/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {colors: {
      'primary': '#010D25',
      'secondary-blue': '#0A163B',
      'secondary-yellow' : '#E7B82F',
    },
  
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },},
  },
  plugins: [],
}