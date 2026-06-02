import React from 'react'

export default function Hero({ title, subtitle, image }){
  return (
    <header className="w-full" style={{backgroundImage: `linear-gradient(rgba(2,6,23,0.45), rgba(2,6,23,0.12)), url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
        {subtitle && <p className="mt-2 text-white/90">{subtitle}</p>}
      </div>
    </header>
  )
}
