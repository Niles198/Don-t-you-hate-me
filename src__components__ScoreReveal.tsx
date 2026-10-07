import { useEffect, useState } from 'react'

export default function ScoreReveal({ score }: { score: number }) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setN(score); return }
    const start = performance.now(), dur = 1400
    let raf = 0
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur)
      setN(Math.round(score * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [score])

  return (
    <div className="font-display font-extrabold leading-none text-white [text-shadow:0_6px_0_rgba(31,42,68,.25)]" aria-label={`${score} percent`}>
      <span className="text-[5.5rem] sm:text-[7rem]">{n}</span><span className="text-5xl sm:text-6xl">%</span>
    </div>
  )
}
