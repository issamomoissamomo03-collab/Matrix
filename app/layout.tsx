import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Matrix Experts - Empowering Businesses with Smart IT Solutions',
  description: 'Innovation. Integration. Impact. A team of professionals enabling business transformation through innovative IT solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}





