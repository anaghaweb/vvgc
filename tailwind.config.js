/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './modules/**/*.{js,jsx, ts,tsx}',
    './app/**/*.{js,jsx, ts, tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './lib/**/*.{js,jsx,ts,tsx}',
  ],
  prefix: "",
  theme: {
    
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        roboto_mono: ['var(--font-roboto-mono)'],
        playfair:['var(--font-playfair)'],
        roboto:['var(--font-roboto)'],
        opensans:['var(--font-opensans)'],
        cormorant:['var(--font-cormorant)'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      
        backgroundImage: theme => ({
          'hero-donations': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1689678777/VVGC%20Images/image_10.jpg')",
          'hero-about-us': "url('/images/about-us/hero/hero.jpg')",
          'hero-event': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0006_vhnxgu.jpg')",
          'hero-pooja': "url('/images/pooja-services/hero/hero.jpg')",
          'hero-prasadam': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0007_gsimyw.jpg')",
          'hero-san-jose':"url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691930949/VVGC%20San%20Martin%20Temple%20Data/Gallery/multi-colored-elephant-statue-symbolizes-hinduism-spirituality-beauty-generated-by-ai_hquonb.jpg')",
          'hero-priests':"url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0009_yam0oq.jpg')",
          'hero-home':"url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg')",
          'hero-goshala':"url('/goshala/goshala-1.jpg')",
        }),
    },
  },
  plugins: [require("tailwindcss-animate")],
}