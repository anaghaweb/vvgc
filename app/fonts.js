import { Cormorant, Open_Sans, Playfair_Display, Roboto, Inter, Roboto_Mono } from "next/font/google";

export const cormorant = Cormorant({ subsets: ['latin'], variable: '--font-cormorant', fallback: ['sans'], display: 'swap' });

export const opensans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans', fallback: ['sans'], display: 'swap' });

export const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair', fallback: ['sans'], display: 'swap' });

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter', fallback: ['sans'], display: 'swap' });
export const roboto = Roboto({
    subsets: ['latin'],
    style: ['normal', 'italic'],
    weight: ["100", "300", "400", "500", "700", "900"],
    variable: '--font-roboto',
    fallback: ['sans'],
    display: 'swap'
});


export const roboto_mono = Roboto_Mono({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto-mono',
})