/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /*header*/
        "link-clicked": "#0775A7",
        "link-normal": "#4A90E2",
        /*header*/

        /*home*/
        "title-card-main": "#7394DE",
        "card-main": "#7491D8",
        main: "#E6F3F7",
        /*home*/

        /*product*/
        "not-select": "#78717B",
        "menu-product": "#F4F4F5",
        "card-product": "#3EBED1",
        "button": "#37C7EF",
        /*product*/

        /*product information*/
        "title-product-info": "#3FBDCA",
        "product-info": "#4B5563",
        "subtitle-product-info": "#3FBDCA",
        "sub-text-product-info": "#4B5563",
        /*product information*/

      }
    },
  },
  plugins: []
}
