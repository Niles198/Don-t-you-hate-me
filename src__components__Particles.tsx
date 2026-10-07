const items = ['❤', '✨', '😂', '💙', '⭐', '🫶']

export default function Particles({ count = 14 }: { count?: number }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className="absolute bottom-[-40px] animate-rise text-2xl opacity-0"
          style={{ left: `${(i * 97) % 100}%`, animationDelay: `${(i * 0.9) % 8}s`, animationDuration: `${7 + (i % 5)}s` }}>
          {items[i % items.length]}
        </span>
      ))}
    </div>
  )
}
