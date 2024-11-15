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

export default function AdminPanel() {
  return React.createElement(
    'div',
    { className: "min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8" },
    React.createElement(
      'div',
      { className: "max-w-6xl mx-auto" },
      React.createElement('h1', { className: "text-3xl font-bold mb-6 text-black" }, "Admin Panel"),
      React.createElement(
        'div',
        { className: "grid text-black grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" },
        React.createElement(DashboardCard, { title: "Students", description: "Manage student records", link: "/admin/students" }),
        React.createElement(DashboardCard, { title: "Courses", description: "Manage course offerings", link: "/admin/courses" }),
        React.createElement(DashboardCard, { title: "Faculty", description: "Manage faculty members", link: "/admin/faculty" }),
        React.createElement(DashboardCard, { title: "Schedules", description: "Manage class schedules", link: "/admin/schedules" }),
        React.createElement(DashboardCard, { title: "Grades", description: "Manage grading system", link: "/admin/grades" }),
        React.createElement(DashboardCard, { title: "Reports", description: "Generate and view reports", link: "/admin/reports" })
      ),
      React.createElement(
        Link,
        { href: "/", className: "mt-8 inline-block bg-white text-pink-500 font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105" },
        "Back to Home"
      )
    )
  )
}