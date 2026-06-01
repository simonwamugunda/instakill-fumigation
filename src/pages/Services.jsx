import React from 'react'
import { ArrowRight } from 'lucide-react'

const services = [
  { id: 'sofa', title: 'Sofa Cleaning', desc: 'Deep upholstery cleaning for sofas and lounge furniture.' },
  { id: 'mattress', title: 'Mattress Cleaning', desc: 'Remove bed bugs, dust mites and stains with safe treatments.' },
  { id: 'deep', title: 'Deep Cleaning', desc: 'Whole-property deep cleaning for hygiene and restoration.' },
  { id: 'carpet', title: 'Carpet Cleaning', desc: 'Hot water extraction and stain removal for carpets.' },
  { id: 'post', title: 'Post Construction Cleaning', desc: 'Thorough cleanup after construction, removing dust and debris.' },
  { id: 'tk', title: 'Toilet & Kitchen Cleaning', desc: 'Sanitisation and deep degreasing for kitchens and bathrooms.' },
]

export default function Services(){
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brand-darkBlue">Services</h1>
      <p className="mt-2 text-gray-600">Choose a service for details or request a free estimate.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map(s => (
          <div id={s.id} key={s.id} className="p-6 border rounded-md hover:shadow-md">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="mt-2 text-gray-600">{s.desc}</p>
            <a href="#contact" className="mt-4 inline-flex items-center text-brand-primary font-medium">Request details <ArrowRight className="ml-1" /></a>
          </div>
        ))}
      </div>
    </div>
  )
}
