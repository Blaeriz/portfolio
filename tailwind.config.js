/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
      'largest' : '1080px',
    }
  },
  plugins: []
};