/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "soft-blue": "hsl(215, 51%, 70%)",
        cyan: "hsl(178, 100%, 50%)",
        main: "hsl(217, 54%, 11%)",
        card: "hsl(216, 50%, 16%)",
        "dark-blue": "hsl(215, 32%, 27%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
