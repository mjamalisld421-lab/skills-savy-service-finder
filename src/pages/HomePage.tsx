import { Link, useNavigate } from 'react-router-dom'
import { useState, type FormEvent } from 'react'
import { categories } from '../types/provider'
import type { Provider } from '../types/provider'
import { ProviderCard } from '../components/providers/ProviderCard'

const categoryMeta = [
  ['⌘', 'Web Development', 'Sites, apps & digital products'],
  ['✦', 'Graphic Design', 'Brands, graphics & visual systems'],
  ['↗', 'Digital Marketing', 'Campaigns, content & growth'],
  ['⌂', 'Home Repair', 'Practical help for your space'],
  ['π', 'Tutoring', 'One-to-one learning support'],
  ['◉', 'Photography', 'Portraits, events & stories'],
]

export function HomePage({ providers, onView, onBook }: { providers: Provider[]; onView: (p: Provider) => void; onBook: (p: Provider) => void }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const search = (event: FormEvent) => { event.preventDefault(); navigate(`/providers?q=${encodeURIComponent(query)}`) }

  return (
    <>
      <section className="overflow-hidden bg-evergreen text-white">
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.15fr_.85fr] lg:px-8 lg:py-28">
          <div className="relative z-10">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-mint">Local talent. Clear choices. Better work.</span>
            <h1 className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">The right skill is closer than you think.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Discover trusted independent professionals for creative, technical, practical, and learning needs—all in one thoughtful directory.</p>
            <form onSubmit={search} className="mt-9 flex max-w-2xl flex-col gap-2 rounded-2xl bg-white p-2 shadow-2xl sm:flex-row">
              <label className="sr-only" htmlFor="hero-search">Search providers</label>
              <input id="hero-search" value={query} onChange={(e) => setQuery(e.target.value)} className="min-h-12 flex-1 rounded-xl px-4 text-ink outline-none placeholder:text-slate-400" placeholder="Try “React developer” or “photographer”" />
              <button className="min-h-12 rounded-xl bg-coral px-6 font-bold text-white transition hover:bg-[#dc6c54]">Search SkillsSavy</button>
            </form>
            <p className="mt-3 text-xs text-white/55">Explore {providers.length} curated sample profiles across {categories.length} categories.</p>
          </div>
          <div className="relative hidden min-h-96 lg:block" aria-hidden="true">
            <div className="absolute right-4 top-0 h-80 w-72 rotate-3 rounded-[3rem] bg-mint/15"></div>
            <div className="absolute right-20 top-12 w-80 rounded-3xl bg-white p-6 text-ink shadow-2xl">
              <div className="flex items-center gap-4"><span className="grid size-14 place-items-center rounded-2xl bg-orange-100 font-bold text-orange-800">NW</span><div><p className="font-bold">Noah Williams</p><p className="text-sm text-slate-500">Brand designer · Portland</p></div></div>
              <p className="mt-6 text-sm leading-6 text-slate-600">“Turning early ideas into memorable identities and practical design systems.”</p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-amber-500">★★★★★</span><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Available</span></div>
            </div>
            <div className="absolute bottom-2 left-0 rounded-2xl bg-coral px-6 py-5 shadow-xl"><p className="text-3xl font-bold">4.85</p><p className="text-sm text-white/75">average provider rating</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="eyebrow">Browse by category</p><h2 className="section-title">What can we help you get done?</h2></div>
          <Link to="/providers" className="text-sm font-bold text-evergreen hover:underline">View all providers →</Link>
        </div>
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categoryMeta.map(([icon, name, description]) => (
            <Link key={name} to={`/providers?category=${encodeURIComponent(name)}`} className="group rounded-2xl border border-evergreen/10 bg-white p-5 transition hover:border-evergreen/30 hover:shadow-card">
              <span className="grid size-11 place-items-center rounded-xl bg-mint text-xl font-bold text-evergreen">{icon}</span>
              <h3 className="mt-5 font-bold text-ink group-hover:text-teal-700">{name}</h3><p className="mt-1 text-sm text-slate-500">{description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl"><p className="eyebrow">Featured professionals</p><h2 className="section-title">Good people, ready to help</h2><p className="mt-4 leading-7 text-slate-600">Explore a few of the independent specialists in our sample directory.</p></div>
          <div className="mt-9 grid gap-6 lg:grid-cols-3">{providers.slice(0, 3).map((provider) => <ProviderCard key={provider.id} provider={provider} onView={onView} onBook={onBook} />)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-mint px-6 py-12 sm:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div><p className="eyebrow">Offer your expertise</p><h2 className="mt-2 max-w-2xl font-display text-4xl font-bold text-ink">A simple way to make your skills easier to find.</h2><p className="mt-4 max-w-xl text-slate-600">Add a profile to this session’s directory and see how your services would appear to potential customers.</p></div>
            <Link to="/add-provider" className="inline-flex min-h-12 items-center justify-center rounded-full bg-evergreen px-7 font-bold text-white hover:bg-ink">Create a provider profile</Link>
          </div>
        </div>
      </section>
    </>
  )
}
