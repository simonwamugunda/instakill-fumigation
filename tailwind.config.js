/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          darkBlue: '#0F172A',
          primary: '#1E3A8A',
          secondary: '#10B981',
          accent: '#EA580C',
        }
      }
    },
  },
  plugins: [],
}
