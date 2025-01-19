/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss'
const config:Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,jsx, ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./lib/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: false,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
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
      
        backgroundImage:{
          'hero-donations': 'url("/images/donations/banner/donationsBanner.png")',
          'hero-aboutus': 'url("/images/aboutus/banner/1.jpg")',
          'hero-event': 'url("/images/events/banner/eventsBanner.jpg")',
          'hero-pooja': 'url("/images/pooja-services/banner/poojaBanner.jpg")',
          'hero-prasadam': 'url("/images/prasadam-services/banner/prasadamBanner.jpg")',
          'hero-san-jose':'url("/images/sanjose/banner/1.jpg")',
          'hero-priests':'url("/images/priests/banner/priestsBanner.jpg")',
          'hero-home':'url("/images/home/banner/heroBanner.jpg")',
          'hero-goshala':'url("/images/goshala/banner/goshalaBanner.jpg")',
          'divineabode':'url("https://res.cloudinary.com/dixkqgqsi/image/upload/v1691914214/VVGC%20San%20Martin%20Temple%20Data/VVGC/IMG-20230603-WA0002_slca3v.jpg")',
        },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config