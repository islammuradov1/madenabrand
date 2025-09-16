import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Madena Brand',
  description: 'Premium bags — Azerbaijan'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body>{children}</body>
    </html>
  )
}
