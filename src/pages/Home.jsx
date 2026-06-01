import React from 'react'
import { Shield, Sparkles, Award, ArrowRight, Phone } from 'lucide-react'
import LeadCaptureForm from '../components/Form/LeadCaptureForm'

const servicesData = [
  { title: 'Residential Pest Control', desc: 'Complete home protection against termites, bedbugs, and common household pests.' },
  { title: 'Commercial Fumigation', desc: 'Certified code-compliant structural treatments for warehouses, restaurants, and offices.' },
  { title: 'Emergency Outbreak Eradication', desc: 'Fast-response, maximum-efficiency deep treatments for critical infestations.' }
]

export default function Home(){
  return (
    <div id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero */}
      <section className="pt-12 md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-brand-darkBlue leading-tight">Cleaner Homes. Safer Families.</h1>
          <p className="mt-4 text-lg text-gray-700">Intakill offers professional cleaning and fumigation using eco-friendly protocols. Fast response across Nairobi, Kiambu and country-wide for large contracts.</p>
          <div className="mt-6 flex items-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-primary text-white font-semibold">Book Free Inspection</a>
            <a href="/services" className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-gray-200">View Services</a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-brand-accent text-white font-medium">
              <Phone className="w-4 h-4" />
              0740611883
            </div>
            <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-500 text-white">WhatsApp Us</a>
          </div>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-md shadow-lg">
          <LeadCaptureForm />
        </div>
      </section>

      {/* Trust bar */}
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

      {/* Services */}
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
  )
}
