module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Include any other paths that may contain Tailwind CSS classes
  ],
  theme: {
    extend: {
      fontFamily: {
        subheadUno: ['Playfair Display', 'serif'],
      },
      colors: {
        navy: '#093052',
        gold: '#89764e',
      },
    },
  },
  plugins: [],
}
