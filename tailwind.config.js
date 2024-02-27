
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: "font1",
        secondary: "font2",
      },
      keyframes: {
        anime1: {
          '0%, 100%': { transform:'translateX(200px)'},
          '50%': { transform:'translateX(0px)'},
        }
      },
    },
  },
  plugins: [],
}