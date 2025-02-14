import React from "react"
import naveenlogo from "../assets/naveenlogo.jpg"

export default function Header() {
  return (
    <>
      <header className="w-full bg-blue-600 text-white">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Logo on the Left */}
          <div className="text-2xl font-bold flex-shrink-0">
            <img src={naveenlogo} className="w-12 h-auto" alt="Logo" />
          </div>

          {/* Navigation Center */}
          <nav className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#project" className="hover:text-gray-200">
                  Project
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-200">
                  About
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl focus:outline-none"
            // Add a state for toggling menu visibility
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden bg-blue-700">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
