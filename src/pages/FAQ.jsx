import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, HelpCircle } from 'lucide-react'
import faqImg from '../images/faq.jpg'
import Hero from '../components/ui/Hero'

const faqs = [
  { q: 'Do you provide safety guidance before treatment?', a: 'Yes. We explain preparation steps, ventilation timing, pet precautions, and aftercare based on the service selected.' },
  { q: 'Can you handle urgent pest infestations?', a: 'Yes. Call or WhatsApp 0740611883 for emergency response and the team will advise the fastest available dispatch.' },
  { q: 'What should I do before fumigation or deep cleaning?', a: 'Clear accessible surfaces, secure food and personal items, and share photos of the affected area when booking.' },
  { q: 'Do you serve areas outside Nairobi?', a: 'Yes. We serve Nairobi, Kiambu, Nakuru, Mombasa, Kajiado, and Machakos regularly, with country-wide service for larger commercial and contract work.' },
  { q: 'Do you offer a guarantee?', a: 'Guarantee terms depend on the service and treatment type. The team explains follow-up expectations before work begins.' }
]

export default function FAQ(){
  return (
    <div>
      <Hero title="Frequently Asked Questions" subtitle="Practical answers for booking, preparation, safety, and follow-up." image={faqImg} eyebrow="FAQ" />

      <section className="section-shell py-14">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="eyebrow">Before you book</span>
            <h1 className="mt-4 display-title">Straight answers for common service questions</h1>
            <p className="section-copy">If your situation is urgent or unusual, WhatsApp is the fastest way to share details and get guidance.</p>
            <Link to="/contact" className="cta-primary mt-7">
              Contact the team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={f.q} className="premium-card p-5">
                <div className="flex gap-3">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-brand-accent" />
                  <div>
                    <h2 className="font-extrabold text-brand-darkBlue">{i + 1}. {f.q}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
