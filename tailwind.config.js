/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainRed: "hsl(0, 78%, 62%)",
        mainCyan: "hsl(180, 62%, 55%)",
        mainBlue: "hsl(212, 86%, 64%)",
        mainOrange: "hsl(34, 97%, 64%)",
      },
    },
  },
  plugins: [],
};
