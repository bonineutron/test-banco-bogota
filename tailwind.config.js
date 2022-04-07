const { join } = require('path');

module.exports = {
  purge: [join(__dirname, './src/**/*.{js,ts,jsx,tsx}')],
  darkMode: false, // or 'media' or 'class'
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {},
    extend: {}
  },
  plugins: [],
  mode: 'jit'
};
