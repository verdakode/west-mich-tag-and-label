module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Include any other paths that may contain Tailwind CSS classes
  ],
  theme: {
    extend: {
      colors: {
        navy: '#041540',
      },
    },
  },
  plugins: [],
}
