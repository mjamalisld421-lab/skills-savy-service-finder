import type { Provider } from '../../types/provider'
import { formatPrice } from '../../utils/format'
import { Button } from '../ui/Button'

interface ProviderCardProps {
  provider: Provider
  onView: (provider: Provider) => void
  onBook: (provider: Provider) => void
}

export function ProviderCard({ provider, onView, onBook }: ProviderCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-evergreen/10 bg-white p-6 shadow-card transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div className={`grid size-14 shrink-0 place-items-center rounded-2xl text-lg font-bold ${provider.accent}`}>{provider.initials}</div>
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${provider.available ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
          {provider.available ? 'Available' : 'Currently busy'}
        </span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">{provider.category}</p>
        <h3 className="mt-1 text-xl font-bold text-ink">{provider.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{provider.location} · <span className="text-amber-500">★</span> {provider.rating} ({provider.reviews})</p>
      </div>
      <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">{provider.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {provider.skills.map((skill) => <span key={skill} className="rounded-full bg-canvas px-3 py-1 text-xs font-medium text-slate-600">{skill}</span>)}
      </div>
      <div className="mt-auto flex flex-col gap-4 pt-6 min-[380px]:flex-row min-[380px]:items-end min-[380px]:justify-between">
        <p className="text-xs text-slate-500">Starting at<br /><strong className="text-lg text-ink">{formatPrice(provider.price)}</strong>/hr</p>
        <div className="grid grid-cols-2 gap-2 min-[380px]:flex">
          <Button className="px-3" variant="ghost" onClick={() => onView(provider)}>View profile</Button>
          <Button className="px-4" onClick={() => onBook(provider)} disabled={!provider.available}>Book now</Button>
        </div>
      </div>
    </article>
  )
}
