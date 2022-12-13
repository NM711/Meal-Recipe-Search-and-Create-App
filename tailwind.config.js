/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
'./my.js', './randomMeal.html', './myRecipes.html'],
  theme: {
    extend: {
      "backgroundColor": {
        "laurelGreen": "#BDC4A7",
        "jet": "#2F2F2F",
        "lightGoldenrodYellow": "#F3F9D2",
        "cinereous": "#93827F",
        "cambridgeBlue": "#92B4A7",
      },
      "textColor": {
        "jet": "#2F2F2F",
        
      }
    },
  },
  plugins: [],
}
