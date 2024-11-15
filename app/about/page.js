import React from 'react'
import Link from 'next/link'

export default function About() {
  return React.createElement(
    'div',
    { className: 'container mx-auto px-4 py-8' },
    React.createElement('h1', { className: 'text-4xl font-bold mb-8 text-center' }, 'About Our College'),
    React.createElement(
      'div',
      { className: 'max-w-3xl mx-auto' },
      React.createElement('p', { className: 'mb-4' }, 'Our college is dedicated to providing high-quality education and fostering a vibrant learning community. Founded in 1950, we have a rich history of academic excellence and innovation.'),
      React.createElement('p', { className: 'mb-4' }, 'We offer a wide range of undergraduate and graduate programs across various disciplines, including:'),
      React.createElement(
        'ul',
        { className: 'list-disc list-inside mb-4' },
        React.createElement('li', null, 'Arts and Humanities'),
        React.createElement('li', null, 'Science and Technology'),
        React.createElement('li', null, 'Business and Economics'),
        React.createElement('li', null, 'Health and Medicine')
      ),
      React.createElement('p', { className: 'mb-4' }, 'Our faculty consists of renowned experts in their fields, committed to providing students with the knowledge and skills needed to succeed in their chosen careers.'),
      React.createElement('h2', { className: 'text-2xl font-semibold mt-8 mb-4' }, 'Our Mission'),
      React.createElement('p', { className: 'mb-4' }, 'To inspire and empower students through education, research, and community engagement, preparing them to become leaders and innovators in a rapidly changing world.'),
      React.createElement('h2', { className: 'text-2xl font-semibold mt-8 mb-4' }, 'Campus Life'),
      React.createElement('p', { className: 'mb-4' }, 'Our beautiful campus offers state-of-the-art facilities, including modern classrooms, well-equipped laboratories, a extensive library, and various sports facilities. We also have a vibrant student community with numerous clubs and organizations to enrich your college experience.'),
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