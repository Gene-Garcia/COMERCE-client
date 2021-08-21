module.exports = {
  purge: [],
  darkMode: false, // other values 'media' and 'class'
  theme: {
    screens: {
      sm: "570px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    maxWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
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
      colors: {
        "my-accent": "#0092CA",
        "my-accent-mono": "#4085CB",
        "my-contrast": "#F9FAFB",
        "my-black": "#082032",
        "my-dark": "#2C394B",
        "my-dim": "#334756",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      borderOpacity: ["hover"],
      display: ["group-hover"],
      textColor: ["active"],
      transitionDuration: ["hover"],
      transitionProperty: ["hover"],
    },
  },
  plugins: [],
};
