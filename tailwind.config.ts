import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#080808",
        graphite: "#141414",
        coal: "#0D0D0D",
        line: "#2A2A2A",
        smoke: "#A3A3A3",
        paper: "#F5F5F5",
        tiger: "#F58220",
        ember: "#D96510",
      },
      fontFamily: {
        display: ["Oswald", "Barlow Condensed", "Arial Narrow", "Impact", "sans-serif"],
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
