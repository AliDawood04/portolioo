/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      container:{
        center:true},
        colors:{
          mainColor:'#2C3E50',
          secondColor:"#1ABC9C",
          thirdCcolors:'#1A252F',
          rgbaMainColor:'rgba(26,188,165,0.7)'
        }
    },
  },
  plugins: [],
}

