import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-full px-3 py-2 text-sm font-medium transition ${isActive ? 'bg-mint text-evergreen' : 'text-slate-600 hover:text-evergreen'}`

  return (
    <header className="sticky top-0 z-30 border-b border-evergreen/10 bg-canvas/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-evergreen" aria-label="SkillsSavy home">
          <span className="grid size-9 place-items-center rounded-xl bg-evergreen text-sm text-white">S²</span>
          SkillsSavy
        </Link>
        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary navigation">
          <NavLink to="/providers" className={linkClass}>Providers</NavLink>
          <NavLink to="/add-provider" className={linkClass}>Add provider</NavLink>
          <NavLink to="/about" className={linkClass}>How it works</NavLink>
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center rounded-xl border border-evergreen/15 text-xl text-evergreen sm:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '×' : '☰'}
        </button>
        {menuOpen && (
          <nav key={location.pathname} className="absolute left-4 right-4 top-[4.5rem] grid gap-1 rounded-2xl border border-evergreen/10 bg-white p-3 shadow-card sm:hidden" aria-label="Mobile navigation">
            <NavLink to="/providers" onClick={() => setMenuOpen(false)} className={linkClass}>Providers</NavLink>
            <NavLink to="/add-provider" onClick={() => setMenuOpen(false)} className={linkClass}>Add provider</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={linkClass}>How it works</NavLink>
          </nav>
        )}
      </div>
    </header>
  )
}
