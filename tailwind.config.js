module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extends: {
      transitionProperty: {
        width: "width", // https://stackoverflow.com/a/66031916
      },
    },
  },
};
