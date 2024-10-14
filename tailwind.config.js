/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vintage-brown': {
          100: '#f7efe0', // light brown for backgrounds
          200: '#e8d5b9',
          300: '#d1b693',
          400: '#b5966f',
          500: '#8d704f', // darker brown for accents
          600: '#6f543a',
          700: '#523d2a',
          800: '#362618',
          900: '#1c130a', // dark brown for deep elements
        },
      },
      fontFamily: {
        serif: ['"Merriweather"', 'serif'], // serif font for vintage feel
      },
      backgroundImage: {
        'old-paper': "url('/src/assets/old-paper-texture.jpg')", // for background texture
      },
    },
  },
  plugins: [],
}
