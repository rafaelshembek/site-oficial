import { Inter } from 'next/font/google'
import './globals.css'
// import '../public/components/Home/home.css'
import Inicial from "../public/components/Home/page";
import Footer from "../public/components/Footer/page";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafael Silva Dev',
  description: 'Desenvolvedor Web e Mobile',
  keywords: "Developer, Web, App, Reactjs, React Native, NextJs, Desenvolvedor Web, Desenvolverdo React Native, Rafael Silva, Dev",
  robots: "index, follow"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Inicial></Inicial>
        {children}
        <Analytics />
        {/* <Footer></Footer> */}
      </body>
    </html>
  )
}
