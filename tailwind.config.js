module.exports = {
  prefix: "tw-",
  content: ["./pages/*.js", "./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {},
    colors: {
      white: "#f8f8f8",
      transparent: "transparent",
      purple: "#AE8EE8",
      darkGray: "#212121",
      red: "#cc0000",
    },
    fontFamily: {
      trap: ["Trap"],
      arvo: ["Arvo"],
      bantayog: ["Bantayog"],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("p", "& > p");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
