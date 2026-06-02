import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Footer(){
  const loc = useLocation()
  const isHome = loc.pathname === '/' || loc.pathname === ''

  return (
    <footer className="bg-brand-darkBlue text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-xl">INSTAKILL Fumigation</h3>
          <p className="mt-2 text-sm text-gray-200">Safe, certified cleaning & pest control across Nairobi & Kiambu. Licensed teams, eco-friendly products.</p>
          <div className="mt-4">
            <a href="tel:+254740611883" className="inline-block bg-brand-accent text-white px-4 py-2 rounded-md font-semibold shadow">Call 24/7: 0740611883</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Our Location</h4>
          <p className="mt-2 text-sm text-gray-200">Nairobi, Kenya — Serving Nairobi, Kiambu & nationwide</p>
          <a className="mt-3 inline-block text-sm text-white/90 underline" href="https://www.google.com/maps/search/Nairobi+Kenya" target="_blank" rel="noreferrer">View on Google Maps</a>

          <div className="mt-4">
            <h5 className="font-semibold">Operating Hours</h5>
            <p className="text-sm text-gray-200">24/7 Emergency Response — Rapid dispatch and on-site treatments</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-lg">Quick Links</h4>
          <ul className="mt-2 text-sm space-y-2">
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><a href="https://wa.me/254740611883" className="hover:underline">WhatsApp Us</a></li>
          </ul>
          <div className="mt-6">
            <p className="text-sm text-gray-300">Free inspection for new customers — Book now and save.</p>
            <a href="/contact" className="mt-3 inline-block bg-white text-brand-darkBlue px-4 py-2 rounded-md font-semibold">Book Free Inspection</a>
          </div>
        </div>
      </div>

      <div className="bg-black/20 text-center text-xs py-2">© {new Date().getFullYear()} INSTAKILL Fumigation — All rights reserved</div>

      {isHome && (
        <div className="fixed left-4 bottom-24">
          <div className="flex items-center gap-3 bg-brand-primary text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
            <div className="font-semibold">24/7 Emergency Service</div>
            <div className="text-sm">Call now</div>
          </div>
        </div>
      )}
    </footer>
  )
}
