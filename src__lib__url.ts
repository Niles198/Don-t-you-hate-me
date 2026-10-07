import { clamp } from './scoring'
import type { Hero } from '../data/characters'

// Supports /player/completed?score=87&who=female and #/player/completed?score=87&who=female
const params = (): URLSearchParams[] => {
  const h = window.location.hash
  return [new URLSearchParams(window.location.search), new URLSearchParams(h.includes('?') ? h.split('?')[1] : '')]
}

export function readScoreFromUrl(): number | null {
  for (const p of params()) {
    const v = p.get('score')
    if (v !== null && v !== '' && !Number.isNaN(Number(v))) return clamp(Number(v))
  }
  return null
}

export function readHeroFromUrl(): Hero | null {
  for (const p of params()) { const v = p.get('who'); if (v === 'male' || v === 'female') return v }
  return null
}

const q = (score: number, hero: Hero) => `#/player/completed?score=${score}&who=${hero}`

export function setScoreInUrl(score: number | null, hero: Hero) {
  const path = window.location.pathname
  window.history.replaceState(null, '', score === null ? path : path + q(score, hero))
}

export function resultLink(score: number, hero: Hero): string {
  return `${window.location.origin}${window.location.pathname}${q(score, hero)}`
}
