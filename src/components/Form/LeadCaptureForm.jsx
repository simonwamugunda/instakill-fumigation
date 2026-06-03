import React, { useState } from 'react'
import { Send } from 'lucide-react'
import Button from '../ui/Button'

export default function LeadCaptureForm(){
  const [formData, setFormData] = useState({ name: '', phone: '', service: 'sofa' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceLabels = {
      sofa: 'Sofa Cleaning',
      mattress: 'Mattress Cleaning',
      deep: 'Deep Cleaning',
      carpet: 'Carpet Cleaning',
      post: 'Post Construction Cleaning',
      tk: 'Toilet & Kitchen Cleaning',
      'pest-control': 'Pest Control'
    }

    const serviceText = serviceLabels[formData.service] || formData.service
    const waNumber = '254740611883'
    const message = `Hello, I need ${serviceText}. Name: ${formData.name || 'N/A'}. My phone: ${formData.phone || 'N/A'}.`
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`

    window.open(url, '_blank')
    setSubmitted(true)
  }

  if(submitted){
    return (
      <div className="text-center">
        <div className="text-xl font-bold text-emerald-700">Request received</div>
        <p className="mt-2 text-slate-700">A dispatch coordinator will contact you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-bold uppercase text-slate-600">Your Name</label>
        <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Full name" className="field-control" />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-600">Phone Number</label>
        <input required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="e.g. 07XXXXXXXX" className="field-control" />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase text-slate-600">Service</label>
        <select value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})} className="field-control">
          <option value="sofa">Sofa Cleaning</option>
          <option value="mattress">Mattress Cleaning</option>
          <option value="deep">Deep Cleaning</option>
          <option value="carpet">Carpet Cleaning</option>
          <option value="post">Post Construction Cleaning</option>
          <option value="tk">Toilet & Kitchen Cleaning</option>
          <option value="pest-control">Pest Control</option>
        </select>
      </div>

      <Button type="submit" className="w-full" variant="accent">
        <Send className="h-4 w-4" />
        Get Free Estimate
      </Button>
    </form>
  )
}
