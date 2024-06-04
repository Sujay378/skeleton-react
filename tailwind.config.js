/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-unimportant")],
  corePlugins: {
    preflight: false,
  },
};
