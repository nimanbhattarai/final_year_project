import React from 'react'
import Link from 'next/link'

export default function Home() {
  return React.createElement(
    'div',
    { className: 'container mx-auto px-4 py-8' },
    React.createElement('h1', { className: 'text-4xl font-bold mb-8 text-center' }, 'Welcome to Our College'),
    React.createElement(
      'div',
      { className: 'grid md:grid-cols-2 gap-8' },
      React.createElement(
        'div',
        { className: 'bg-blue-100 p-6 rounded-lg shadow-md' },
        React.createElement('h2', { className: 'text-2xl text-black font-semibold mb-4' }, 'For Students'),
        React.createElement('p', { className: 'text-black mb-4' }, 'Access your courses, grades, and resources.'),
        React.createElement(
          Link,
          {
            href: '/student',
            className: 'inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
          },
          'Student Portal'
        )
      ),
      React.createElement(
        'div',
        { className: 'bg-green-100 p-6 rounded-lg shadow-md' },
        React.createElement('h2', { className: 'text-2xl text-black font-semibold mb-4' }, 'For Administrators'),
        React.createElement('p', { className: 'mb-4 text-black' }, 'Manage courses, faculty, and student records.'),
        React.createElement(
          Link,
          {
            href: '/admin',
            className: 'inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors'
          },
          'Admin Portal'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-12' },
      React.createElement('h2', { className: 'text-2xl font-semibold mb-4' }, 'Latest News'),
      React.createElement(
        'ul',
        { className: 'space-y-4' },
        React.createElement('li', null, 'New course registrations open for Fall 2023'),
        React.createElement('li', null, 'Campus renovation project to begin next month'),
        React.createElement('li', null, 'Annual sports meet scheduled for next week')
      )
    )
  )
}