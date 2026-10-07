import { avatarPath, heroes, type Hero } from '../data/characters'

export default function HeroPicker({ hero, onChange }: { hero: Hero; onChange: (h: Hero) => void }) {
  return (
    <div className="flex items-center gap-2 rounded-full border-[3px] border-ink bg-white p-1 shadow-chunk" role="radiogroup" aria-label="Choose character">
      {heroes.map((h) => (
        <button key={h.id} type="button" role="radio" aria-checked={hero === h.id} onClick={() => onChange(h.id)}
          className={`flex items-center gap-2 rounded-full py-1 pl-1 pr-4 font-display text-base font-extrabold transition ${hero === h.id ? 'bg-sun' : 'bg-transparent'}`}>
          <img src={avatarPath(h.id)} alt="" className="h-9 w-9 rounded-full object-cover object-top" />
          {h.label}
        </button>
      ))}
    </div>
  )
}
