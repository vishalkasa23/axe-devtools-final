module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'back': "url('./images/back1.jpg')",
        })
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
}
