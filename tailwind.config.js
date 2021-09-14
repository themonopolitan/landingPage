module.exports = {
  purge: {
    enabled: false,
    content: ['./pages/*/.{js,ts,jsx,tsx}', './src/*/.{js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f4f7f6',
        secondary: '#49c5b6',
        tertiary: '#2e2d31',
        fondo: '#d6d6d6'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
