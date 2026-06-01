import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Menu, X, ShieldCheck, MessageSquare } from 'lucide-react'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-brand-primary" />
            <Link to="/" className="font-semibold text-lg text-brand-darkBlue">INTAKILL Fumigation</Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-brand-primary">Home</Link>
            <div className="relative group">
              <Link to="/services" className="text-gray-700 hover:text-brand-primary">Services</Link>
              <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity">
                <Link to="/services#sofa" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Sofa Cleaning</Link>
                <Link to="/services#mattress" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Mattress Cleaning</Link>
                <Link to="/services#deep" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Deep Cleaning</Link>
                <Link to="/services#carpet" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Carpet Cleaning</Link>
                <Link to="/services#post" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Post Construction Cleaning</Link>
                <Link to="/services#tk" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Toilet & Kitchen Cleaning</Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-brand-primary">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-primary">Contact</Link>
            <Link to="/faq" className="text-gray-700 hover:text-brand-primary">FAQ</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+254740611883" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-brand-accent text-white font-medium shadow-sm">
              <Phone className="w-4 h-4" />
              0740611883
            </a>
            <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white font-medium shadow-sm">
              <MessageSquare className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-brand-darkBlue focus:outline-none">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
        {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block text-gray-700 py-2">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block text-gray-700 py-2">Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 py-2">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 py-2">Contact</Link>
            <Link to="/faq" onClick={() => setIsOpen(false)} className="block text-gray-700 py-2">FAQ</Link>
            <a href="tel:+254740611883" className="block text-white bg-brand-accent px-3 py-2 rounded-md">Call Now: 0740611883</a>
            <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="block text-white bg-green-500 px-3 py-2 rounded-md">WhatsApp Us</a>
          </div>
        </div>
      )}
    </header>
  )
}
