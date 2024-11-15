'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({ name: '', email: '', message: '' })
  }

  return React.createElement(
    'div',
    { className: 'container mx-auto px-4 py-8' },
    React.createElement('h1', { className: 'text-4xl font-bold mb-8 text-center' }, 'Contact Us'),
    React.createElement(
      'div',
      { className: 'max-w-2xl mx-auto' },
      React.createElement(
        'form',
        { onSubmit: handleSubmit, className: 'space-y-4' },
        React.createElement(
          'div',
          null,
          React.createElement('label', { htmlFor: 'name', className: 'block text mb-1 font-medium' }, 'Name'),
          React.createElement('input', {
            type: 'text',
            id: 'name',
            name: 'name',
            value: formData.name,
            onChange: handleChange,
            required: true,
            className: 'w-full px-3 py-2 border text-black rounded-md'
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement('label', { htmlFor: 'email', className: 'block mb-1 font-medium' }, 'Email'),
          React.createElement('input', {
            type: 'email',
            id: 'email',
            name: 'email',
            value: formData.email,
            onChange: handleChange,
            required: true,
            className: 'w-full text-black px-3 py-2 border rounded-md'
          })
        ),
        React.createElement(
          'div',
          null,
          React.createElement('label', { htmlFor: 'message', className: 'block mb-1 font-medium' }, 'Message'),
          React.createElement('textarea', {
            id: 'message',
            name: 'message',
            value: formData.message,
            onChange: handleChange,
            required: true,
            rows: 5,
            className: 'w-full text-black px-3 py-2 border rounded-md'
          })
        ),
        React.createElement('button', {
          type: 'submit',
          className: 'w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
        }, 'Send Message')
      ),
      React.createElement(
        'div',
        { className: 'mt-12' },
        React.createElement('h2', { className: 'text-2xl font-semibold mb-4' }, 'Other Ways to Reach Us'),
        React.createElement(
          'ul',
          { className: 'space-y-2' },
          React.createElement('li', null, 'Phone: (123) 456-7890'),
          React.createElement('li', null, 'Email: info@collegename.edu'),
          React.createElement('li', null, 'Address: 123 College St, City, State, ZIP')
        )
      ),
      React.createElement(
        Link,
        {
          href: '/',
          className: 'inline-block mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
        },
        'Back to Home'
      )
    )
  )
}