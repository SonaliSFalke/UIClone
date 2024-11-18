/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customGray: '#292A32',
        customGrayT: '#191A23',
        customGreen: '#B9FF66',
 // Add a name for the hex code
      },
    },
  },
  plugins: [],
}

