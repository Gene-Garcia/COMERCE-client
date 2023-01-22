/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/index.html",

    // Shared folder
    "./src/shared/**/*.{tsx,jsx,js,ts}",
    "./src/shared/**/**/*.{tsx,jsx,js,ts}",
    "./src/shared/**/**/**/*.{tsx,jsx,js,ts}",

    // "/components/*.{tsx,jsx}",
    // "/components/**/*.{tsx,jsx}",
    // "/components/**/**/*.{tsx,jsx}",
    // "/components/**/**/**/*.{tsx,jsx}",
    // "/components/**/**/**/**/*.{tsx,jsx}",

    // App directories
    "./src/screens/App/components/*.{tsx,jsx,js,ts}",
    "./src/screens/App/components/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/components/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/components/**/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/components/**/**/**/**/*.{tsx,jsx,js,ts}",

    // App screns
    // "./src/screens/App/screens/**/components---",
    "./src/screens/App/screens/**/components/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/components/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/components/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/components/**/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/components/**/**/**/**/*.{tsx,jsx,js,ts}",

    // Level 1 App screens
    // "./src/screens/App/screens/**/screens/**/components---",
    "./src/screens/App/screens/**/screens/**/components/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/components/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/components/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/components/**/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx,js,ts}",

    // Level 2 App screens
    // "./src/screens/App/screens/**/screens/**/screens/**/components---",
    "./src/screens/App/screens/**/screens/**/screens/**/components/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/components/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/components/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/components/**/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx,js,ts}",

    // Level 3 App screens
    // "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components---",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/**/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx,js,ts}",

    // Level 4 App screens
    // "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components--",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx,js,ts}",

    // Fallback Level 5 App screens - No component has reached this
    // "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/**/*.{tsx,jsx,js,ts}",
    "./src/screens/App/screens/**/screens/**/screens/**/screens/**/screens/**/screens/**/components/**/**/**/**/*.{tsx,jsx,js,ts}",
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
      minWidth: {
        "table-60": "60rem",
      },

      width: {
        thirty: "30%",
        "fourty-five": "45%",
        "fifty-five": "55%",
        seventy: "70%",
      },

      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
      },

      colors: {
        accent: "#0092CA",
        "accent-mono": "#4085CB",
        // base color + white
        "accent-tint": "#66BEDF",
        // base color + gray
        "accent-tone": "#41AED8",
        // base color + black
        "accent-shade": "#001449",

        // seller pages white pallette
        // white + white
        "white-tint": "#F8F9FD",
        // white + gray
        "white-tone": "#EDF0F4",

        // overrided tailwind black
        black: "#082032",
      },
    },
  },
  plugins: [],
};
