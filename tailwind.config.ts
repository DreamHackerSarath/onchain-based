import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0D12",
        card: "#11151E",
        muted: "#A3B1C6",
        brand: {
          DEFAULT: "#7C5CFF",
          100: "#EEE9FF",
          200: "#DCD2FF",
          300: "#C9BCFF",
          400: "#A38EFF",
          500: "#7C5CFF",
          600: "#5E43D6",
          700: "#482FA8",
          800: "#322179",
          900: "#1C134B"
        }
      },
      boxShadow: { soft: "0 10px 30px rgba(124,92,255,0.25)" },
      borderRadius: { xl2: "1.25rem" }
    }
  },
  plugins: []
};
export default config;
