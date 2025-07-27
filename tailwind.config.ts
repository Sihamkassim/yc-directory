import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        "100": "#D2B48C", // light brown
        DEFAULT: "#A0522D", // sienna brown
      },
      secondary: "#FBE843",
      black: {
        "100": "#333333",
        "200": "#141413",
        "300": "#7D8087",
        DEFAULT: "#000000",
      },
      white: {
        "100": "#F7F7F7",
        DEFAULT: "#FFFFFF",
      },
    },
    fontFamily: {
      "work-sans": ["var(--font-work-sans)"],
    },
    extend: {
      screens: {
        xs: "475px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        100: "2px 2px 0px 0px rgb(0, 0, 0)",
        200: "2px 2px 0px 2px rgb(0, 0, 0)",
        300: "2px 2px 0px 2px rgb(238, 43, 105)",
      },
    },
  },
  plugins: [animate, typography],
};

export default config;
