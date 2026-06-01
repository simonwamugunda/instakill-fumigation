import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="bg-brand-darkBlue text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-start justify-between gap-6">
        <div>
          <h3 className="font-bold">INTAKILL Fumigation</h3>
          <p className="mt-2 text-sm">Safe, certified cleaning & pest control across Nairobi & Kiambu.</p>
        </div>

        <div>
          <h4 className="font-semibold">Pages</h4>
          <ul className="mt-2 text-sm space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="mt-2 text-sm">0740611883</p>
          <p className="mt-1 text-sm">WhatsApp: <a href="https://wa.me/254740611883" className="underline">Message us</a></p>
        </div>
      </div>
      <div className="bg-black/20 text-center text-xs py-2">© {new Date().getFullYear()} INTAKILL Fumigation — All rights reserved</div>
    </footer>
  )
}
