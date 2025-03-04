import type { Config } from "tailwindcss";

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

        /*product*/
        "gray": "#78717B",
        "menu-unselected": "#F4F4F5",
        "card-product": "#3EBED1",
        "button": "#37C7EF",
        /*product*/

        /*product information*/
        "title-product-info": "#3FBDCA",
        "product-info": "#4B5563",
        "subtitle-product-info": "#3FBDCA",
        "sub-text-product-info": "#4B5563",
        /*product information*/

      },

      boxShadow: {
        "header": "0px 3px 0.2px rgba(104, 104, 104, 0.25)",
      },

      fontFamily: {
        "montserrat": ["var(--font-montserrat)"],
        "inter": ["var(--font-inter)"]
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
  plugins: [],
} satisfies Config;
