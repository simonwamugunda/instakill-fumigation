import React from 'react'

export default function Button({children, className = '', ...rest}){
  return (
    <button className={`px-4 py-2 rounded-md bg-brand-primary text-white ${className}`} {...rest}>{children}</button>
  )
}
