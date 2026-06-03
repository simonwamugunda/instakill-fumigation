import React from 'react'

export default function Hero({ title, subtitle, image, eyebrow = 'Instakill Fumigation' }){
  return (
    <header
      className="relative w-full overflow-hidden bg-slate-950"
      style={{backgroundImage: `linear-gradient(110deg, rgba(15,23,42,0.88), rgba(15,23,42,0.62) 45%, rgba(15,23,42,0.20)), url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
    >
      <div className="section-shell py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase text-white/90 backdrop-blur">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl text-lg leading-8 text-white/90">{subtitle}</p>}
        </div>
      </div>
    </header>
  )
}
