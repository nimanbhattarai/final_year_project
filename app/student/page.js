import React from 'react'
import Link from 'next/link'

function DashboardCard({ title, description, link }) {
  return React.createElement(
    Link,
    { href: link, className: "block p-6 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105" },
    React.createElement('h2', { className: "text-xl font-semibold mb-2" }, title),
    React.createElement('p', { className: "text-gray-600" }, description)
  )
}

export default function StudentPanel() {
  return React.createElement(
    'div',
    { className: "min-h-screen p-8" },
    React.createElement(
      'div',
      { className: "max-w-6xl mx-auto" },
      React.createElement('h1', { className: "text-3xl font-bold mb-6 text-black " }, "Student Panel"),

      React.createElement(
        'div',
        { className: "grid text-black grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 " },

        React.createElement(
        'div',
        {className:"border rounded-lg"},
        React.createElement(DashboardCard, { title: "Courses", description: "View and manage your courses", link: "/student/courses" }),
      ),
      React.createElement(
        'div',
        {className:"border rounded-lg"},
        React.createElement(DashboardCard, { title: "Grades", description: "Check your grades and academic progress", link: "/student/grades" }),
      ),
      React.createElement(
        'div',
        {className:"border rounded-lg"},
        React.createElement(DashboardCard, { title: "Schedule", description: "View your class schedule", link: "/student/schedule" }),
      ),
      React.createElement(
        'div',
        {className:"border rounded-lg"},
        React.createElement(DashboardCard, { title: "Assignments", description: "Manage your assignments", link: "/student/assignments" }),
      ),
      React.createElement(
        'div',
        {className:"border rounded-lg"},
        React.createElement(DashboardCard, { title: "Profile", description: "Update your personal information", link: "/student/profile" }),
      ),
      React.createElement(
        'div',
        {className:"border rounded-lg"},
        React.createElement(DashboardCard, { title: "Resources", description: "Access study materials and resources", link: "/student/resources" })
      ),
    ),
      React.createElement(
        Link,
        { href: "/", className: "mt-8 inline-block bg-white text-blue-500 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105" },
        "Back to Home"
      )
    )
  )
}

