import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bed, Bug, Building2, CheckCircle2, Construction, Home, ShowerHead, Sparkles } from 'lucide-react'
import serviceImg from '../images/service.jpg'
import Hero from '../components/ui/Hero'
import HowWeDoIt from '../components/HowWeDoIt'
import sofaImg from '../images/sofa.jpg'
import carpetImg from '../images/carpet.jpg'
import mattressImg from '../images/mattress.jpg'
import deepImg from '../images/deep.jpg'
import postImg from '../images/post.jpg'
import tkImg from '../images/toilet and kitchen.jpg'
import pestThumb from '../images/pest control.jpg'

const services = [
  { id: 'pest-control', title: 'Pest Control', desc: 'We use up to date techniques and technology to effectively exterminate pests in residential homes, business (such as restaurants, hotels, and offices), and industrial facilities (such as godowns and warehouses).', image: pestThumb, icon: Bug, tags: ['Fumigation', 'Infestation'] },
  { id: 'sofa', title: 'Sofa Cleaning', desc: 'Deep upholstery care for sofas, lounge chairs, and fabric seating.', image: sofaImg, icon: Home, tags: ['Upholstery', 'Deodorising'] },
  { id: 'mattress', title: 'Mattress Cleaning', desc: 'Dust mite, odour, stain, and bed bug focused mattress treatment.', image: mattressImg, icon: Bed, tags: ['Bedrooms', 'Bed bugs'] },
  { id: 'deep', title: 'Deep Cleaning', desc: 'Whole-property hygiene reset for homes, rentals, offices, and facilities.', image: deepImg, icon: Sparkles, tags: ['Sanitising', 'Move-in ready'] },
  { id: 'carpet', title: 'Carpet Cleaning', desc: 'Extraction cleaning and stain removal for carpets and rugs.', image: carpetImg, icon: Building2, tags: ['Stains', 'Extraction'] },
  { id: 'post', title: 'Post Construction Cleaning', desc: 'Dust, debris, paint marks, and final handover cleaning after construction.', image: postImg, icon: Construction, tags: ['Dust removal', 'Handover'] },
  { id: 'tk', title: 'Toilet & Kitchen Cleaning', desc: 'Degreasing, descaling, sanitising, and deep cleaning for high-use wet areas.', image: tkImg, icon: ShowerHead, tags: ['Degreasing', 'Sanitising'] }
]

export default function Services(){
  return (
    <div>
      <Hero title="Professional Services" subtitle="Choose a cleaning or fumigation service, then send a request for a free estimate." image={serviceImg} eyebrow="Cleaning and pest control" />

      <section className="section-shell py-14">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <span className="eyebrow">Service menu</span>
            <h2 className="mt-4 display-title">Every service is built around safety, speed, and visible results</h2>
          </div>
          <p className="text-base leading-7 text-slate-600">Instakill handles routine cleaning, urgent pest outbreaks, property handovers, and commercial fumigation with the same practical workflow: inspect, prepare, treat, finish, and advise.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(s => {
            const Icon = s.icon

            return (
              <Link to={`/services/${s.id}`} id={s.id} key={s.id} className="service-card group">
                <div className="relative h-56 overflow-hidden">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/5 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-primary shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {s.tags.map(tag => (
                      <span key={tag} className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-brand-darkBlue">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">
                    View service
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="section-shell grid gap-6 md:grid-cols-3">
          {['Free inspection guidance', 'Clear preparation instructions', 'Fast WhatsApp booking'].map(item => (
            <div key={item} className="premium-card flex gap-3 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <p className="font-bold text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <HowWeDoIt />

      <section className="section-shell pb-4">
        <div className="premium-card grid gap-5 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h2 className="text-2xl font-extrabold text-brand-darkBlue">Not sure which service fits?</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Send photos or describe the problem on WhatsApp and the team will recommend the right treatment.</p>
          </div>
          <Link to="/contact" className="cta-primary">
            Ask for advice
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
