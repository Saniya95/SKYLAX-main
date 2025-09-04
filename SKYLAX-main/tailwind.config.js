const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sc-dark": "#080707",
      },
      screens: {
        "mac1": "1513px",
        "mac2": "2560px",
        "lapA": "1500px",
        "1241": "1241px",
        "1092": "1092px",
        "1366": "1366px",
        "ipm": "1025px",
        "ipa": "1181px",
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
