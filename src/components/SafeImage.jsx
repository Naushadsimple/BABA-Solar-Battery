import { useState } from 'react'

const FALLBACK_SOLAR = "/images/hero.jpg"

export default function SafeImage({ src, alt, className = '', fallback = FALLBACK_SOLAR }) {
  const [imgSrc, setImgSrc] = useState(src || fallback)

  return (
    <img
      src={imgSrc}
      alt={alt || 'BABA Solar Installation'}
      className={className}
      loading="lazy"
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback)
        }
      }}
    />
  )
}
