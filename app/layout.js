import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'College Website',
  description: 'Student and Admin Panels for College Management',
}

export default function RootLayout({ children }) {
  return React.createElement(
    'html',
    { lang: 'en' },
    React.createElement(
      'body',
      { className: `${inter.className} min-h-screen flex flex-col` },
      React.createElement(Header, null),
      React.createElement('main', { className: 'flex-grow' }, children),
      React.createElement(
        'footer',
        { className: 'bg-gray-800 text-white p-4 text-center' },
        '© 2024 College Website. All rights reserved.'
      )
    )
  )
}