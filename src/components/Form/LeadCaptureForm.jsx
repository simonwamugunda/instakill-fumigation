import React, { useState } from 'react'

export default function LeadCaptureForm(){
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'sofa' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Lead Payload Dispatched: ', formData)
    setSubmitted(true)
  }

  if(submitted){
    return (
      <div className="text-center">
        <div className="text-green-600 font-semibold text-xl">✓ Request Received Successfully</div>
        <p className="mt-2 text-gray-700">An Instakill dispatch coordinator will call you back within 15 minutes.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Your Name</label>
        <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Service</label>
        <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm">
          <option value="sofa">Sofa Cleaning</option>
          <option value="mattress">Mattress Cleaning</option>
          <option value="deep">Deep Cleaning</option>
          <option value="carpet">Carpet Cleaning</option>
          <option value="post">Post Construction Cleaning</option>
          <option value="tk">Toilet & Kitchen Cleaning</option>
          <option value="pest-control">Pest Control</option>
        </select>
      </div>

      <div>
        <button type="submit" className="w-full inline-flex justify-center px-4 py-2 rounded-md bg-brand-accent text-white font-semibold">Get Urgent Free Estimate</button>
      </div>
    </form>
  )
}
