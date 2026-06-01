import React from 'react'

const faqs = [
  { q: 'Address & Safety', a: 'We always provide a service address on booking. Technicians follow safety protocols and wear PPE.' },
  { q: 'Pet Precautions', a: 'Pets should be removed or secured during treatments; we will instruct you on specific timelines.' },
  { q: 'Preparation Steps', a: 'Clear surfaces, remove food items, and secure valuable items. We provide a checklist when you book.' },
  { q: 'Guarantee', a: 'We offer a satisfaction guarantee; details are provided per service and treatment type.' },
]

export default function FAQ(){
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-brand-darkBlue">FAQ</h1>

      <div className="mt-6 space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="p-4 border rounded-md">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="mt-2 text-gray-700">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
