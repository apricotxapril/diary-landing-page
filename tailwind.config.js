/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        128: '32rem',
        160: '40rem',
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(-6%)' },
          '33%': { transform: 'translateY(-4%)' },
          '66%': { transform: 'translateY(-2%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        floating: 'floating 3s linear infinite alternate',
      },
    },
  },
  plugins: [],
}
