const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    extend: {},
    colors: {
      ...colors,
      navgreen: "#41E296",
      background: "#177F3F",
    },
  },
};
