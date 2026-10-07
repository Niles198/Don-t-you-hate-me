import { RotateCcw } from 'lucide-react'
import type { Hero } from '../data/characters'
import { getResult } from '../lib/scoring'
import Character from './Character'
import Particles from './Particles'
import ScoreReveal from './ScoreReveal'
import ShareButton from './ShareButton'

export default function ResultScreen({ score, hero, onRestart }: { score: number; hero: Hero; onRestart: () => void }) {
  const r = getResult(score)
  return (
    <main className="relative mx-auto flex min-h-[100dvh] w-full max-w-[480px] flex-col items-center gap-3 px-5 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))] text-center">
      <Particles />
      <p className="rounded-full border-[3px] border-ink bg-sun px-4 py-1 font-display text-base font-extrabold">YOU DON’T HATE ME</p>
      <Character hero={hero} expression={r.expression} className="h-[34dvh] max-h-[320px] min-h-[190px] w-full" />
      <ScoreReveal score={score} />
      <section className="animate-pop w-full rounded-[28px] border-[3px] border-ink bg-white p-5 shadow-card" style={{ animationDelay: '.6s' }}>
        <h1 className="font-display text-[1.75rem] font-extrabold leading-tight sm:text-3xl">{r.headline}</h1>
        <p className="mt-1 text-lg font-extrabold text-sky-deep">{r.subtitle}</p>
        <p className="mt-2 text-base font-semibold text-ink/70">{r.explanation}</p>
      </section>
      <ShareButton score={score} hero={hero} />
      <button type="button" onClick={onRestart} className="mt-1 flex items-center gap-2 font-display text-lg font-extrabold text-white underline-offset-4 hover:underline">
        <RotateCcw size={18} /> Play again
      </button>
    </main>
  )
}
