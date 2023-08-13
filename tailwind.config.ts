import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1370px", // 1280px
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
      },
    },
    fontFamily: {
      "founders-grotesk": ["var(--font-founders-grotesk)", "sans-serif"],
      "open-sans": ["var(--font-open-sans)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        gold: "#BCA474",
        primary: "#000000",
        secondary: "#808080",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#E4E4E4",
        "book-appointment-gradient-end": "rgba(240, 241, 239, 0)",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
    },
  },
  plugins: [],
};
export default config;
