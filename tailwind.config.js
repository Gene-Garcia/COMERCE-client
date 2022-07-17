/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/index.html",

    // Shared folder
    "./src/shared/**/*.{tsx,jsx}",
    "./src/shared/**/**/*.{tsx,jsx}",
    "./src/shared/**/**/**/*.{tsx,jsx}",

    // "/components/*.{tsx,jsx}",
    // "/components/**/*.{tsx,jsx}",
    // "/components/**/**/*.{tsx,jsx}",
    // "/components/**/**/**/*.{tsx,jsx}",
    // "/components/**/**/**/**/*.{tsx,jsx}",

    // App directories
    "./src/screens/App/components/*.{tsx,jsx}",
    "./src/screens/App/components/**/*.{tsx,jsx}",
    "./src/screens/App/components/**/**/*.{tsx,jsx}",
    "./src/screens/App/components/**/**/**/*.{tsx,jsx}",
    "./src/screens/App/components/**/**/**/**/*.{tsx,jsx}",

    // App screns
    // "./src/screens/App/screens/**/components---",
    "./src/screens/App/screens/**/components/*.{tsx,jsx}",
    "./src/screens/App/screens/**/components/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/components/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/components/**/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/components/**/**/**/**/*.{tsx,jsx}",

    // Level 1 App screens
    // "./src/screens/App/screens/**/screens/**/components---",
    "./src/screens/App/screens/**/screens/**/components/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/components/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/components/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/components/**/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx}",

    // Level 2 App screens
    // "./src/screens/App/screens/**/screens/**/screens/**/components---",
    "./src/screens/App/screens/**/screens/**/screens/**/components/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/components/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/components/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/components/**/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx}",

    // Level 3 App screens
    // "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components---",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/**/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx}",

    // Level 4 App screens
    // "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components--",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx}",

    // Fallback Level 5 App screens - No component has reached this
    // "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/**/*.{tsx,jsx}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx}",
  ],
  // darkMode: false, // other values 'media' and 'class'
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
      minHeight: {
        alert: "2.5rem",
      },

      height: {
        rr28: "28rem",
        min: "min-content",
        max: "max-content",
        "waybill-height": "15cm",
      },

      minWidth: {
        alert: "18rem",

        18: "4.5rem",
        32: "8rem",
        rr70: "65rem",
        rr60: "60rem",
        rr35: "35rem",
        rr1: "25rem",
      },

      width: {
        34: "8.5rem",
        rr36: "36rem",
        rr50: "50rem",

        two: "2%",
        three: "3%",
        five: "5%",
        seven: "7%",
        eight: "8%",
        ten: "10%",
        thirteen: "13%",
        fifteen: "15%",

        thirty: "30%",
        thirtyfive: "35%",
        fourtyfive: "45%",
        fiftyfive: "55%",
        seventy: "70%",

        "waybill-width": "10cm",
      },

      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
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
  // variants: {
  //   extend: {
  //     backgroundColor: ["active", "odd", "focus"],
  //     borderColor: ["active", "focus-within"],
  //     borderWidth: ["hover", "active"],
  //     borderRadius: ["hover", "active", "first", "last"],
  //     boxShadow: ["active", "hover", "focus"],
  //     display: ["group-hover"],
  //     grayscale: ["hover"],
  //     ringWidth: ["active", "hover", "group-hover"],
  //     ringColor: ["active", "hover", "group-hover"],
  //     ringOpacity: ["active", "hover"],
  //     ringOffsetWidth: ["active", "hover", "group-hover"],
  //     ringOffsetColor: ["active"],
  //     textColor: ["active"],
  //     textOpacity: ["hover"],
  //   },
  // },
  plugins: [],
};
