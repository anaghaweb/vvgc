import './globals.css'
import Header from '../Components/header';
import Footer from '../Components/footer';
import { Open_Sans } from 'next/font/google';
import { Viewport } from 'next';

const opensans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans', fallback: 'sans' });

export default function RootLayout({ children }) {

  return (
    <html lang="en"
    // <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
    >

      <body className={`${opensans.variable} max-w-full font-sans box-border m-0`}>
      
          <Header />
          {children}
          <Footer />
        
      </body>
    </html>
  )
}
