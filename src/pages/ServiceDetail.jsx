import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowRight, CalendarCheck, CheckCircle2, Phone, ShieldCheck } from 'lucide-react'
import sofaImg from '../images/sofa.jpg'
import sofa2Img from '../images/sofa (2).jpg'
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
import Hero from '../components/ui/Hero'
import HowWeDoIt from '../components/HowWeDoIt'

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
  sofa: {
    title: 'Sofa Cleaning',
    desc: 'Deep upholstery cleaning for sofas, lounge chairs, and fabric seating.',
    overview: 'We lift embedded dust, odours, spills, and everyday grime while protecting fabric condition and drying time.',
    includes: ['Fabric inspection', 'Vacuuming and pre-treatment', 'Extraction cleaning', 'Deodorising and final grooming']
  },
  mattress: {
    title: 'Mattress Cleaning',
    desc: 'Remove odours, dust mites, stains, and bed bug risk with safe mattress care.',
    overview: 'A focused bedroom hygiene service for mattresses that need a cleaner, fresher, safer sleeping surface.',
    includes: ['Mattress inspection', 'Spot treatment', 'Deep extraction', 'Bed bug guidance where needed']
  },
  deep: {
    title: 'Deep Cleaning',
    desc: 'Whole-property cleaning for hygiene, freshness, and restoration.',
    overview: 'Ideal for move-ins, move-outs, rentals, offices, and spaces that need more than routine cleaning.',
    includes: ['Room-by-room cleaning', 'High-touch surface care', 'Kitchen and bathroom detailing', 'Final quality check']
  },
  carpet: {
    title: 'Carpet Cleaning',
    desc: 'Hot water extraction and stain-focused cleaning for carpets and rugs.',
    overview: 'We target foot traffic marks, odours, stains, and trapped dust to restore a cleaner carpet feel.',
    includes: ['Pre-inspection', 'Spot treatment', 'Extraction cleaning', 'Drying and aftercare advice']
  },
  post: {
    title: 'Post Construction Cleaning',
    desc: 'Thorough cleanup after construction, repairs, or renovation work.',
    overview: 'A practical handover clean for dust, debris, marks, and surfaces that need a professional final pass.',
    includes: ['Dust removal', 'Floor and surface cleaning', 'Glass and fixture detailing', 'Final handover sweep']
  },
  tk: {
    title: 'Toilet & Kitchen Cleaning',
    desc: 'Sanitising, descaling, and deep degreasing for kitchens and bathrooms.',
    overview: 'We focus on high-use wet areas where grease, scale, odour, and bacteria build up quickly.',
    includes: ['Degreasing', 'Tile and grout attention', 'Sink and toilet sanitising', 'Odour control']
  },
  'pest-control': {
    title: 'Pest Control',
    desc: 'Comprehensive pest control solutions for residential and commercial properties.',
    overview: 'Targeted treatment for infestations with guidance on prevention and follow-up needs.',
    includes: ['Bed bugs', 'Termites', 'Rodents', 'Cockroaches', 'Ants', 'Wasps', 'Scorpions']
  }
}

export default function ServiceDetail(){
  const { id } = useParams()
  const info = DETAILS[id]
  const images = SERVICE_IMAGES[id] || [pestMain]
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxStart, setLightboxStart] = useState(0)

  function openLightbox(start = 0){
    setLightboxStart(start)
    setLightboxOpen(true)
  }

  if(!info){
    return (
      <div className="section-shell py-16">
        <div className="premium-card p-8">
          <h2 className="text-2xl font-extrabold text-brand-darkBlue">Service not found</h2>
          <p className="mt-2 text-slate-600">Return to <Link to="/services" className="font-bold text-brand-primary">Services</Link>.</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Hero title={info.title} subtitle={info.desc} image={images[0]} eyebrow="Service detail" />

      <section className="section-shell py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div>
            <span className="eyebrow">What to expect</span>
            <h1 className="mt-4 display-title">{info.title}</h1>
            <p className="section-copy">{info.overview}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {info.includes.map(item => (
                <div key={item} className="premium-card flex gap-3 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm font-bold leading-6 text-slate-800">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-2xl font-extrabold text-brand-darkBlue">Service gallery</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Tap any image to view it larger.</p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {images.map((src, i) => (
                  <button key={src} onClick={() => openLightbox(i)} className="group overflow-hidden rounded-lg bg-slate-200 text-left shadow-sm">
                    <img src={src} alt={`${info.title} ${i + 1}`} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="premium-card overflow-hidden">
              <img src={images[0]} alt={info.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-extrabold text-brand-darkBlue">Book {info.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">Get a free estimate and practical preparation guidance before the team arrives.</p>
                <div className="mt-5 space-y-3">
                  <div className="flex gap-3 text-sm text-slate-700">
                    <CalendarCheck className="h-5 w-5 shrink-0 text-brand-accent" />
                    Same-day and scheduled visits
                  </div>
                  <div className="flex gap-3 text-sm text-slate-700">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-brand-accent" />
                    Safety-focused treatment process
                  </div>
                </div>
                <Link to="/contact" className="cta-primary mt-6 w-full">
                  Request estimate
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+254740611883" className="cta-secondary mt-3 w-full">
                  <Phone className="h-4 w-4" />
                  Call now
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <HowWeDoIt />

      {lightboxOpen && (
        <Lightbox images={images} startIndex={lightboxStart} onClose={() => setLightboxOpen(false)} />
      )}
    </div>
  )
}
