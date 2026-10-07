import { useState } from 'react'
import Quiz from './components/Quiz'
import ResultScreen from './components/ResultScreen'
import type { Hero } from './data/characters'
import { calculateScore } from './lib/scoring'
import { readHeroFromUrl, readScoreFromUrl, setScoreInUrl } from './lib/url'

const stored = (): Hero => {
  try { const v = localStorage.getItem('hero'); if (v === 'male' || v === 'female') return v } catch { /* ignore */ }
  return 'male'
}

export default function App() {
  // A result URL (…completed?score=87&who=female) opens the result directly.
  const [score, setScore] = useState<number | null>(() => readScoreFromUrl())
  const [hero, setHero] = useState<Hero>(() => readHeroFromUrl() ?? stored())
  const [round, setRound] = useState(0)

  const pickHero = (h: Hero) => { setHero(h); try { localStorage.setItem('hero', h) } catch { /* ignore */ } }
  const finish = (answers: number[]) => { const s = calculateScore(answers); setScoreInUrl(s, hero); setScore(s) }
  const restart = () => { setScoreInUrl(null, hero); setScore(null); setRound((r) => r + 1) }

  return score === null
    ? <Quiz key={round} hero={hero} onHeroChange={pickHero} onFinish={finish} />
    : <ResultScreen score={score} hero={hero} onRestart={restart} />
}
