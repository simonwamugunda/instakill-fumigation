import React from 'react'

const defaultSteps = [
  { title: 'Inspect', desc: 'We assess the area to identify issues and plan the job.' },
  { title: 'Prepare', desc: 'Protect belongings and set up equipment for a safe operation.' },
  { title: 'Treat / Clean', desc: 'Apply targeted treatments or deep-clean using industry-grade methods.' },
  { title: 'Dry & Finish', desc: 'Drying, deodorising and final checks to ensure quality.' },
  { title: 'Follow-up', desc: 'We provide guidance and follow-up visits if required.' }
]

export default function HowWeDoIt({ steps = defaultSteps }){
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-semibold">How We Do It</h2>
      <p className="mt-2 text-gray-700">A clear, step-by-step approach to ensure dependable results.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <div key={i} className="bg-white/95 p-4 rounded-md shadow">
            <div className="text-brand-primary font-bold text-lg">Step {i+1}</div>
            <div className="mt-2 font-semibold">{s.title}</div>
            <p className="mt-1 text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
