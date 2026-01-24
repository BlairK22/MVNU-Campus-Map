/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // MVNU Brand Colors
        'mvnu-navy': '#1F3A5F',
        'mvnu-gold': '#C4A747',
        'mvnu-light-navy': '#2D4A6F',
        'mvnu-dark-navy': '#152A45',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
