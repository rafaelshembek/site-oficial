import { Inter } from 'next/font/google'
import './globals.css'
import Inicial from "../public/components/Home/page";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rafael Silva Dev',
  description: 'Desenvolvedor Web e Mobile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Inicial></Inicial>
        {children}
      </body>
    </html>
  )
}
