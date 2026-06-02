import React from 'react'

export default function Input({ className = '', ...props }){
  return (
    <input className={`mt-1 block w-full rounded-lg border border-gray-200 bg-white/95 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-shadow duration-150 ${className}`} {...props} />
  )
}
