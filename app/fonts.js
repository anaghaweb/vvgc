import { Cormorant, Open_Sans, Playfair_Display } from "next/font/google";

export const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant', fallback: ['sans'] });

export const opensans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans', fallback: ['sans'] });

export const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', fallback: ['sans'] });

