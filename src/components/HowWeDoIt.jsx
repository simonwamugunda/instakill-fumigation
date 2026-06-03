import React from 'react'
import { ClipboardCheck, PhoneCall, ShieldCheck, Sparkles, SprayCan } from 'lucide-react'

const defaultSteps = [
  { title: 'Inspect', desc: 'We assess the site, identify risks, and recommend the right treatment plan.' },
  { title: 'Prepare', desc: 'We protect belongings, isolate sensitive areas, and set up equipment safely.' },
  { title: 'Treat / Clean', desc: 'Certified teams apply targeted treatments or deep cleaning with pro-grade tools.' },
  { title: 'Finish', desc: 'We ventilate, dry, deodorise, and check the space before handover.' },
  { title: 'Follow Up', desc: 'You get aftercare guidance and follow-up support when the service requires it.' }
]

export default function HowWeDoIt({ steps = defaultSteps }){
  const icons = [ClipboardCheck, ShieldCheck, SprayCan, Sparkles, PhoneCall]

  return (
    <section className="section-shell py-14">
      <span className="eyebrow">Our method</span>
      <h2 className="mt-4 display-title">How We Do It</h2>
      <p className="section-copy">A clear, step-by-step approach that keeps the job safe, tidy, and easy to understand from inspection to follow-up.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s, i) => (
          <div key={i} className="premium-card p-5">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-emerald-50 text-emerald-700">
              {React.createElement(icons[i % icons.length], { className: 'h-5 w-5' })}
            </div>
            <div className="mt-4 text-xs font-bold uppercase text-brand-accent">Step {i+1}</div>
            <div className="mt-1 font-bold text-slate-950">{s.title}</div>
            <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
