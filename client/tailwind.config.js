/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-primary': '#C39E9E',
        'accent-secondary': '#E7D8D8',
        'accent-tertiary': '#F0E4D8',
        
        'black-custom': '#2D2D2B',
        'white-custom': '#F6F5F0'
      }
    },
  },
  plugins: [],
}

