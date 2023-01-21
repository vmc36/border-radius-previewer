module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      height: {
        squareHeight: "286px",
      },
      width: {
        squareWidth: "286px",
      },
      colors: {
        squareColor: "#FF9466",
        backgroundColor: "#222222",
        chartColor: "#626262",
        inputFontColor: "#F7F7F7",
        titleColor: "#FFE8D9",
      },
      fontFamily: {
        "Ubuntu-Mono": ["Ubuntu Mono", "Roboto"],
        "Open-Sans": ["Open Sans", "Roboto"],
      },

      screens: {
        sm: "390px",
      },
    },
  },
  plugins: [],
};
