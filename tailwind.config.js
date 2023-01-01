/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          550: '#6949FF',
        },
        gray: {
          150: '#EEEEEE',
          250: '#ECECEC',
        },
      },
    },
  },
};
