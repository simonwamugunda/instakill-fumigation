import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import sofaImg from '../images/sofa.jpg'
import sofa2Img from '../images/sofa (2).jpg'
import bedBugsImg from '../images/bed bugs.jpg'

const DETAILS = {
  sofa: { title: 'Sofa Cleaning', desc: 'Deep upholstery cleaning for sofas and lounge furniture.' },
  mattress: { title: 'Mattress Cleaning', desc: 'Remove bed bugs, dust mites and stains with safe treatments.' },
  deep: { title: 'Deep Cleaning', desc: 'Whole-property deep cleaning for hygiene and restoration.' },
  carpet: { title: 'Carpet Cleaning', desc: 'Hot water extraction and stain removal for carpets.' },
  post: { title: 'Post Construction Cleaning', desc: 'Thorough cleanup after construction, removing dust and debris.' },
  tk: { title: 'Toilet & Kitchen Cleaning', desc: 'Sanitisation and deep degreasing for kitchens and bathrooms.' },
  'pest-control': { title: 'Pest Control', desc: 'Comprehensive pest control solutions for residential and commercial properties.' }
}

export default function ServiceDetail(){
  const { id } = useParams()
  const info = DETAILS[id]

  if(!info){
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold">Service not found</h2>
        <p className="mt-2 text-gray-600">Return to <Link to="/services" className="text-brand-primary">Services</Link></p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-darkBlue">{info.title}</h1>
      <p className="mt-4 text-gray-700">{info.desc}</p>

      {id === 'pest-control' ? (
        <div className="mt-6">
          <h2 className="font-semibold">Pest Types We Treat</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Bed Bugs</li>
            <li>Termites</li>
            <li>Rodents</li>
            <li>Cockroaches</li>
            <li>Ants</li>
            <li>Wasps</li>
            <li>Scorpions</li>
          </ul>
          <div className="mt-6">
            <img src={bedBugsImg} alt="Bed Bugs" className="w-full md:w-96 rounded-md shadow mt-4" />
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <a href="#contact" className="inline-flex items-center text-brand-primary font-medium">Request details <ArrowRight className="ml-1" /></a>
          {id === 'sofa' && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
              <img src={sofaImg} alt="Sofa" className="w-full rounded-md shadow" />
              <img src={sofa2Img} alt="Sofa 2" className="w-full rounded-md shadow" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}
