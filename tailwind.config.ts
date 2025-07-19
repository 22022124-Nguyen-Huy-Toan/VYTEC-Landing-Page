import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3AA4C9",
          foreground: "#021D2F",
          50: "#CAD0D2",
          100: "#3AA4C9",
          500: "#145781",
          700: "#04304A",
          900: "#021D2F",
        },
        secondary: {
          DEFAULT: "#145781",
          foreground: "#CAD0D2",
        },
        accent: {
          DEFAULT: "#3AA4C9",
          foreground: "#021D2F",
        },
        muted: {
          DEFAULT: "#04304A",
          foreground: "#CAD0D2",
        },
        card: {
          DEFAULT: "#04304A",
          foreground: "#CAD0D2",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
