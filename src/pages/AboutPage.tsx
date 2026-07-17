import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <main>
      <section className="bg-mint">
        <div className="mx-auto max-w-5xl px-5 py-20 text-center lg:px-8"><p className="eyebrow">How SkillsSavy works</p><h1 className="mx-auto mt-3 max-w-3xl font-display text-5xl font-bold tracking-tight text-ink">A shorter path from “I need help” to “I found the right person.”</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">SkillsSavy is a frontend portfolio concept exploring clear service discovery, useful profiles, and low-friction booking requests.</p></div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[['01', 'Search with intent', 'Look up a provider, service, or specific skill and filter the directory to what you need.'], ['02', 'Compare the essentials', 'Review expertise, pricing, location, rating, and availability without digging through clutter.'], ['03', 'Send a clear request', 'Share your preferred date and project context through a simple, validated booking form.']].map(([number, title, copy]) => <article key={number} className="rounded-3xl border border-evergreen/10 bg-white p-7 shadow-card"><span className="text-sm font-bold text-coral">{number}</span><h2 className="mt-8 text-2xl font-bold text-ink">{title}</h2><p className="mt-3 leading-7 text-slate-600">{copy}</p></article>)}
        </div>
        <div className="mt-16 grid gap-10 rounded-[2.5rem] bg-evergreen p-8 text-white sm:p-12 lg:grid-cols-2 lg:items-center"><div><p className="text-sm font-bold uppercase tracking-widest text-mint">Built with honest constraints</p><h2 className="mt-3 font-display text-4xl font-bold">A focused Version 1.</h2></div><div className="space-y-4 text-white/75"><p>No accounts, backend, payments, or messaging are implied. Provider additions and booking requests live in the browser session only.</p><p>The project focuses on what a polished frontend should demonstrate: responsive layout, reusable components, typed data, filtering, state, validation, and accessible interaction patterns.</p></div></div>
        <div className="mt-16 text-center"><h2 className="text-3xl font-bold text-ink">Ready to find your fit?</h2><Link to="/providers" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-evergreen px-7 font-bold text-white hover:bg-ink">Explore providers</Link></div>
      </section>
    </main>
  )
}
