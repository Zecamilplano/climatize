import type { Config } from "tailwindcss";
import 'tailwindcss/plugin'


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        "main": "#E6F3F7",
        /*home*/

        /*about*/
        "hero-section": "#7491D8",
        "title": "#3FBFD3",
        "timeline": "#E6F3F7",
        "timeline-card": "#37C7EF",
        "about": "#4B5563",
        "value-card": "#7394DE",
        "contact": "#3EBED1",
        "button-contact": "#37C7EF",
        "button-hover-contact": "#0775A7",
        /*about*/

        /*product*/
        "menu": "#87CEEB",
        "menu-unselected": "#3498db",
        "menu-selected": "#3498db",
        "card-product": "#3EBED1",
        "button": "#37C7EF",
        /*product*/

        /*product information*/
        "title-product-info": "#3FBDCA",
        "product-info": "#4B5563",
        "subtitle-product-info": "#3FBDCA",
        "sub-text-product-info": "#4B5563",
        /*product information*/

        /*login*/
        "input-border": "#E2E8F0",
        /*login*/

        /*add product*/
        "drag-drop-bg": "#F9FAFB",
        "drag-drop-border": "#D1D5DB",
        "drag-drop-text": "#4F5967",
        /*add product*/

        "footer": "#7394DE"
      },

      boxShadow: {
        "header": "0px 3px 0.2px rgba(104, 104, 104, 0.25)",
      },

      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
        "inter": ["Inter", "sans-serif"]
      },

      screens: {
        "tb-810": "810px",
        "tb-1180": "1180px",
        "desktop-1366": "1366px",
        "desktop-1559": "1559px",
        "desktop-2560": "2560px",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
  corePlugins: {
    "appearance": true,
  }
} satisfies Config;
