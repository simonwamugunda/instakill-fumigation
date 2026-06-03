import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Clock, MapPin, MessageSquare, Phone, ShieldCheck } from 'lucide-react'

export default function Footer(){
  const loc = useLocation()
  const isHome = loc.pathname === '/' || loc.pathname === ''

  return (
    <footer className="mt-16 bg-slate-950 text-white">
      <div className="section-shell py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-primary">
                <ShieldCheck className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-extrabold">INSTAKILL Fumigation</h3>
                <p className="text-sm font-semibold text-emerald-300">Cleaning, fumigation, pest control</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">Safe, certified cleaning and pest control across Nairobi, Kiambu, and nationwide for larger contracts.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="tel:+254740611883" className="cta-primary">
                <Phone className="h-4 w-4" />
                0740611883
              </a>
              <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="dark-cta-secondary">
                <MessageSquare className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase text-white">Service Area</h4>
            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-300">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                Nairobi, Kiambu, and country-wide service for commercial projects.
              </p>
              <p className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                24/7 emergency response with rapid dispatch for urgent infestations.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
            <Link to="/contact" className="mt-5 inline-flex text-sm font-bold text-emerald-300 hover:text-white">Book a free inspection</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        (c) {new Date().getFullYear()} INSTAKILL Fumigation. All rights reserved.
      </div>

      {isHome && (
        <a href="tel:+254740611883" className="fixed bottom-5 left-4 z-30 hidden rounded-full bg-brand-primary px-4 py-3 text-sm font-bold text-white shadow-2xl shadow-slate-950/25 md:inline-flex">
          24/7 emergency service
        </a>
      )}
    </footer>
  )
}
