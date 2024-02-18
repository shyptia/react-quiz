import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        violet: {
          main: '#1F002B',
          light: '#36173D',
          dark: '#6D4376',
        },
        accent: '#E4229C',
        "disabled-accent": "#8A155F",
        grey: {
          light: '#E8EAF2',
          40: '#F2F3F5',
          200: '#C4C8CC'
        }
      }
    },
    fontSize: {
      "title-3": [
        "28px",
        {
          lineHeight: "34px",
          fontWeight: 700,
        },
      ],
      "headline-regular": [
        "17px",
        {
          lineHeight: "24px",
          fontWeight: 400,
        },
      ],
      "headline-semibold": [
        "17px",
        {
          lineHeight: "24px",
          fontWeight: 600,
        },
      ],
      "text-semibold": [
        "15px",
        {
          lineHeight: "20px",
          fontWeight: 600,
        },
      ],
      "title": [
        "17px",
        {
          lineHeight: "24px",
          fontWeight: 500,
        },
      ],
      "title-semibold": [
        "17px",
        {
          lineHeight: "24px",
          fontWeight: 800,
        },
      ],
      "caption-1": [
        "13px",
        {
          lineHeight: "16px",
          fontWeight: 600,
        },
      ],
      "percent": [
        "52px",
        {
          lineHeight: "62px",
          fontWeight: 800,
        },
      ],
    },
  },
  plugins: [],
};
export default config;
