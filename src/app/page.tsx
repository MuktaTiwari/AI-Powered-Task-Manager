"use client";

import Image from "next/image";
import Link from "next/link";
import { FaTasks, FaProjectDiagram, FaUsers, FaChartLine } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* ✅ Navbar */}
      <header className="flex justify-between items-center px-10 py-6 shadow-sm bg-white/70 backdrop-blur">
        <div className="flex items-center gap-3">
          <Image src="/ai-task-logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl font-bold text-blue-700">AI Task Manager</span>
        </div>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <div className="flex gap-3">
          <Link href="/login">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700">
              Register
            </button>
          </Link>
        </div>
      </header>

      {/* ✅ Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-20">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Smarter Task & Project Management
        </h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl">
          Organize, prioritize, and collaborate with your team.  
          Admins get full control, while users enjoy a clean dashboard powered by AI.
        </p>
        <div className="flex gap-4 mt-8">
          <Link href="/login">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700">
              Get Started
            </button>
          </Link>
          <Link href="#features">
            <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold shadow hover:bg-gray-300">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            Powerful Features for Teams & Admins
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="p-6 bg-blue-50 rounded-2xl shadow hover:shadow-lg transition">
              <FaTasks className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Task Management</h3>
              <p className="text-gray-600 mt-2">
                Create, assign, and track tasks effortlessly.
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-2xl shadow hover:shadow-lg transition">
              <FaProjectDiagram className="text-purple-600 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Projects Overview</h3>
              <p className="text-gray-600 mt-2">
                Track project progress with charts & analytics.
              </p>
            </div>
            <div className="p-6 bg-green-50 rounded-2xl shadow hover:shadow-lg transition">
              <FaUsers className="text-green-600 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Team Collaboration</h3>
              <p className="text-gray-600 mt-2">
                Manage team members and collaborate in real-time.
              </p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-2xl shadow hover:shadow-lg transition">
              <FaChartLine className="text-yellow-600 text-4xl mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Admin Insights</h3>
              <p className="text-gray-600 mt-2">
                Get detailed insights with role-based dashboards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Dashboard Preview */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-100 to-purple-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          A Dashboard Tailored For You
        </h2>
        <div className="max-w-5xl mx-auto shadow-lg rounded-2xl overflow-hidden border">
          <Image
            src="/dashboard-preview.png"
            alt="Dashboard Preview"
            width={1000}
            height={600}
            className="rounded-2xl"
          />
        </div>
      </section>

      {/* ✅ Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p>© {new Date().getFullYear()} AI Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
}
