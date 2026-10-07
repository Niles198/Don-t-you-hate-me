export type Expression = 'main' | 'happy' | 'sad' | 'shocked' | 'angry' | 'love' | 'confused' | 'celebrate'
export type Hero = 'male' | 'female'

export const heroes: { id: Hero; label: string }[] = [
  { id: 'male', label: 'Him' },
  { id: 'female', label: 'Her' },
]

// Files: /public/assets/characters/<hero>/character-<expression>.png
export const characterPath = (hero: Hero, e: Expression) => `${import.meta.env.BASE_URL}assets/characters/${hero}/character-${e}.png`
// Files: /public/assets/avatars/<hero>/avatar-<n>.png  (n = 1..5)
export const avatarPath = (hero: Hero, n = 1) => `${import.meta.env.BASE_URL}assets/avatars/${hero}/avatar-${n}.png`

// Which face the character makes after each answer value (0-3)
export const reactionByValue: Expression[] = ['angry', 'confused', 'happy', 'love']
