module.exports = {
  prefix: "tw-",
  content: ["./pages/*.js", "./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      transparent: "transparent",
      purple: "#AE8EE8",
      darkGray: "#212121",
    },
    fontFamily: {
      lustria: ["Lustria"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
