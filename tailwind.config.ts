import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { lg: "1024px", xl: "1120px" },
    },
    extend: {
      colors: {
        // Ink — primary text, headers, primary buttons
        ink: {
          DEFAULT: "#16233F",
          50: "#EEF1F6",
          100: "#D5DCE8",
          300: "#8496B7",
          500: "#3C4F76",
          700: "#232F4C",
          900: "#0E1628",
        },
        // Brass — the single accent, used deliberately (wax-seal gold)
        brass: {
          DEFAULT: "#B5852F",
          100: "#F3E6C8",
          300: "#D9B876",
          700: "#8A631F",
        },
        paper: "#FDFCF9",
        sage: {
          DEFAULT: "#5C7A5E",
          100: "#E1E9DE",
        },
        clay: {
          DEFAULT: "#A6432E",
          100: "#F4DFDA",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "4px",
        DEFAULT: "6px",
        lg: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,35,63,0.06), 0 1px 0 rgba(22,35,63,0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
