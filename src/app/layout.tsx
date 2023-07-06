import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interactive Guitar Fretboard ★ Rainbow Tech by Niadzi Muzira',
  description: 'An interactive guitar fretboard for visualising chords, scales, and various tunings - with color-coded notes and strings, making it fun and easy to memorize patterns.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
