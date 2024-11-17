import React from 'react'
import Link from 'next/link'

export default function Home() {
  return React.createElement(
    'div',
    { className: 'container mx-auto px-4 py-8' },
    React.createElement('h1', { className: 'text-4xl font-bold mb-8 text-center text-black' }, 'Welcome to Our College Portal'),
    React.createElement(
      'div',
      { className: 'grid md:grid-cols-2 gap-8' },
      React.createElement(
        'div',
        { className: 'bg-[rgb(245,245,245)] border p-6 rounded-lg shadow-md '},
        React.createElement(
          'div',
          { className: 'flex items-center mb-4 gap-5' },
          React.createElement('img',{ src: '/student.png', alt: 'student logo', width: 40, height: 40}),
          React.createElement('h2', { className: 'text-2xl text-black font-semibold mb-4 pt-4' }, 'For Students'),
        ),
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
        { className: 'bg-[rgb(245,245,245)] border p-6 rounded-lg shadow-md' },
        React.createElement(
          'div',
          { className: 'flex items-center mb-4 gap-5'},
          React.createElement('img', { src: '/administrator.png', alt: 'admin logo', width: 40, height: 40 }),
          React.createElement('h2', { className: 'text-2xl text-black font-semibold mb-4 pt-4' }, 'For Administrators'),
        ),
          React.createElement('p', { className: 'mb-4 text-black' }, 'Manage courses, faculty, and student records.'),
      
        React.createElement(
          Link,
          {
            href: '/admin',
            className: 'inline-block bg-[rgb(139,0,139)] text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors'
          },
          'Admin Portal'
        )
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-12 border rounded-lg p-6 bg-[rgb(245,245,245)] shadow-md'},
      React.createElement(
        'div',
        { className: 'flex items-center gap-4' },
      React.createElement('img',{src:'bell.png', alt: 'bell icon', width: 30, height: 30}),
      React.createElement('h2', { className: 'text-2xl font-semibold mb-4 text-green-500 pt-4' }, 'Latest News'),
      ),
      React.createElement(
        'ul',
        { className: 'space-y-4 text-blue-400 cursor-pointer'},
        React.createElement('li', {className: 'hover:text-blue-600 before:content-["•"] before:text-blue-500 before:mr-2'}, 'New course registrations open for Fall 2024'),
        React.createElement('li', {className: 'hover:text-blue-600 before:content-["•"] before:text-blue-500 before:mr-2'}, 'Campus renovation project to begin next month'),
        React.createElement('li', {className: 'hover:text-blue-600 before:content-["•"] before:text-blue-500 before:mr-2'}, 'Annual sports meet scheduled for next week')
      )
    )
  )
}