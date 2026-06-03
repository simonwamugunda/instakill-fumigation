import React from 'react'

export default function Button({children, className = '', variant = 'primary', ...rest}){
  const base = 'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60'
  const variants = {
    primary: 'bg-brand-primary text-white shadow-lg shadow-blue-950/20 hover:-translate-y-0.5 hover:bg-blue-900 focus:ring-brand-primary',
    ghost: 'border border-slate-300 bg-white text-brand-primary hover:-translate-y-0.5 hover:border-brand-primary hover:bg-slate-50 focus:ring-brand-primary',
    accent: 'bg-brand-accent text-white shadow-lg shadow-orange-900/20 hover:-translate-y-0.5 hover:bg-orange-700 focus:ring-brand-accent'
  }

  return (
    <button className={`${base} ${variants[variant] ?? variants.primary} ${className}`} {...rest}>{children}</button>
  )
}
