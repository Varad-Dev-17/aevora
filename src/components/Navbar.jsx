import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Compass, Film, Building2, Sparkles } from 'lucide-react'
import Logo from './Logo'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { label: 'Properties', path: '/properties' },
    { label: 'Cinematic Films', path: '/#cinematic-films' },
    { label: 'Neighborhoods', path: '/#neighborhoods' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ]

  const isActive = (path) => {
    if (path.startsWith('/#')) return false
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#ECE6DE] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Wordmark */}
        <Link to="/" className="inline-block">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isAnchor = link.path.startsWith('/#')
            if (isAnchor) {
              return (
                <a
                  key={link.label}
                  href={link.path}
                  className="text-xs uppercase tracking-wider font-medium text-[#5E564A] hover:text-[#1A1A1A] transition-colors"
                >
                  {link.label}
                </a>
              )
            }
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`text-xs uppercase tracking-wider font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-[#1A1A1A] font-semibold underline underline-offset-8 decoration-[#BDB09E]'
                    : 'text-[#5E564A] hover:text-[#1A1A1A]'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA & Private Client Advisor Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#1E1E1E] hover:bg-[#333333] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium transition-all shadow-2xs"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xs text-[#2E2922] hover:bg-[#F2ECE3] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#ECE6DE] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          {navLinks.map((link) => {
            const isAnchor = link.path.startsWith('/#')
            if (isAnchor) {
              return (
                <a
                  key={link.label}
                  href={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-sm uppercase tracking-wider font-medium text-[#4A4338] border-b border-[#F0EBE3]"
                >
                  {link.label}
                </a>
              )
            }
            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm uppercase tracking-wider font-medium text-[#4A4338] border-b border-[#F0EBE3]"
              >
                {link.label}
              </Link>
            )
          })}
          <div className="pt-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center block py-3 bg-[#1E1E1E] text-white text-xs uppercase tracking-widest font-medium rounded-sm"
            >
              Schedule Private Viewing
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
