import React from 'react'
import aboutImg from '../images/about.jpg'

export default function About(){
  return (
    <div className="py-16" style={{backgroundImage: `linear-gradient(rgba(2,6,23,0.45), rgba(2,6,23,0.2)), url(${aboutImg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-white">
        <h1 className="text-3xl font-bold">About Instakill Fumigation</h1>
        <p className="mt-4 text-white/90">Instakill Fumigation is committed to delivering safe, effective cleaning and pest control services across Nairobi, Kiambu, and country-wide. Our mission is to protect families and businesses using eco-friendly, certified methods while providing fast, compassionate service.</p>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-white/90">To provide reliable, safe and modern fumigation and cleaning services that restore comfort and safety to homes and businesses.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Service Area</h2>
          <p className="mt-2 text-white/90">We operate in Nairobi and Kiambu counties, and we also provide country-wide services for large contracts and commercial clients.</p>
        </section>
      </div>
    </div>
  )
}
