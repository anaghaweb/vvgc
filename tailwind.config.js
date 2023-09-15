/** @type {import('tailwindcss').Config} */
export const content = [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './Components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
];
export const theme = {
  extend: {
    colors: {},
    backgroundImage: {
      'hero-pattern': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg')",
      'hero-event': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0006_vhnxgu.jpg')",
      'hero-pooja': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0005_rersoq.jpg')",
      'hero-prasadam': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0007_gsimyw.jpg')",
      'hero-priests': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914215/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0009_yam0oq.jpg')",
      'hero-about': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914217/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0014_mcraq5.jpg')",
      'hero-donate': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1689678777/VVGC%20Images/image_10.jpg')",
      'hero-sanjose': "url('https://res.cloudinary.com/dixkqgqsi/image/upload/v1694185032/VVGC%20San%20Martin%20Temple%20Data/VVGC/sanJose_o4qckq.jpg')"

    },
    fontFamily: {
      inter: ['var(--font-inter)'],
      opensans: ['var(--font-opensans )'],
      raleway: ['var(--font-raleway'],
      playfair: ['var(--font-playfair)'],
      cormorant: ['var(--font-cormorant)'],
    },
  },

  plugins: [
    'prettier-plugin-tailwindcss'
  ],
};
