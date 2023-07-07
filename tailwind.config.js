/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mybg': '#0f172a'
        // 'mysidebg': '#374151'
      },
      margin: {
        '100px': '100px',
      }
    },

  },
  plugins: [],
}

