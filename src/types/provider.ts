export const categories = [
  'Web Development',
  'Graphic Design',
  'Digital Marketing',
  'Home Repair',
  'Tutoring',
  'Photography',
] as const

export type Category = (typeof categories)[number]

export interface Provider {
  id: number
  name: string
  category: Category
  location: string
  rating: number
  reviews: number
  price: number
  bio: string
  skills: string[]
  available: boolean
  initials: string
  accent: string
}

export interface BookingRequest {
  id: number
  customerName: string
  email: string
  providerId: number
  service: string
  preferredDate: string
  message: string
}
