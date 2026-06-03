import React from 'react'
import { Award, CheckCircle2, MapPin, ShieldCheck, Users } from 'lucide-react'
import aboutImg from '../images/about.jpg'
import Hero from '../components/ui/Hero'

const values = [
  { icon: ShieldCheck, title: 'Safety first', copy: 'We plan work around people, pets, sensitive rooms, and occupied spaces.' },
  { icon: Award, title: 'Professional finish', copy: 'The job is not done until the site is clean, checked, and ready for use.' },
  { icon: Users, title: 'Clear communication', copy: 'Clients get preparation steps, timing, and aftercare explained in plain language.' }
]

export default function About(){
  return (
    <div>
      <Hero title="About Instakill Fumigation" subtitle="A Nairobi-based cleaning and fumigation team built for safe homes, reliable workplaces, and urgent pest problems." image={aboutImg} eyebrow="About us" />

      <section className="section-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Our mission</span>
            <h1 className="mt-4 display-title">Protecting spaces with practical, modern fumigation and cleaning</h1>
            <p className="section-copy">Instakill Fumigation serves homes, offices, rentals, and commercial clients across Nairobi and Kiambu, with country-wide support for larger contracts. The team focuses on safe methods, responsive communication, and visible results.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {['Pest control', 'Deep cleaning', 'Sofa and mattress care', 'Commercial fumigation'].map(item => (
                <div key={item} className="flex gap-3 rounded-md bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm font-bold text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <img src={aboutImg} alt="Instakill fumigation technician" className="h-[30rem] w-full rounded-lg object-cover shadow-2xl shadow-slate-300" />
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="section-shell">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="premium-card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-4 text-lg font-extrabold text-brand-darkBlue">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="premium-card grid gap-6 p-6 md:grid-cols-[auto_1fr] md:items-center md:p-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-md bg-brand-primary text-white">
            <MapPin className="h-7 w-7" />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-brand-darkBlue">Service area</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">We operate in Nairobi and Kiambu counties, and provide country-wide support for larger contracts and commercial clients.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
