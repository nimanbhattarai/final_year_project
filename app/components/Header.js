'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image' 

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return React.createElement(
    'header',
    { className: 'bg-blue-600 text-white p-4' },
    React.createElement(
      'div',
      { className: 'container mx-auto flex justify-between items-center' },
      React.createElement(
        'div',
        { className: 'flex items-center space-x-4' },
        
        React.createElement(Image, {
          src: '/bvdu logo.png', 
          alt: 'bvdu logo',
          width: 40, 
          height: 40,
          className: 'rounded-full',
        }),
        React.createElement(Link, { href: '/', className: 'text-2xl font-bold' }, 'College Website')
      ),
      React.createElement(
        'nav',
        { className: 'hidden md:block' },
        React.createElement(
          'ul',
          { className: 'flex space-x-4' },
          React.createElement('li', null, React.createElement(Link, { href: '/student', className: 'hover:text-blue-200' }, 'Student')),
          React.createElement('li', null, React.createElement(Link, { href: '/admin', className: 'hover:text-blue-200' }, 'Admin')),
          React.createElement('li', null, React.createElement(Link, { href: '/about', className: 'hover:text-blue-200' }, 'About')),
          React.createElement('li', null, React.createElement(Link, { href: '/contact', className: 'hover:text-blue-200' }, 'Contact'))
        )
      ),
      React.createElement(
        'button',
        {
          className: 'md:hidden',
          onClick: toggleMenu,
          'aria-label': 'Toggle menu',
        },
        'Menu'
      )
    ),
    isMenuOpen && React.createElement(
      'nav',
      { className: 'md:hidden' },
      React.createElement(
        'ul',
        { className: 'flex flex-col space-y-2 mt-4' },
        React.createElement('li', null, React.createElement(Link, { href: '/student', className: 'block hover:text-blue-200' }, 'Student')),
        React.createElement('li', null, React.createElement(Link, { href: '/admin', className: 'block hover:text-blue-200' }, 'Admin')),
        React.createElement('li', null, React.createElement(Link, { href: '/about', className: 'block hover:text-blue-200' }, 'About')),
        React.createElement('li', null, React.createElement(Link, { href: '/contact', className: 'block hover:text-blue-200' }, 'Contact'))
      )
    )
  )
}
