/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    keyframes: {
      "background-translate": {
        "0%": {
          transform: "translateX(0%)",
        },
        "50%": {
          transform: "translateX(calc(-100% + 200vw))",
        },
        "100%": {
          transform: "translateX(0%)",
        },
      },
      "init-page": {
        "0%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        },
      },
    },
    animation: {
      "background-translate": "background-translate 60s infinite",
      "init-page": "init-page 1s ease-in-out",
    },
    extend: {},
  },
  plugins: [],
};
