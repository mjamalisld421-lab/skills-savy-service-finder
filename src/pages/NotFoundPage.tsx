import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="mx-auto grid min-h-[65vh] max-w-3xl place-items-center px-5 py-16 text-center">
      <div>
        <span className="mx-auto grid size-16 place-items-center rounded-2xl bg-mint text-xl font-bold text-evergreen">404</span>
        <p className="eyebrow mt-7">Page not found</p>
        <h1 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">This skill isn’t in our directory.</h1>
        <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-600">The page may have moved, or the address may be incomplete. The provider directory is a good place to get back on track.</p>
        <Link to="/providers" className="mt-7 inline-flex min-h-12 items-center rounded-full bg-evergreen px-7 font-bold text-white hover:bg-ink">Browse providers</Link>
      </div>
    </main>
  )
}
