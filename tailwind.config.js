/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "light-pink": "#ec8fd0",
      "dark-pink": "#d43790",
      "dark-maroon": " #4b1e3d",
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     }
    },
  },
  plugins: [],
};
