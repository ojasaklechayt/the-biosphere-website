/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        lightViolet: 'hsl(211, 61%, 75%)',
        darkViolet: 'hsl(211, 61%, 35%)',
        cardColor: 'rgba(255, 255, 255, 0.60)'
      },
      backgroundImage: {
        'waves': "url('/img/waves2.svg')"
      },
    },
  },
  plugins: [],
}
