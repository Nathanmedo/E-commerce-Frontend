/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Arvo': ['Arvo', 'sans-serif'],
        'RaleWay': ['Raleway', 'sans-serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Poppins': ['Poppins', 'sans-serif']
      },
      backgroundImage:{
        'heroBgMain': "url('/src/assets/2593068.webp')",
        'heroBgBackup': "url('/src/assets/OIP.jpg')",
        'personImg': "url('/src/assets/person image.png')",
        'headphones': "url('/src/assets/headphones.png')"
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
        'xl': '5px 5px 10px rgba(0, 0, 0, 0.5)',
        '2xl': '6px 6px 12px rgba(0, 0, 0, 0.5)',
        'none': 'none',
      }
    },
  },
  plugins: [],
}

