/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#E8F5E9',
          primary: '#4CAF50',
          dark: '#2E7D32',
        }
      }
    },
  },
  plugins: [],
}