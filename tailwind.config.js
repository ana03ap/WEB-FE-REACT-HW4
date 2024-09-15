/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(255, 255, 255, 0.2)',
      },
      scale: {
        '103': '1.03', // Define la escala 1.02
      },
    },
  },
  plugins: [],
}
