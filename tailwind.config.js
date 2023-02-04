/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      borderColor: {
        orange: "hsl(0, 78%, 62%)",
        cyan: "hsl(180, 62%, 55%)",
        orange: "hsl(34, 97%, 64%)",
        Blue: "hsl(212, 86%, 64%)",
      },
      textColor: {
        "Dark-blue": "hsl(234, 12%, 34%)",
        "Grayish-blue": "hsl(229, 6%, 66%)",
        "Gray-light": "hsl(0, 0%, 98%)",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
