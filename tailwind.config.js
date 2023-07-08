/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      lg: "1440px",
      sm: "375px",
    },
    colors: {
      white: "hsl(0, 0%, 100%)",
      alabaster: "hsl(231, 100%, 99%)",
      magnolia: "hsl(217, 100%, 97%)",
      "light-gray": "hsl(229, 24%, 87%)",
      "cool-gray": "hsl(231, 11%, 63%)",
      "dark-blue": "hsl(213, 96%, 18%)",
      "purplish-blue": "hsl(243, 100%, 62%)",
      "pastel-blue": "hsl(228, 100%, 84%)",
      "light-blue": "hsl(206, 94%, 87%)",
      "strawberry-red": "hsl(354, 84%, 57%)",
    },
  },
  plugins: [],
};
