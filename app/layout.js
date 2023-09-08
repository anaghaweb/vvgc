import './globals.css'
import { Playfair } from 'next/font/google'
import Header from '@/Components/header';
import Footer from '@/Components/footer';


export const metadata = {
  title: 'VVGC Temple',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={`font-sans box-border m-0 p-0`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
