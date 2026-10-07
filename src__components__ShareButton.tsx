import { useState } from 'react'
import { Check, Link2, Share2 } from 'lucide-react'
import { resultLink } from '../lib/url'
import { shareText } from '../lib/scoring'
import type { Hero } from '../data/characters'

const btn = 'flex min-h-[56px] items-center justify-center gap-2 rounded-2xl border-[3px] border-ink px-5 font-display text-lg font-extrabold shadow-chunk transition active:translate-y-1 active:shadow-none'

export default function ShareButton({ score, hero }: { score: number; hero: Hero }) {
  const [msg, setMsg] = useState('')
  const flash = (m: string) => { setMsg(m); window.setTimeout(() => setMsg(''), 2000) }

  const share = async () => {
    const text = shareText(score), url = resultLink(score, hero)
    try {
      if (navigator.share) await navigator.share({ title: 'YOU DON’T HATE ME', text, url })
      else { await navigator.clipboard.writeText(`${text}\n${url}`); flash('Result copied!') }
    } catch { /* user cancelled */ }
  }
  const copyLink = async () => {
    try { await navigator.clipboard.writeText(resultLink(score, hero)); flash('Link copied!') } catch { flash('Copy failed') }
  }

  return (
    <div className="flex w-full flex-col gap-3">
      <button type="button" onClick={share} className={`${btn} bg-pop text-white`}><Share2 size={22} /> Share my result</button>
      <button type="button" onClick={copyLink} className={`${btn} bg-white`}>{msg ? <Check size={22} /> : <Link2 size={22} />} {msg || 'Copy link'}</button>
      <span className="sr-only" aria-live="polite">{msg}</span>
    </div>
  )
}
