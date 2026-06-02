import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Menu, X, ShieldCheck, MessageSquare } from 'lucide-react'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const menuItemsRef = useRef([])
  const menuId = 'services-menu'

  useEffect(() => {
    if (!dropdownOpen) return
    function handleDocClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false)
    }
    function handleEsc(e) {
      if (e.key === 'Escape') setDropdownOpen(false)
    }
    document.addEventListener('click', handleDocClick)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('click', handleDocClick)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [dropdownOpen])

  useEffect(() => {
    if (dropdownOpen) {
      // focus the first menu item when opened
      setTimeout(() => {
        menuItemsRef.current[0]?.focus()
      }, 0)
    }
  }, [dropdownOpen])

  function onMenuKeyDown(e) {
    const items = menuItemsRef.current
    if (!items || items.length === 0) return
    const idx = items.indexOf(document.activeElement)

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        items[(idx + 1) % items.length]?.focus()
        break
      case 'ArrowUp':
        e.preventDefault()
        items[(idx - 1 + items.length) % items.length]?.focus()
        break
      case 'Home':
        e.preventDefault()
        items[0]?.focus()
        break
      case 'End':
        e.preventDefault()
        items[items.length - 1]?.focus()
        break
      case 'Escape':
        setDropdownOpen(false)
        break
      default:
        break
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-brand-primary" />
            <Link to="/" className="font-semibold text-lg text-brand-darkBlue">INSTAKILL Fumigation</Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-700 hover:text-brand-primary font-semibold">Home</Link>
            <div className="relative" ref={dropdownRef} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button aria-expanded={dropdownOpen} aria-controls={menuId} aria-haspopup="menu" onClick={() => setDropdownOpen(v => !v)} className="text-gray-700 hover:text-brand-primary font-semibold">
                Services
              </button>
              <div id={menuId} role="menu" aria-hidden={!dropdownOpen} onKeyDown={onMenuKeyDown} className={`absolute left-0 top-full w-64 bg-white border rounded-b-md shadow-md transition-opacity z-50 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{maxHeight: 320, overflowY: 'auto'}}>
                <Link ref={el => menuItemsRef.current[0] = el} role="menuitem" tabIndex={-1} to="/services/sofa" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-brand-primary hover:text-white hover:font-semibold transition">Sofa Cleaning</Link>
                <Link ref={el => menuItemsRef.current[1] = el} role="menuitem" tabIndex={-1} to="/services/mattress" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-brand-primary hover:text-white hover:font-semibold transition">Mattress Cleaning</Link>
                <Link ref={el => menuItemsRef.current[2] = el} role="menuitem" tabIndex={-1} to="/services/deep" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-brand-primary hover:text-white hover:font-semibold transition">Deep Cleaning</Link>
                <Link ref={el => menuItemsRef.current[3] = el} role="menuitem" tabIndex={-1} to="/services/carpet" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-brand-primary hover:text-white hover:font-semibold transition">Carpet Cleaning</Link>
                <Link ref={el => menuItemsRef.current[4] = el} role="menuitem" tabIndex={-1} to="/services/post" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-brand-primary hover:text-white hover:font-semibold transition">Post Construction Cleaning</Link>
                <Link ref={el => menuItemsRef.current[5] = el} role="menuitem" tabIndex={-1} to="/services/tk" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-brand-primary hover:text-white hover:font-semibold transition">Toilet & Kitchen Cleaning</Link>
                <Link ref={el => menuItemsRef.current[6] = el} role="menuitem" tabIndex={-1} to="/services/pest-control" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-brand-primary hover:text-white hover:font-semibold transition">Pest Control</Link>
                <div className="border-t mt-1"></div>
                <Link ref={el => menuItemsRef.current[7] = el} role="menuitem" tabIndex={-1} to="/services" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 font-medium">View all services</Link>
              </div>
            </div>
            <Link to="/about" className="text-gray-700 hover:text-brand-primary font-semibold">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand-primary font-semibold">Contact</Link>
            <Link to="/faq" className="text-gray-700 hover:text-brand-primary font-semibold">FAQ</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+254740611883" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-brand-accent text-white font-semibold shadow-sm">
              <Phone className="w-4 h-4" />
              0740611883
            </a>
            <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white font-semibold shadow-sm">
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
