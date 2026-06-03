import React from 'react'

export default function Card({children, className = ''}){
  return (
    <div className={`premium-card p-6 ${className}`}>{children}</div>
  )
}
