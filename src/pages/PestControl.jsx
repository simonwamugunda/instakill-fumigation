import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bug, CheckCircle2, Home, ShieldCheck } from 'lucide-react'
import Hero from '../components/ui/Hero'
import HowWeDoIt from '../components/HowWeDoIt'
import pestImg from '../images/pest.jpg'
import pestOne from '../images/pest control.jpg'
import pestTwo from '../images/pest control1.jpg'
import pestThree from '../images/pest control2.jpg'

const pests = ['Bed bugs', 'Cockroaches', 'Termites', 'Rodents', 'Ants', 'Wasps', 'Scorpions']

export default function PestControl(){
  return (
    <div>
      <Hero title="Pest Control" subtitle="Targeted, safe pest treatments for homes, restaurants, offices, stores, and rental properties." image={pestImg} eyebrow="Fumigation service" />

      <section className="section-shell py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <span className="eyebrow">Infestation control</span>
            <h1 className="mt-4 display-title">Stop the outbreak and reduce the chance it returns</h1>
            <p className="section-copy">We use up to date techniques and technology to effectively exterminate pests in residential homes, business (such as restaurants, hotels, and offices), and industrial facilities (such as godowns and warehouses). For bedbugs and cockroaches we give an 8 months warranty. If there is a recurrence of the infestation, a free follow up fumigation is performed. For bedbugs we perform a triple treatment: first a heat treatment for wooden items, then a manual pump spray (including clothes, shoes, and beddings), and finally thermal fogging. After the three procedures the house is locked for three hours to limit oxygen entry and allow the pesticides to settle. After 3 hours the house is ready to be occupied again.</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {pests.map(pest => (
                <div key={pest} className="premium-card flex gap-3 p-4">
                  <Bug className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <span className="text-sm font-bold text-slate-800">{pest}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={pestOne} alt="Pest control treatment" className="h-56 w-full rounded-lg object-cover shadow-lg" />
            <img src={pestTwo} alt="Pest control equipment" className="h-56 w-full rounded-lg object-cover shadow-lg" />
            <img src={pestThree} alt="Pest control result" className="col-span-2 h-64 w-full rounded-lg object-cover shadow-lg" />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="section-shell grid gap-5 md:grid-cols-3">
          {[
            { icon: Home, title: 'Homes and rentals', copy: 'Treat bedrooms, kitchens, stores, and shared spaces with practical preparation steps.' },
            { icon: ShieldCheck, title: 'Commercial spaces', copy: 'Support for offices, restaurants, shops, warehouses, and scheduled commercial treatments.' },
            { icon: CheckCircle2, title: 'Aftercare guidance', copy: 'Clear advice on re-entry, cleaning, prevention, and follow-up expectations.' }
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="premium-card p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                <Icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-lg font-extrabold text-brand-darkBlue">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <HowWeDoIt />

      <section className="section-shell pb-4">
        <div className="premium-card grid gap-5 bg-brand-primary p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h2 className="text-2xl font-extrabold">Seeing pests now?</h2>
            <p className="mt-2 text-sm leading-6 text-white/85">Send a request with the pest type, location, and photos if possible.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-brand-primary transition hover:bg-emerald-50">
            Get help
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
