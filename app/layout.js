import './globals.css'
import Header from '../Components/header';
import Footer from '../Components/footer';
import { Open_Sans } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry'


const opensans = Open_Sans({ subsets: ['latin'], variable: '--font-opensans', fallback: 'sans' });

export default function RootLayout({ children }) {

  return (
    <html lang="en" >

      <body className={`${opensans.variable} max-w-full font-sans box-border m-0`}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
