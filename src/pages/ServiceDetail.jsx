import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import sofaImg from '../images/sofa.jpg'
import sofa2Img from '../images/sofa (2).jpg'
import bedBugsImg from '../images/bed bugs.jpg'
import carpet1 from '../images/carpet.jpg'
import carpet2 from '../images/carpet2.jpg'
import carpet3 from '../images/carpet3.jpg'
import carpet4 from '../images/carpet4.jpg'
import mattress1 from '../images/mattress.jpg'
import mattress2 from '../images/mattress2.jpg'
import mattress3 from '../images/mattress3.jpg'
import mattress4 from '../images/mattress4.jpg'
import pest1 from '../images/pest control.jpg'
import pest2 from '../images/pest control1.jpg'
import pest3 from '../images/pest control2.jpg'
import pestMain from '../images/pest.jpg'
import tk1 from '../images/toilet and kitchen.jpg'
import tk2 from '../images/toilet and kitchen2.jpg'
import tk3 from '../images/toilet and kitchen3.jpg'
import tk4 from '../images/toilet and kitchen4.jpg'
import deep1 from '../images/deep.jpg'
import deep2 from '../images/deep1.jpg'
import deep3 from '../images/deep2.jpg'
import deep4 from '../images/deep3.jpg'
import post1 from '../images/post.jpg'
import post2 from '../images/post1.jpg'
import post3 from '../images/post3.jpg'
import Lightbox from '../components/ui/Lightbox'

// helper to map service id to image arrays
const SERVICE_IMAGES = {
  sofa: [sofaImg, sofa2Img],
  carpet: [carpet1, carpet2, carpet3, carpet4],
  mattress: [mattress1, mattress2, mattress3, mattress4],
  'pest-control': [pest1, pest2, pest3],
  tk: [tk1, tk2, tk3, tk4],
  deep: [deep1, deep2, deep3, deep4],
  post: [post1, post2, post3]
}

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
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState([])
  const [lightboxStart, setLightboxStart] = useState(0)

  function openLightbox(arr, start = 0){
    setLightboxImages(arr)
    setLightboxStart(start)
    setLightboxOpen(true)
  }

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
      <div className="mt-6">
        <a href="#contact" className="inline-flex items-center text-brand-primary font-medium">Request details <ArrowRight className="ml-1" /></a>

        {/* Image galleries per service */}
        {id === 'sofa' && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {SERVICE_IMAGES.sofa.map((src, i) => (
              <img key={i} src={src} alt={`sofa-${i}`} onClick={() => openLightbox(SERVICE_IMAGES.sofa, i)} className="w-full h-48 md:h-56 object-cover rounded-md shadow cursor-pointer" />
            ))}
          </div>
        )}

        {id === 'carpet' && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {SERVICE_IMAGES.carpet.map((src,i) => (
              <img key={i} src={src} alt={`carpet-${i}`} onClick={() => openLightbox(SERVICE_IMAGES.carpet, i)} className="w-full h-48 md:h-56 object-cover rounded-md shadow cursor-pointer" />
            ))}
          </div>
        )}

        {id === 'mattress' && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {SERVICE_IMAGES.mattress.map((src,i) => (
              <img key={i} src={src} alt={`mattress-${i}`} onClick={() => openLightbox(SERVICE_IMAGES.mattress, i)} className="w-full h-48 md:h-56 object-cover rounded-md shadow cursor-pointer" />
            ))}
          </div>
        )}

        {id === 'pest-control' && (
          <div className="mt-4">
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

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              {SERVICE_IMAGES['pest-control'].map((src,i) => (
                <img key={i} src={src} alt={`pest-${i}`} onClick={() => openLightbox(SERVICE_IMAGES['pest-control'], i)} className="w-full h-48 md:h-56 object-cover rounded-md shadow cursor-pointer" />
              ))}
            </div>
          </div>
        )}

        {id === 'deep' && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <img src={deep1} alt="Deep 1" className="w-full h-48 md:h-56 object-cover rounded-md shadow" />
            <img src={deep2} alt="Deep 2" className="w-full h-48 md:h-56 object-cover rounded-md shadow" />
            <img src={deep3} alt="Deep 3" className="w-full h-48 md:h-56 object-cover rounded-md shadow" />
            <img src={deep4} alt="Deep 4" className="w-full h-48 md:h-56 object-cover rounded-md shadow" />
          </div>
        )}

        {id === 'post' && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            <img src={post1} alt="Post 1" className="w-full h-48 md:h-56 object-cover rounded-md shadow" />
            <img src={post2} alt="Post 2" className="w-full h-48 md:h-56 object-cover rounded-md shadow" />
            <img src={post3} alt="Post 3" className="w-full h-48 md:h-56 object-cover rounded-md shadow" />
          </div>
        )}

        {id === 'tk' && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
            {SERVICE_IMAGES.tk.map((src,i) => (
              <img key={i} src={src} alt={`tk-${i}`} onClick={() => openLightbox(SERVICE_IMAGES.tk, i)} className="w-full h-48 md:h-56 object-cover rounded-md shadow cursor-pointer" />
            ))}
          </div>
        )}
      
      {lightboxOpen && (
        <Lightbox images={lightboxImages} startIndex={lightboxStart} onClose={() => setLightboxOpen(false)} />
      )}
      </div>
    </div>
  )
}
