import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/training', label: 'Training' },
    { to: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link
            to="/"
            className="text-xl lg:text-2xl font-semibold text-white tracking-wide hover:text-slate-300 transition-all duration-200"
          >
            Leash & Lead
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`px-4 py-2 lg:px-5 lg:py-2.5 rounded text-sm lg:text-base font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? 'bg-slate-700 text-white shadow-inner'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white hover:shadow-md'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none focus:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                      isActive(link.to)
                        ? 'bg-slate-700 text-white'
                        : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
