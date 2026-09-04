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
        graphite: "#151515",
        coal: "#101010",
        line: "#2A2A2A",
        smoke: "#B8B8B8",
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
