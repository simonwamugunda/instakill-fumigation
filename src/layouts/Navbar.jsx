import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, MessageSquare, Phone, ShieldCheck, X } from 'lucide-react'

const serviceLinks = [
  { to: '/services/pest-control', label: 'Pest Control' },
  { to: '/services/sofa', label: 'Sofa Cleaning' },
  { to: '/services/mattress', label: 'Mattress Cleaning' },
  { to: '/services/deep', label: 'Deep Cleaning' },
  { to: '/services/carpet', label: 'Carpet Cleaning' },
  { to: '/services/post', label: 'Post Construction' },
  { to: '/services/tk', label: 'Toilet & Kitchen' }
]

const navClass = ({ isActive }) =>
  `rounded-md px-3 py-2 text-sm font-bold transition ${isActive ? 'bg-emerald-50 text-brand-primary' : 'text-slate-700 hover:bg-slate-100 hover:text-brand-primary'}`

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
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="section-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-primary text-white shadow-lg shadow-blue-950/20">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-extrabold text-brand-darkBlue sm:text-lg">INSTAKILL</span>
              <span className="block text-xs font-bold uppercase text-emerald-700">Fumigation & Cleaning</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <div className="relative pb-2" ref={dropdownRef} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <button
                aria-expanded={dropdownOpen}
                aria-controls={menuId}
                aria-haspopup="menu"
                onClick={() => setDropdownOpen(v => !v)}
                className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 hover:text-brand-primary"
              >
                Services
                <ChevronDown className={`h-4 w-4 transition ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div
                id={menuId}
                role="menu"
                aria-hidden={!dropdownOpen}
                onKeyDown={onMenuKeyDown}
                className={`absolute left-0 top-full mt-0 w-72 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 transition ${dropdownOpen ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'}`}
              >
                <div className="p-2">
                  {serviceLinks.map((item, index) => (
                    <Link
                      key={item.to}
                      ref={el => menuItemsRef.current[index] = el}
                      role="menuitem"
                      tabIndex={-1}
                      to={item.to}
                      onClick={() => setDropdownOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-emerald-50 hover:text-brand-primary"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    ref={el => menuItemsRef.current[serviceLinks.length] = el}
                    role="menuitem"
                    tabIndex={-1}
                    to="/services"
                    onClick={() => setDropdownOpen(false)}
                    className="mt-1 block rounded-md border-t border-slate-100 px-3 py-3 text-sm font-bold text-brand-primary transition hover:bg-slate-50"
                  >
                    View all services
                  </Link>
                </div>
              </div>
            </div>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
            <NavLink to="/faq" className={navClass}>FAQ</NavLink>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a href="tel:+254740611883" className="inline-flex items-center gap-2 rounded-md bg-brand-primary px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition hover:bg-blue-900">
              <Phone className="h-4 w-4" />
              0740611883
            </a>
            <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:bg-emerald-700">
              <MessageSquare className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-brand-darkBlue md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="section-shell py-4">
            <div className="grid gap-2">
              <NavLink to="/" onClick={() => setIsOpen(false)} className={navClass}>Home</NavLink>
              <NavLink to="/services" onClick={() => setIsOpen(false)} className={navClass}>Services</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)} className={navClass}>About</NavLink>
              <NavLink to="/contact" onClick={() => setIsOpen(false)} className={navClass}>Contact</NavLink>
              <NavLink to="/faq" onClick={() => setIsOpen(false)} className={navClass}>FAQ</NavLink>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <a href="tel:+254740611883" className="cta-primary">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-bold text-white">
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
