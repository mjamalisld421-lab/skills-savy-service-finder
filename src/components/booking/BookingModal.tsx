import { useState, type FormEvent } from 'react'
import type { BookingRequest, Provider } from '../../types/provider'
import { Button } from '../ui/Button'
import { ModalShell } from '../ui/ModalShell'

export function BookingModal({ provider, onClose, onSubmit }: { provider: Provider; onClose: () => void; onSubmit: (booking: BookingRequest) => void }) {
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [form, setForm] = useState({ customerName: '', email: '', service: provider.category, preferredDate: '', message: '' })

  const update = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }))
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const nextErrors: Record<string, string> = {}
    if (form.customerName.trim().length < 2) nextErrors.customerName = 'Please enter your name.'
    else if (form.customerName.trim().length > 80) nextErrors.customerName = 'Keep your name under 80 characters.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (form.service.trim().length < 3) nextErrors.service = 'Describe the service in at least 3 characters.'
    else if (form.service.trim().length > 100) nextErrors.service = 'Keep the service under 100 characters.'
    if (!form.preferredDate) nextErrors.preferredDate = 'Choose a preferred date.'
    if (form.preferredDate && form.preferredDate < new Date().toISOString().slice(0, 10)) nextErrors.preferredDate = 'Choose today or a future date.'
    if (form.message.length > 1000) nextErrors.message = 'Keep project details under 1,000 characters.'
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return
    onSubmit({
      id: Date.now(),
      providerId: provider.id,
      ...form,
      customerName: form.customerName.trim(),
      email: form.email.trim().toLowerCase(),
      service: form.service.trim(),
      message: form.message.trim(),
    })
    setSuccess(true)
  }

  return (
    <ModalShell labelledBy="booking-title" onClose={onClose} maxWidth="max-w-xl">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs font-bold uppercase tracking-widest text-teal-700">Booking request</p><h2 id="booking-title" className="mt-1 font-display text-3xl font-bold text-ink">{provider.name}</h2></div>
          <button onClick={onClose} className="grid size-10 place-items-center rounded-full bg-canvas text-xl text-slate-500" aria-label="Close booking form">×</button>
        </div>
        {success ? (
          <div className="py-12 text-center">
            <span className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-700">✓</span>
            <h3 className="mt-5 text-2xl font-bold text-ink">Request sent</h3>
            <p className="mx-auto mt-2 max-w-sm leading-6 text-slate-600">Thanks, {form.customerName}. Your request has been saved for this session.</p>
            <Button className="mt-7" onClick={onClose}>Back to providers</Button>
          </div>
        ) : (
          <form className="mt-7 space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" error={errors.customerName}><input autoFocus maxLength={81} autoComplete="name" value={form.customerName} onChange={(e) => update('customerName', e.target.value)} className="field" placeholder="Alex Morgan" /></Field>
              <Field label="Email" error={errors.email}><input type="email" maxLength={254} autoComplete="email" value={form.email} onChange={(e) => update('email', e.target.value)} className="field" placeholder="alex@example.com" /></Field>
            </div>
            <Field label="Service needed" error={errors.service}><input maxLength={101} value={form.service} onChange={(e) => update('service', e.target.value)} className="field" /></Field>
            <Field label="Preferred date" error={errors.preferredDate}><input type="date" min={new Date().toISOString().slice(0, 10)} value={form.preferredDate} onChange={(e) => update('preferredDate', e.target.value)} className="field" /></Field>
            <Field label="Project details" error={errors.message}><textarea maxLength={1001} value={form.message} onChange={(e) => update('message', e.target.value)} className="field min-h-28 resize-y" placeholder="Share a little about the work, timing, and what a good outcome looks like." /><span className="mt-1 block text-right text-xs font-normal text-slate-400">{form.message.length}/1000</span></Field>
            <p className="text-xs leading-5 text-slate-500">This portfolio demo stores your request in local page state only. No message is sent.</p>
            <Button type="submit" className="w-full">Send booking request</Button>
          </form>
        )}
    </ModalShell>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="block text-sm font-semibold text-ink">{label}{children}{error && <span className="mt-1 block text-xs font-medium text-red-600">{error}</span>}</label>
}
