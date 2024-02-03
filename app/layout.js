import { Inter } from 'next/font/google'
import './globals.css'
import Inicial from "../public/components/Home/page";
import Footer from "../public/components/Footer/page";
import Helmet_Head from "./helmet";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafael Silva Dev',
  description: 'Desenvolvedor Web e Mobile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Helmet_Head></Helmet_Head>
      <body className={inter.className}>
        <Inicial></Inicial>
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  )
}
