import type { Provider } from '../../types/provider'
import { formatPrice } from '../../utils/format'
import { Button } from '../ui/Button'
import { ModalShell } from '../ui/ModalShell'

export function ProfileModal({ provider, onClose, onBook }: { provider: Provider; onClose: () => void; onBook: () => void }) {
  return (
    <ModalShell labelledBy="profile-title" onClose={onClose}>
        <div className="flex items-start justify-between">
          <div className={`grid size-16 place-items-center rounded-2xl text-xl font-bold ${provider.accent}`}>{provider.initials}</div>
          <button onClick={onClose} className="grid size-10 place-items-center rounded-full bg-canvas text-xl text-slate-500 hover:text-ink" aria-label="Close profile">×</button>
        </div>
        <p className="mt-6 text-sm font-bold uppercase tracking-widest text-teal-700">{provider.category}</p>
        <h2 id="profile-title" className="mt-1 font-display text-4xl font-bold text-ink">{provider.name}</h2>
        <p className="mt-2 text-slate-500">{provider.location} · <span className="text-amber-500">★</span> {provider.rating} from {provider.reviews} reviews</p>
        <div className="mt-7 border-y border-evergreen/10 py-6">
          <h3 className="font-bold text-ink">About</h3>
          <p className="mt-2 leading-7 text-slate-600">{provider.bio}</p>
          <div className="mt-5 flex flex-wrap gap-2">{provider.skills.map((skill) => <span key={skill} className="rounded-full bg-mint px-3 py-1.5 text-sm font-medium text-evergreen">{skill}</span>)}</div>
        </div>
        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div><p className="text-sm text-slate-500">Services start at</p><p className="text-2xl font-bold text-ink">{formatPrice(provider.price)}<span className="text-sm font-normal text-slate-500"> / hour</span></p></div>
          <Button onClick={onBook} disabled={!provider.available}>{provider.available ? `Request a booking with ${provider.name.split(' ')[0]}` : 'Currently unavailable'}</Button>
        </div>
    </ModalShell>
  )
}
