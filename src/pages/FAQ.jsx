import React from 'react'
import faqImg from '../images/faq.jpg'

const faqs = [
  { q: 'Address & Safety', a: 'We always provide a service address on booking. Technicians follow safety protocols and wear PPE.' },
  { q: 'Pet Precautions', a: 'Pets should be removed or secured during treatments; we will instruct you on specific timelines.' },
  { q: 'Preparation Steps', a: 'Clear surfaces, remove food items, and secure valuable items. We provide a checklist when you book.' },
  { q: 'Guarantee', a: 'We offer a satisfaction guarantee; details are provided per service and treatment type.' },
]

export default function FAQ(){
  return (
    <div className="py-16" style={{backgroundImage: `linear-gradient(rgba(2,6,23,0.45), rgba(2,6,23,0.12)), url(${faqImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
        <h1 className="text-3xl font-bold">FAQ</h1>

        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="p-4 bg-white/10 rounded-md">
              <h3 className="font-semibold">{f.q}</h3>
              <p className="mt-2">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
