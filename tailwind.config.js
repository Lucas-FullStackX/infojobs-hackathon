/**
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ['./src/**/*.tsx', '../../node_modules/side-ui/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#167DB7',
          secondary: '#FF6340',
        },
      },
    ],
  },
  presets: [require('./node_modules/side-ui/dist/tailwind.config')],
  plugins: [require('tailwindcss-scrollbar'), require('daisyui')],
};
