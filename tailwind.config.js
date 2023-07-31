/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },
     colors: {
      rocketseat: '#8257e6'
     }
    },
  },
  plugins: [],
}
