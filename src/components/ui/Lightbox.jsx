import React, { useEffect } from 'react'

export default function Lightbox({ images = [], startIndex = 0, onClose = () => {} }){
  const [index, setIndex] = React.useState(startIndex || 0)

  useEffect(() => setIndex(startIndex || 0), [startIndex])

  useEffect(() => {
    function onKey(e){
      if(e.key === 'Escape') onClose()
      if(e.key === 'ArrowRight') setIndex(i => (i + 1) % images.length)
      if(e.key === 'ArrowLeft') setIndex(i => (i - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [images, onClose])

  if(!images || images.length === 0) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" onClick={onClose}>
      <div className="relative max-w-4xl w-full px-4" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-2 top-2 text-white bg-black/40 px-2 py-1 rounded">Close</button>
        <img src={images[index]} alt={`image-${index}`} className="w-full h-[60vh] object-contain rounded-md shadow-lg bg-black" />

        <div className="flex items-center justify-between mt-3">
          <button onClick={() => setIndex(i => (i - 1 + images.length) % images.length)} className="px-3 py-2 bg-white/90 rounded">Prev</button>
          <div className="text-white">{index + 1} / {images.length}</div>
          <button onClick={() => setIndex(i => (i + 1) % images.length)} className="px-3 py-2 bg-white/90 rounded">Next</button>
        </div>
      </div>
    </div>
  )
}
