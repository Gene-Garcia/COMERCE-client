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
      sans: ["'Open Sans'", "sans-serif"],
      serif: ["'Roboto Slab'", "serif"],
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

    extend: {
      height: {
        rr28: "28rem",
        min: "min-content",
        max: "max-content",
      },

      width: {
        five: "5%",
        ten: "10%",
        fifteen: "15%",

        thirty: "30%",
        seventy: "70%",
      },

      colors: {
        "my-accent": "#0092CA",
        "my-accent-mono": "#4085CB",
        // base color + white
        "my-accent-tint": "#66BEDF",
        // base color + gray
        "my-accent-tone": "#41AED8",
        // base color + black
        "my-accent-shade": "#001449",
        "my-off-white": "#FDFDFD",

        // seller pages white pallette
        // white + white
        "my-white-tint": "#F8F9FD",
        // white + gray
        "my-white-tone": "#EDF0F4",

        // overrided tailwind black
        black: "#082032",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["active"],
      borderWidth: ["hover"],
      borderRadius: ["hover", "active"],
      boxShadow: ["active", "hover", "focus"],
      display: ["group-hover"],
      grayscale: ["hover"],
      ringWidth: ["active", "hover"],
      ringColor: ["active", "hover"],
      ringOpacity: ["active", "hover"],
      ringOffsetWidth: ["active", "hover"],
      ringOffsetColor: ["active"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
