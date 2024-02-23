/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        dark:`rgb(7,7,7)`,
        black:'rgb(1,1,1)',
      }
    },
  },
  plugins: [],
}

