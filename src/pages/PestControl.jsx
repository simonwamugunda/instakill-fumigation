import React from 'react'

export default function PestControl(){
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-brand-darkBlue">Pest Control</h1>
      <p className="mt-4 text-gray-700">We treat a wide range of pests using targeted, safe methods.</p>

      <div className="mt-6">
        <h2 className="font-semibold">Pest Types</h2>
        <ul className="mt-2 list-disc list-inside text-gray-700">
          <li>Bed Bugs</li>
          <li>Termites</li>
          <li>Rodents</li>
          <li>Cockroaches</li>
          <li>Ants</li>
          <li>Wasps</li>
          <li>Scorpions</li>
        </ul>
      </div>
    </div>
  )
}
