/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/*.html"],
  theme: {
    extend: {
      screens:{
        'xd':'1452px',
        'xs':'1000px',
        'xsm':'1200px'
      }
    },
  },
  plugins: [],
}

