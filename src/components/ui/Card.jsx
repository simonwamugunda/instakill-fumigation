import React from 'react'

export default function Card({children, className = ''}){
  return (
    <div className={`p-6 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100 ${className}`}>{children}</div>
  )
}
