/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        'bg-main-dark': '#2D3341',
        'bg-secondary-dark': '#373E4F',
        'icon-color': '#9298A4',
        'red-highlight': '#FD4158',
        'chat-bg': '#F4F5F7',
        'active-chat':'#424B60',
        'dull-white': '#ffffff20'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans','Montserrat'], // Replace 'Roboto' with the font you added from Google Fonts
        opensans: ['Open Sans', 'sans','Montserrat'], // Replace 'Roboto' with the font you added from Google Fonts
        Montserrat: ['Montserrat', 'sans','sans-serif'], // Replace 'Roboto' with the font you added from Google Fonts
      },
    },
  },
  plugins: [],
}