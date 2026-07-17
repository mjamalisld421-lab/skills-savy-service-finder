import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Category, Provider } from '../types/provider'
import { categories } from '../types/provider'
import { Button } from '../components/ui/Button'

export function AddProviderPage({ onAdd }: { onAdd: (provider: Provider) => void }) {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ name: '', category: categories[0] as Category, location: '', price: '', skills: '', bio: '', available: true })
  const update = (key: keyof typeof form, value: string | boolean) => setForm((current) => ({ ...current, [key]: value }))

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const next: Record<string, string> = {}
    if (form.name.trim().length < 2) next.name = 'Enter a provider name.'
    else if (form.name.trim().length > 80) next.name = 'Keep the name under 80 characters.'
    if (form.location.trim().length < 2) next.location = 'Enter a city or location.'
    else if (form.location.trim().length > 80) next.location = 'Keep the location under 80 characters.'
    if (!form.price || Number(form.price) <= 0 || Number(form.price) > 10000) next.price = 'Enter an hourly price from 1 to 10,000.'
    const skills = [...new Set(form.skills.split(',').map((skill) => skill.trim()).filter(Boolean))]
    if (!skills.length) next.skills = 'Add at least one skill.'
    else if (skills.length > 10) next.skills = 'Add no more than 10 skills.'
    else if (skills.some((skill) => skill.length > 30)) next.skills = 'Keep each skill under 30 characters.'
    if (form.bio.trim().length < 20) next.bio = 'Add a short bio of at least 20 characters.'
    else if (form.bio.trim().length > 400) next.bio = 'Keep the bio under 400 characters.'
    setErrors(next)
    if (Object.keys(next).length) return
    onAdd({
      id: Date.now(), name: form.name.trim(), category: form.category, location: form.location.trim(),
      rating: 5, reviews: 0, price: Number(form.price), bio: form.bio.trim(),
      skills,
      available: form.available, initials: form.name.split(' ').map((word) => word[0]).join('').slice(0, 2).toUpperCase(),
      accent: 'bg-cyan-100 text-cyan-800',
    })
    setSubmitted(true)
  }

  if (submitted) return <main className="mx-auto min-h-[70vh] max-w-2xl px-5 py-20 text-center"><span className="mx-auto grid size-20 place-items-center rounded-full bg-emerald-100 text-4xl text-emerald-700">✓</span><h1 className="mt-6 font-display text-4xl font-bold text-ink">Profile added</h1><p className="mt-3 leading-7 text-slate-600">The provider is now part of your local in-memory directory. It will reset when the page reloads.</p><Button className="mt-8" onClick={() => navigate('/providers')}>View provider directory</Button></main>

  return (
    <main className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
        <div><p className="eyebrow">Join the directory</p><h1 className="section-title">Put your skills in the right place.</h1><p className="mt-4 leading-7 text-slate-600">Create a sample provider profile. This version keeps your entry in local state only and does not create an account.</p><div className="mt-8 rounded-3xl bg-evergreen p-6 text-white"><p className="font-bold">A strong profile includes</p><ul className="mt-4 space-y-3 text-sm text-white/75"><li>✓ A clear, specific service category</li><li>✓ Skills customers can quickly scan</li><li>✓ A short bio focused on outcomes</li><li>✓ An honest starting price</li></ul></div></div>
        <form onSubmit={submit} noValidate className="rounded-3xl border border-evergreen/10 bg-white p-6 shadow-card sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Provider name" error={errors.name}><input autoFocus maxLength={81} autoComplete="name" className="field" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jordan Lee" /></Field>
            <Field label="Category"><select className="field" value={form.category} onChange={(e) => update('category', e.target.value as Category)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></Field>
            <Field label="Location" error={errors.location}><input maxLength={81} autoComplete="address-level2" className="field" value={form.location} onChange={(e) => update('location', e.target.value)} placeholder="Seattle, WA" /></Field>
            <Field label="Starting price / hour" error={errors.price}><input className="field" type="number" min="1" max="10000" value={form.price} onChange={(e) => update('price', e.target.value)} placeholder="60" /></Field>
          </div>
          <Field label="Skills" error={errors.skills}><input className="field" value={form.skills} onChange={(e) => update('skills', e.target.value)} placeholder="React, UI design, Accessibility" /><span className="mt-1 block text-xs font-normal text-slate-500">Separate skills with commas.</span></Field>
          <Field label="Short bio" error={errors.bio}><textarea maxLength={401} className="field min-h-32 resize-y" value={form.bio} onChange={(e) => update('bio', e.target.value)} placeholder="Describe the work you do and the value you bring to customers." /><span className="mt-1 block text-right text-xs font-normal text-slate-400">{form.bio.length}/400</span></Field>
          <label className="mt-5 flex cursor-pointer items-center gap-3 rounded-2xl bg-canvas p-4"><input type="checkbox" checked={form.available} onChange={(e) => update('available', e.target.checked)} className="size-5 accent-evergreen" /><span><strong className="block text-sm text-ink">Available for new requests</strong><span className="text-xs text-slate-500">Customers can use the booking action right away.</span></span></label>
          <p className="mt-5 text-xs leading-5 text-slate-500">Portfolio demo notice: submitted information is not persisted or sent anywhere.</p>
          <Button type="submit" className="mt-6 w-full">Add provider</Button>
        </form>
      </div>
    </main>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="mt-5 block text-sm font-semibold text-ink first:mt-0">{label}{children}{error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}</label>
}
