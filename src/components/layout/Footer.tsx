import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-evergreen/10 bg-evergreen text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xl font-bold">SkillsSavy</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-white/70">A portfolio concept for discovering skilled local professionals with less friction.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-white/80 sm:justify-end">
          <Link to="/providers" className="hover:text-white">Find a provider</Link>
          <Link to="/add-provider" className="hover:text-white">Join the directory</Link>
          <Link to="/about" className="hover:text-white">How it works</Link>
        </div>
      </div>
    </footer>
  )
}
