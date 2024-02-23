/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#010851',
        'secondary':'#9A7AF1',
        'tartiary':'#707070',
        'pink':'#EE9AE5',
        'sec-pink':'#5961F9',
        'txt':'#EBEBEB'
      },
      screens:{
        "min-sm":"417px"
      }
    },
  },
  plugins: [],
}