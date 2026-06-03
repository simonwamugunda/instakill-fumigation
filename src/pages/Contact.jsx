import React from 'react'
import { Clock, MapPin, MessageSquare, Phone } from 'lucide-react'
import LeadCaptureForm from '../components/Form/LeadCaptureForm'
import contactImg from '../images/contact.jpg'
import Hero from '../components/ui/Hero'

export default function Contact(){
  return (
    <div>
      <Hero title="Contact Instakill" subtitle="Call, WhatsApp, or request a free estimate for cleaning, fumigation, and pest control." image={contactImg} eyebrow="Book service" />

      <section className="section-shell py-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="eyebrow">Fast response</span>
            <h1 className="mt-4 display-title">Tell us what is happening and we will recommend the next step</h1>
            <p className="section-copy">For urgent pest outbreaks, send a WhatsApp message with the location, service needed, and photos if available.</p>

            <div className="mt-8 grid gap-4">
              <a href="tel:+254740611883" className="premium-card flex items-center gap-4 p-5 transition hover:border-brand-primary">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand-primary text-white"><Phone className="h-6 w-6" /></span>
                <span>
                  <span className="block text-sm font-bold uppercase text-slate-500">Call</span>
                  <span className="block text-lg font-extrabold text-brand-darkBlue">0740611883</span>
                </span>
              </a>
              <a href="https://wa.me/254740611883" target="_blank" rel="noreferrer" className="premium-card flex items-center gap-4 p-5 transition hover:border-emerald-400">
                <span className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-600 text-white"><MessageSquare className="h-6 w-6" /></span>
                <span>
                  <span className="block text-sm font-bold uppercase text-slate-500">WhatsApp</span>
                  <span className="block text-lg font-extrabold text-brand-darkBlue">Message Instakill</span>
                </span>
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="premium-card p-5">
                <MapPin className="h-5 w-5 text-brand-accent" />
                <h2 className="mt-3 font-extrabold text-slate-950">Location</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">Nairobi main office. Exact address is provided on booking.</p>
              </div>
              <div className="premium-card p-5">
                <Clock className="h-5 w-5 text-brand-accent" />
                <h2 className="mt-3 font-extrabold text-slate-950">Hours</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">24/7 emergency response and scheduled service visits.</p>
              </div>
            </div>
          </div>

          <div className="premium-card p-6 shadow-xl shadow-slate-200">
            <div className="mb-5 border-b border-slate-200 pb-5">
              <p className="text-sm font-bold uppercase text-brand-accent">Free estimate</p>
              <h2 className="mt-1 text-2xl font-extrabold text-brand-darkBlue">Request a callback</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">The form opens WhatsApp with your request details ready to send.</p>
            </div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  )
}
