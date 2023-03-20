/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    fontFamily:{
      sans: ['Signika Negative', 'sans-serif']
    },
    extend: {
      height: {
        'deskT-drawer':'90%',
      },
      backgroundImage:{
        'menu-top-section': "url('/images/pexels-gleb-krasnoborov-2628215.jpg')",
        'desk-menu-top-section' : "url('/images/pexels-tima-miroshnichenko-6388395.jpg')"
      },
      backgroundPosition:{
        'mobile-menu-section': '0% 50%',
      }
    },
  },
  plugins: [],
}

// /images/pexels-tima-miroshnichenko-6388395.jpg