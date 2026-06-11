import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Building2, CheckCircle2, Clock, Home as HomeIcon, Phone, Shield, Sparkles } from 'lucide-react'
import LeadCaptureForm from '../components/Form/LeadCaptureForm'
import HowWeDoIt from '../components/HowWeDoIt'
import pestImg from '../images/pest.jpg'
import sofaImg from '../images/sofa.jpg'
import carpetImg from '../images/carpet.jpg'
import mattressImg from '../images/mattress.jpg'
import deepImg from '../images/deep.jpg'

const servicesData = [
  { title: 'Residential Pest Control', desc: 'Bed bugs, cockroaches, termites, ants, rodents, and emergency infestations.', image: pestImg, icon: HomeIcon, href: '/services/pest-control' },
  { title: 'Sofa & Mattress Cleaning', desc: 'Deep upholstery extraction, stain removal, deodorising, and fabric-safe care.', image: sofaImg, icon: Sparkles, href: '/services/sofa' },
  { title: 'Commercial Fumigation', desc: 'Office, restaurant, warehouse, and rental property treatments with practical scheduling.', image: deepImg, icon: Building2, href: '/services/deep' }
]

const trustItems = [
  { icon: Shield, title: 'Licensed & insured', copy: 'Professional teams with safety-first site handling.' },
  { icon: Sparkles, title: 'Eco-aware products', copy: 'Family-conscious treatments and clear aftercare guidance.' },
  { icon: Award, title: 'Field experience', copy: 'Practical solutions for homes, rentals, offices, and facilities.' }
]

export default function Home(){
  return (
    <div id="home">
      <section
        className="relative overflow-hidden bg-slate-950"
        style={{backgroundImage: `linear-gradient(105deg, rgba(15,23,42,0.93), rgba(15,23,42,0.72) 48%, rgba(15,23,42,0.28)), url(${pestImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <div className="section-shell grid min-h-[calc(100vh-5rem)] grid-cols-1 items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase text-white/90 backdrop-blur">24/7 fumigation response</span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">Skilled and Experienced Pest exterminators and cleaners</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">Welcome to Instakill Fumigation & Cleaning Services Ltd. We provide a comprehensive range of effective pest control and fumigation services for residential homes, commercial establishments such as restaurants, hotels, offices, and retail spaces, as well as industrial facilities including warehouses, godowns, and manufacturing plants. Our team is fully licensed, certified, and compliant with all relevant Kenyan regulatory authorities, ensuring that every service is delivered safely, professionally, and to the highest industry standards. In addition to pest control, we offer a wide range of professional cleaning and maintenance services, including sofa cleaning, deep cleaning, post-construction cleaning, landscaping, water tank cleaning, office cleaning, and general property maintenance.</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="cta-primary">
                Book Free Inspection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="dark-cta-secondary">View Services</Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3">
              {['Same-day dispatch', 'PPE-ready teams', 'Aftercare guidance'].map(item => (
                <div key={item} className="rounded-md border border-white/15 bg-white/10 px-3 py-3 text-sm font-semibold text-white backdrop-blur">
                  <CheckCircle2 className="mb-2 h-4 w-4 text-emerald-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card bg-white/95 p-5 shadow-2xl shadow-slate-950/25">
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-sm font-bold uppercase text-brand-accent">Free estimate</p>
                <h2 className="mt-1 text-2xl font-extrabold text-brand-darkBlue">Request dispatch</h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">Send your details straight to WhatsApp.</p>
              </div>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
                <Clock className="h-6 w-6" />
              </span>
            </div>
            <LeadCaptureForm />
          </div>
        </div>
      </section>

      <section className="section-shell -mt-8 relative z-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {trustItems.map(({ icon: Icon, title, copy }) => (
            <div key={title} className="premium-card p-5">
              <Icon className="h-6 w-6 text-brand-primary" />
              <h3 className="mt-3 font-extrabold text-slate-950">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Core services</span>
            <h2 className="mt-4 display-title">Built for urgent pest problems and serious cleaning jobs</h2>
            <p className="section-copy">Clear service options, practical preparation advice, and teams that know how to work around homes, rentals, offices, and commercial spaces.</p>
          </div>
          <Link to="/services" className="cta-secondary shrink-0">
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {servicesData.map(({ title, desc, image, icon: Icon, href }) => (
            <Link to={href} key={title} className="service-card group">
              <div className="relative h-52 overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-md bg-white text-brand-primary shadow-lg">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-extrabold text-brand-darkBlue">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">
                  View service
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-14 text-white">
        <div className="section-shell grid grid-cols-1 gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <img src={carpetImg} alt="Professional carpet cleaning result" className="h-72 w-full rounded-lg object-cover shadow-2xl shadow-slate-950/30" />
          <div>
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase text-emerald-200">Why clients choose us</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">The site should feel clean after the work, not complicated during the work.</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Free inspection guidance', 'Safe handling of occupied spaces', 'Clear preparation checklist', 'Responsive phone and WhatsApp support'].map(item => (
                <div key={item} className="flex gap-3 rounded-md border border-white/10 bg-white/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <p className="text-sm font-semibold leading-6 text-white/90">{item}</p>
                </div>
              ))}
            </div>
            <a href="tel:+254740611883" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 hover:text-white">
              <Phone className="h-4 w-4" />
              Call 0740611883
            </a>
          </div>
        </div>
      </section>

      <HowWeDoIt />

      <section className="section-shell pb-4">
        <div className="premium-card grid gap-6 bg-brand-primary p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <h2 className="text-2xl font-extrabold">Need help today?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85">Send a WhatsApp request with the service you need and the team will follow up with next steps.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-brand-primary transition hover:bg-emerald-50">
            Contact Instakill
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
