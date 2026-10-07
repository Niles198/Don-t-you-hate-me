import { useRef, useState } from 'react'
import { questions } from '../data/questions'
import { reactionByValue, type Expression, type Hero } from '../data/characters'
import Character from './Character'
import HeroPicker from './HeroPicker'
import ProgressBar from './ProgressBar'
import QuestionCard from './QuestionCard'

interface Props { hero: Hero; onHeroChange: (h: Hero) => void; onFinish: (answers: number[]) => void }

export default function Quiz({ hero, onHeroChange, onFinish }: Props) {
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [mood, setMood] = useState<Expression>('main')
  const answers = useRef<number[]>([])

  const answer = (value: number) => {
    setPicked(value)
    setMood(reactionByValue[value])
    answers.current.push(value)
    window.setTimeout(() => {
      if (index + 1 >= questions.length) return onFinish(answers.current)
      setIndex(index + 1); setPicked(null); setMood('main')
    }, 650)
  }

  return (
    <main className="mx-auto flex min-h-[100dvh] w-full max-w-[480px] flex-col items-center gap-4 px-5 pb-8 pt-[max(1.25rem,env(safe-area-inset-top))]">
      {index === 0 && picked === null && <HeroPicker hero={hero} onChange={onHeroChange} />}
      <ProgressBar current={index + (picked !== null ? 1 : 0)} total={questions.length} />
      <Character hero={hero} expression={mood} className="h-[30dvh] max-h-[280px] min-h-[170px] w-full" />
      <QuestionCard question={questions[index]} picked={picked} onAnswer={answer} />
    </main>
  )
}
