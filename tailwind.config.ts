import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color": "#95a4b9"
      },
      backgroundColor: {
        "navbarColor": "#00102c"
      },
      screens: {
        ssm: "540px",
        sssm: "480px",
        ssssm: "360px"
      }
    },
  },
  plugins: [],
} satisfies Config;
