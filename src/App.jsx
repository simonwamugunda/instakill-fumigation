import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './layouts/Navbar'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

export default function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
