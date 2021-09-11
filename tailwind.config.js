module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#f4f7f6',
        secondary: '#ecc94b',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
