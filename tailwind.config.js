/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'lightPink': '#ddddf7',
      'purple': '#3e3c61',
      'darkPurple': '#2f2d52',
      'bg': '#c7d2fe',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'btn': "#818cf8",
      "gray": "#64748b"
    },
  },
  plugins: [{
    tailwindcss: {},
    autoprefixer: {},
  }],
}
