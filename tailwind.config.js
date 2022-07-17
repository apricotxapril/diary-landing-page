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
          '0%': { transform: 'translateY(-3%)' },
          '33%': { transform: 'translateY(-1%)' },
          '66%': { transform: 'translateY(1%)' },
          '100%': { transform: 'translateY(3%)' },
        },
        fading: {
          '0%': { opacity: '0' },
          '33%': { opacity: '0.33' },
          '66%': { opacity: '0.66' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        imageFloating: 'floating 3s linear infinite alternate',
        fading: 'fading 1s',
      },
    },
  },
  plugins: [],
}
