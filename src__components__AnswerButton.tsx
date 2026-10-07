export default function AnswerButton({ label, selected, disabled, onClick }: { label: string; selected: boolean; disabled: boolean; onClick: () => void }) {
  return (
    <button
      type="button" onClick={onClick} disabled={disabled}
      className={`min-h-[56px] w-full rounded-2xl border-[3px] border-ink px-4 py-3 text-left font-display text-lg font-extrabold leading-tight shadow-chunk transition active:translate-y-1 active:shadow-none ${selected ? 'bg-sun' : 'bg-white hover:bg-sky-light/40'}`}
    >
      {label}
    </button>
  )
}
