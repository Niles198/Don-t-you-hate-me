export default function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="w-full" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={current}>
      <div className="h-3.5 w-full overflow-hidden rounded-full bg-white/40">
        <div className="h-full rounded-full bg-white transition-[width] duration-500 ease-out" style={{ width: `${(current / total) * 100}%` }} />
      </div>
      <p className="mt-1.5 text-right font-display text-sm font-extrabold text-white/90">{current}/{total}</p>
    </div>
  )
}
