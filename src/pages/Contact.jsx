import React from 'react'
import LeadCaptureForm from '../components/Form/LeadCaptureForm'
import { Phone, MessageSquare } from 'lucide-react'

export default function Contact(){
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-2xl font-bold text-brand-darkBlue">Contact Us</h1>
        <p className="mt-2 text-gray-700">Call or WhatsApp us to request a free estimate.</p>

        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3"><Phone /> <a href="tel:+254740611883" className="text-brand-primary">0740611883</a></div>
          <div className="flex items-center gap-3"><MessageSquare /> <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="text-green-600">WhatsApp Us</a></div>
        </div>

        <section className="mt-6">
          <h2 className="font-semibold">Address</h2>
          <p className="text-gray-700">Nairobi (main office) — Exact address provided on booking.</p>
        </section>
      </div>

      <div className="bg-gray-50 p-6 rounded-md">
        <LeadCaptureForm />
      </div>
    </div>
  )
}
