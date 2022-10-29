/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primaryFont : '#828282' , 
        BackBtn : ' #2D9CDB' , 
        HoverBackBtnState : '#F0402c'
      }
    },
  },
  plugins: [],
}
