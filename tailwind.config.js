/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, serif ', // Adds a new `font-display` class
      }
    },
  },
  plugins: [],
}

