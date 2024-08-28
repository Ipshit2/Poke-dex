/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Lato': ["Lato", "sans-serif"],
      'Mont': ["Montserrat", "sans-serif"],
      'MPlus': ["M PLUS Rounded 1c", "sans-serif"]
    },
    extend: {
    },
    animation: {
      'spin-slow': 'spin 6s linear infinite', // Adjust the duration as needed
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
  },
  plugins: [],
}

// style="background-color:;"