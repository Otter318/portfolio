/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#121212',
        secondary: '#1e1e1e',
        accent: '#3d3d3d',
      },
    },
  },
  plugins: [],
}

