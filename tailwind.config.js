/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        brown: '#7C616C',
        pink: '#D1B1CB',
        lightPink: '#DDCAD9',
        gray: '#E5E9EC',
        lightGreen: '#EAFDF8'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
