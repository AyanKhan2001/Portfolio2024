import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayan Khan | Portfolio',
  description: 'Ayan Khan personal portfolio build on Next.js and seployed by netlify, please checkout my experiences and projects on this website and feel free to contact me',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
