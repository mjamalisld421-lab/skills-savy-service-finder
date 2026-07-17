import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { ProfileModal } from './components/providers/ProfileModal'
import { BookingModal } from './components/booking/BookingModal'
import { HomePage } from './pages/HomePage'
import { ProvidersPage } from './pages/ProvidersPage'
import { AddProviderPage } from './pages/AddProviderPage'
import { AboutPage } from './pages/AboutPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { initialProviders } from './data/providers'
import type { BookingRequest, Provider } from './types/provider'

export default function App() {
  const [providers, setProviders] = useState(initialProviders)
  const [, setBookings] = useState<BookingRequest[]>([])
  const [profile, setProfile] = useState<Provider | null>(null)
  const [booking, setBooking] = useState<Provider | null>(null)
  const openBooking = (provider: Provider) => { setProfile(null); setBooking(provider) }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col bg-canvas">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage providers={providers} onView={setProfile} onBook={openBooking} />} />
            <Route path="/providers" element={<ProvidersPage providers={providers} onView={setProfile} onBook={openBooking} />} />
            <Route path="/add-provider" element={<AddProviderPage onAdd={(provider) => setProviders((current) => [provider, ...current])} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
      {profile && <ProfileModal provider={profile} onClose={() => setProfile(null)} onBook={() => openBooking(profile)} />}
      {booking && <BookingModal provider={booking} onClose={() => setBooking(null)} onSubmit={(request) => setBookings((current) => [...current, request])} />}
    </BrowserRouter>
  )
}
