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
        violet: '#1F002B',
        'light-violet': '#36173D',
        accent: '#E4229C',
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
    },
  },
  plugins: [],
};
export default config;
