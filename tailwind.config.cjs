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
        'menu-top-section': "url('https://ik.imagekit.io/bqofr3ncj/tr:w-500/ProductsImage_2023-12-09_20_46/men-snatching-barbell_cckmls.jpg?updatedAt=1702251633895')",
        'desk-menu-top-section' : "url('https://ik.imagekit.io/bqofr3ncj/tr:w-900/ProductsImage_2023-12-09_20_46/man-doing-pushups_lqab05.jpg?updatedAt=1702251635267')"
      },
      backgroundPosition:{
        'mobile-menu-section': '0% 50%',
      },
      listStyleType:['disc'],
    },
  },
  plugins: [],
}

// /images/pexels-tima-miroshnichenko-6388395.jpg