import React from 'react'

export default function Button({children, className = '', variant = 'primary', ...rest}){
  const base = 'inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold transition-transform duration-150'
  const variants = {
    primary: 'bg-brand-primary text-white shadow-md hover:shadow-lg hover:-translate-y-0.5',
    ghost: 'bg-transparent text-brand-primary border border-gray-200 hover:bg-gray-50',
    accent: 'bg-brand-accent text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
  }

  return (
    <button className={`${base} ${variants[variant] ?? variants.primary} ${className}`} {...rest}>{children}</button>
  )
}
