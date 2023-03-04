/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-white': 'hsl(0, 0%, 91%)',
        'text-gray': 'hsl(0, 0%, 34%)',
        'accent-purple': 'hsl(277, 34%, 34%)',
        'btn-bg': 'hsl(267, 51%, 26%)',
        'btn-bg-secondary': 'hsl(267, 100%, 13%)',
        'main-bg': 'hsl(257, 36%, 16%)',
      },
      backgroundImage: {
        'hero-image': "url('/bg-mage.png')",
        'hero-image-sm': "url('/bg-sm-mage.png')",

      },
      fontFamily: {
        "alata": "Alata, sans- serif",
        "nunito": "'Nunito Sans', sans-serif"
      },
      boxShadow: {
        "link": "0px 4px 10px rgba(0, 0, 0, 0.25)",
        "link-active": "0px 4px 10px #A60AC7",
        "text": "0px 4px 4px rgba(0, 0, 0, 0.25)",

      },
      borderRadius: {
        "link": "26px"
      },
      fontSize: {
        "logo": '1.688rem',
        "navlink": '0.75rem',
        "page-title": '3.25rem',
        "paragraph": ["0.875rem", "158.5%"],
        "sup-title": "1.25rem",
        "sub-title": '0.875rem',
        "mini-title": ['0.75rem', '0']
      },
      dropShadow: {
        'navlink': '0px 4px 10px #A60AC7'
      }
    },
  },
  plugins: [],
}
