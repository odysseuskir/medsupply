/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("@tailwindcss/forms")],
  theme: {
    extend: {
      colors: {
        navgreen: "#41E296",
        background: "#177F3F",
        darkbackground: "#86AC86",
        greenbtn: "#52FF00",
        mustard_yellow: "#EAC435",
        like_blue: "#0EFBCC",
        smoky_blue: "#5982C5",
        greenblue: "#2EA36E",


      },
    },
  },
};
