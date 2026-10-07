import type { Expression } from './characters'

export interface ResultTier {
  min: number; max: number
  headline: string; subtitle: string; explanation: string
  expression: Expression
}

export const results: ResultTier[] = [
  { min: 0, max: 20, headline: 'You might actually hate me 😭', subtitle: 'Not hate. Okay… maybe a little hate.', explanation: 'Your answers were rough. Bring snacks next time and we can start over.', expression: 'sad' },
  { min: 21, max: 40, headline: 'We need to talk.', subtitle: 'Your answers say you tolerate me. Barely.', explanation: 'There is something there, but it is hiding. Let us have a proper chat.', expression: 'shocked' },
  { min: 41, max: 60, headline: 'Okay… neutral territory.', subtitle: 'Not hate. Definitely not hate.', explanation: 'You are right in the middle. One good meme away from friendship.', expression: 'confused' },
  { min: 61, max: 80, headline: 'You definitely don’t hate me.', subtitle: 'You survived the questions. That’s basically friendship.', explanation: 'You tolerate me suspiciously well. That counts as liking.', expression: 'happy' },
  { min: 81, max: 95, headline: 'Okay wow, you actually like me.', subtitle: 'Your answers say you tolerate me suspiciously well.', explanation: 'You would reply at 3 AM and you know it. I see you.', expression: 'love' },
  { min: 96, max: 100, headline: 'Just admit I’m your favorite.', subtitle: 'Okay, I might actually be your favorite person.', explanation: 'Maximum score. Frame this and hang it on a wall.', expression: 'celebrate' },
]
