/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        vvgcnav:
        {
          400: '#FF9933'
        },
        midblue: {
          400: '#081024'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0004_g8iihn.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },

    plugins: [
      'prettier-plugin-tailwindcss'
    ],
  }
}
