module.exports = {
  purge: [
    "./public/index.html",
    "./src/**/*.jsx",
    "./src/screens/**/*.jsx",
    "./src/shared/**/*.jsx",
  ],
  darkMode: false, // other values 'media' and 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Rokkitt", "serif"],
      mono: ["'DM Sans'", "sans-serif"],
    },
    screens: {
      xs: "453px",
      sm: "570px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    minWidth: {
      0: "0",
      "1/5": "20%",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      spacing: {
        106: "28rem",
      },
      colors: {
        "my-accent": "#0092CA",
        "my-accent-mono": "#4085CB",

        // base color + white
        "my-accent-tint": "#66BEDF",

        // base color + gray
        "my-accent-tone": "#41AED8",

        "my-contrast": "#F9FAFB",
        "my-black": "#082032",
        "my-dark": "#2C394B",
        "my-dim": "#334756",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderWidth: ["hover"],
      borderOpacity: ["hover"],
      boxShadow: ["active"],
      display: ["group-hover"],
      grayscale: ["hover"],
      ringWidth: ["active"],
      ringColor: ["active"],
      ringOpacity: ["active"],
      ringOffsetWidth: ["active"],
      textColor: ["active"],
      transitionDuration: ["hover"],
      transitionProperty: ["hover"],
    },
  },
  plugins: [],
};
