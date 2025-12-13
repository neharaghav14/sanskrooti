module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: '#FF9933',
        peacock: '#0066CC',
        indianGreen: '#009933',
        cream: '#FFF8E7',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/mandala-bg.png')",
      }
    },
  },
  plugins: [],
}
