'use client'

import { Footer } from '@/components'
import '../public/styles/globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-montserrat">
        {children}
        <Footer />
      </body>
    </html>
  )
}
