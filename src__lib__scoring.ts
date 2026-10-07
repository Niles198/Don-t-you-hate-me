import { questions } from '../data/questions'
import { results, type ResultTier } from '../data/results'

export const clamp = (n: number) => Math.min(100, Math.max(0, Math.round(n)))

/** answers: one value (0-3) per question. Returns 0-100. */
export function calculateScore(answers: number[]): number {
  const max = questions.length * 3
  const sum = answers.reduce((a, b) => a + b, 0)
  return clamp((sum / max) * 100)
}

export function getResult(score: number): ResultTier {
  const s = clamp(score)
  return results.find((r) => s >= r.min && s <= r.max) ?? results[3]
}

export function shareText(score: number): string {
  return `I just found out how much my friend actually likes me 😂\nResult: ${score}%\nApparently, they DON’T HATE ME.`
}
