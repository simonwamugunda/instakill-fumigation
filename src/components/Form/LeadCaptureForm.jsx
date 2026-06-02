import React, { useState } from 'react'
import Button from '../ui/Button'

export default function LeadCaptureForm(){
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'sofa' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Lead Payload Dispatched: ', formData)

    // Build a friendly service label for the message
    const serviceLabels = {
      sofa: 'Sofa Cleaning',
      mattress: 'Mattress Cleaning',
      deep: 'Deep Cleaning',
      carpet: 'Carpet Cleaning',
      post: 'Post Construction Cleaning',
      'tk': 'Toilet & Kitchen Cleaning',
      'pest-control': 'Pest Control'
    }

    const serviceText = serviceLabels[formData.service] || formData.service

    // WhatsApp number from contact page (international format, no plus)
    const waNumber = '254740611883'

    const message = `Hello, I need ${serviceText}. Name: ${formData.name || 'N/A'}. My phone: ${formData.phone || 'N/A'}.`
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`

    // Open WhatsApp chat in a new tab/window
    window.open(url, '_blank')

    // Optionally keep local submitted state in case open fails
    setSubmitted(true)
  }

  if(submitted){
    return (
      <div className="text-center">
        <div className="text-green-600 font-semibold text-xl">✓ Request Received</div>
        <p className="mt-2 text-gray-700">A dispatch coordinator will contact you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-600 uppercase">Your Name</label>
        <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Full name" className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow duration-150 px-3 py-2" />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 uppercase">Phone Number</label>
        <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="e.g. 07XXXXXXXX" className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow duration-150 px-3 py-2" />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-600 uppercase">Service</label>
        <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="mt-1 block w-full rounded-lg border border-gray-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-brand-primary px-3 py-2">
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
        <Button type="submit" className="w-full" variant="accent">Get Urgent Free Estimate</Button>
      </div>
    </form>
  )
}
