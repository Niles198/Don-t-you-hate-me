import type { Question } from '../data/questions'
import AnswerButton from './AnswerButton'

interface Props { question: Question; picked: number | null; onAnswer: (value: number) => void }

export default function QuestionCard({ question, picked, onAnswer }: Props) {
  return (
    <section key={question.id} className="animate-slide w-full rounded-[28px] border-[3px] border-ink bg-white p-5 shadow-card sm:p-7">
      <h1 className="mb-5 font-display text-[1.65rem] font-extrabold leading-[1.15] sm:text-3xl">{question.text}</h1>
      <div className="flex flex-col gap-3">
        {question.options.map((opt) => (
          <AnswerButton key={opt.label} label={opt.label} selected={picked === opt.value} disabled={picked !== null} onClick={() => onAnswer(opt.value)} />
        ))}
      </div>
    </section>
  )
}
