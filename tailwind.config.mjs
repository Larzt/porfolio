/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        back: {
          DEFAULT: '#0b0a11', 
          100: '#12101c',
        },
        primary: {
          DEFAULT: '#cc91fa',
          100: '#d6a1ff',
          200: '#d8b2f7',
          300: '#e4c2ff',
          900: '#2c173d',
        },
      },
    },
  },

  plugins: [],
}
