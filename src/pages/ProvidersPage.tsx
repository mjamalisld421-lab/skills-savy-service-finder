import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { Provider } from '../types/provider'
import { categories } from '../types/provider'
import { ProviderCard } from '../components/providers/ProviderCard'

export function ProvidersPage({ providers, onView, onBook }: { providers: Provider[]; onView: (p: Provider) => void; onBook: (p: Provider) => void }) {
  const [params, setParams] = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')
  const [category, setCategory] = useState(params.get('category') ?? 'All categories')
  const [availability, setAvailability] = useState(params.get('availability') ?? 'All availability')

  useEffect(() => {
    const next = new URLSearchParams()
    if (query.trim()) next.set('q', query.trim())
    if (category !== 'All categories') next.set('category', category)
    if (availability !== 'All availability') next.set('availability', availability)
    setParams(next, { replace: true })
  }, [availability, category, query, setParams])

  const results = useMemo(() => providers.filter((provider) => {
    const haystack = `${provider.name} ${provider.category} ${provider.skills.join(' ')} ${provider.bio}`.toLowerCase()
    return haystack.includes(query.toLowerCase().trim()) &&
      (category === 'All categories' || provider.category === category) &&
      (availability === 'All availability' || (availability === 'Available now' ? provider.available : !provider.available))
  }), [providers, query, category, availability])

  const clear = () => { setQuery(''); setCategory('All categories'); setAvailability('All availability'); setParams({}) }

  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <div className="max-w-3xl"><p className="eyebrow">Provider directory</p><h1 className="section-title sm:text-5xl">Find someone who fits the work.</h1><p className="mt-4 text-lg leading-7 text-slate-600">Search by name, service, or skill, then narrow the results to what matters now.</p></div>
      <div className="mt-9 rounded-3xl border border-evergreen/10 bg-white p-4 shadow-card sm:p-6">
        <div className="grid gap-3 lg:grid-cols-[1fr_230px_210px_auto]">
          <label><span className="sr-only">Search providers</span><input value={query} onChange={(e) => setQuery(e.target.value)} className="field !mt-0" placeholder="Search name, service, or skill" /></label>
          <label><span className="sr-only">Filter by category</span><select value={category} onChange={(e) => setCategory(e.target.value)} className="field !mt-0"><option>All categories</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label><span className="sr-only">Filter by availability</span><select value={availability} onChange={(e) => setAvailability(e.target.value)} className="field !mt-0"><option>All availability</option><option>Available now</option><option>Currently busy</option></select></label>
          <button onClick={clear} className="min-h-12 rounded-xl px-4 text-sm font-bold text-evergreen hover:bg-mint">Clear filters</button>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between"><p className="font-semibold text-ink" aria-live="polite">{results.length} {results.length === 1 ? 'provider' : 'providers'} found</p><p className="hidden text-sm text-slate-500 sm:block">Showing local mock data</p></div>
      {results.length ? <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">{results.map((provider) => <ProviderCard key={provider.id} provider={provider} onView={onView} onBook={onBook} />)}</div> : (
        <div className="mt-5 rounded-3xl border border-dashed border-evergreen/20 bg-white px-6 py-20 text-center"><span className="mx-auto grid size-16 place-items-center rounded-full bg-mint text-2xl">⌕</span><h2 className="mt-5 text-2xl font-bold text-ink">No matching providers</h2><p className="mt-2 text-slate-600">Try a broader search or reset your filters to see everyone.</p><button onClick={clear} className="mt-6 font-bold text-evergreen hover:underline">Clear all filters</button></div>
      )}
    </main>
  )
}
