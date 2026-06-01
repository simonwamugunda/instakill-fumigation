import React from 'react'

export default function Card({children, className = ''}){
  return (
    <div className={`p-4 rounded-md bg-white shadow ${className}`}>{children}</div>
  )
}
