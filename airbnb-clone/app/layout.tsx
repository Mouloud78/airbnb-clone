import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'
import { useState } from 'react'
import ClientOnly from './components/ClientOnly'
import Modal from './components/modals/Modal'

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}


const font = Nunito({
  subsets:["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal actionLabel='Submit' title="Hello world" isOpen/>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
