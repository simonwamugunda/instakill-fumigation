import React from 'react'
import { Shield, Sparkles, Award, ArrowRight, Phone } from 'lucide-react'
import LeadCaptureForm from '../components/Form/LeadCaptureForm'
import pestImg from '../images/pest.jpg'

const servicesData = [
  { title: 'Residential Pest Control', desc: 'Complete home protection against termites, bedbugs, and common household pests.' },
  { title: 'Commercial Fumigation', desc: 'Certified code-compliant structural treatments for warehouses, restaurants, and offices.' },
  { title: 'Emergency Outbreak Eradication', desc: 'Fast-response, maximum-efficiency deep treatments for critical infestations.' }
]

export default function Home(){
  return (
    <div id="home">
      {/* Full-width Hero with background image */}
      <section className="w-full">
        <div className="min-h-[70vh] md:min-h-[80vh] w-full bg-cover bg-center" style={{backgroundImage: `linear-gradient(rgba(15,23,42,0.55), rgba(15,23,42,0.25)), url(${pestImg})`}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">Cleaner Homes. Safer Families.</h1>
              <p className="mt-4 text-lg text-white">Intakill offers professional cleaning and fumigation using eco-friendly protocols. Fast response across Nairobi, Kiambu and country-wide for large contracts.</p>
              <div className="mt-6 flex items-center gap-4">
                <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-primary text-white font-semibold">Book Free Inspection</a>
                <a href="/services" className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-white/30 text-white">View Services</a>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-brand-accent text-white font-medium">
                  <Phone className="w-4 h-4" />
                  0740611883
                </div>
                <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white">WhatsApp Us</a>
              </div>
            </div>
            <div className="hidden md:block">
              {/* Decorative or secondary content could go here */}
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-12">
            <div className="bg-white/95 p-6 rounded-md shadow-lg">
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4">
          <div className="flex items-center justify-center"><Shield /></div>
          <p className="mt-2 font-medium">100% Fully Licensed & Insured</p>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-center"><Sparkles /></div>
          <p className="mt-2 font-medium">Eco-Friendly Family-Safe Products</p>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-center"><Award /></div>
          <p className="mt-2 font-medium">Top-Rated Field Experts</p>
        </div>
      </section>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section id="services" className="mt-12">
        <h2 className="text-2xl font-semibold text-brand-darkBlue">Our Core Eradication Protocols</h2>
        <p className="mt-2 text-gray-600">We don't just repel pests—we design full exclusion plans targeting the structural source.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => (
            <div key={idx} className="p-6 border rounded-md shadow-sm">
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.desc}</p>
              <a href="#contact" className="mt-4 inline-block text-brand-primary font-medium">Request details <ArrowRight className="inline-block ml-1" /></a>
            </div>
          ))}
        </div>
      </section>

    </div>
  </div>
  )
}
