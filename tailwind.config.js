/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding:{
        '1/10':'10%'
      },
      keyframes:{
        slideDown:{
          from: {
            opacity: '0',
            transform: 'translateY(-3rem)'
          },
          to:{
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
    },
  },
  plugins: [],
}

