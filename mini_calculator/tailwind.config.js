/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.5)',
            '0 45px 65px rgba(0, 0, 0, 0.25)'
        ]
      },
      colors: {
        primary: "#F1F6F9",
        secondary: "#394867",
        tertiary: "#212A3E"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}