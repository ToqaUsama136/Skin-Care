/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmsans: ['"DM Sans"', "sans-serif"],
        jakarta: ["'Plus Jakarta Sans'", "sans-serif"],
        playfair: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
