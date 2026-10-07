import { useEffect, useState } from 'react'
import { characterPath, type Expression, type Hero } from '../data/characters'

// Inline SVG used only if even character-main.png is missing, so the app never shows a broken image.
function Fallback({ e }: { e: Expression }) {
  const eyes = e === 'love' ? <><text x="62" y="92" fontSize="26">❤</text><text x="112" y="92" fontSize="26">❤</text></>
    : e === 'happy' || e === 'celebrate' ? <><path d="M62 88q10-14 20 0M118 88q10-14 20 0" stroke="#1F2A44" strokeWidth="6" fill="none" strokeLinecap="round" /></>
    : <><circle cx="72" cy="86" r={e === 'shocked' ? 11 : 8} fill="#1F2A44" /><circle cx="128" cy="86" r={e === 'shocked' ? 11 : 8} fill="#1F2A44" /></>
  const mouth = e === 'sad' ? 'M78 138q22-20 44 0' : e === 'shocked' ? 'M92 130a8 10 0 1 0 16 0a8 10 0 1 0-16 0'
    : e === 'confused' ? 'M80 134q10-8 20 0t20 0' : e === 'angry' ? 'M80 136h40' : 'M76 124q24 28 48 0'
  return (
    <svg viewBox="0 0 200 220" className="h-full w-full" role="img" aria-label={`Character ${e}`}>
      <ellipse cx="100" cy="206" rx="52" ry="8" fill="rgba(31,42,68,.18)" />
      <rect x="40" y="30" width="120" height="160" rx="60" fill="#FFD25E" stroke="#1F2A44" strokeWidth="6" />
      {eyes}
      {e === 'angry' && <path d="M54 66l34 12M146 66l-34 12" stroke="#1F2A44" strokeWidth="6" strokeLinecap="round" />}
      <path d={mouth} stroke="#1F2A44" strokeWidth="6" fill={e === 'shocked' ? '#1F2A44' : 'none'} strokeLinecap="round" />
      <circle cx="54" cy="116" r="9" fill="#FF6B8B" opacity=".5" /><circle cx="146" cy="116" r="9" fill="#FF6B8B" opacity=".5" />
    </svg>
  )
}

export default function Character({ hero, expression = 'main', className = '' }: { hero: Hero; expression?: Expression; className?: string }) {
  const [src, setSrc] = useState(characterPath(hero, expression))
  const [failed, setFailed] = useState(false)
  useEffect(() => { setSrc(characterPath(hero, expression)); setFailed(false) }, [hero, expression])

  const onError = () => {
    if (src !== characterPath(hero, 'main')) setSrc(characterPath(hero, 'main'))
    else setFailed(true)
  }
  return (
    <div key={hero + expression} className={`animate-pop ${className}`}>
      <div className="animate-float h-full w-full">
        {failed ? <Fallback e={expression} /> : (
          <img src={src} onError={onError} alt="" draggable={false} className="h-full w-full select-none object-contain drop-shadow-[0_10px_0_rgba(31,42,68,.15)]" />
        )}
      </div>
    </div>
  )
}
