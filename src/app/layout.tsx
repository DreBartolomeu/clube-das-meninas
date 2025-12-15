import type { Metadata } from 'next'
import './globals.css'
import { Pacifico } from "next/font/google";


const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});


export const metadata: Metadata = {
  title: 'Clube das Meninas',
  description: 'Página de login com Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex items-center justify-center">
        {children}
      </body>
    </html>
  )
}