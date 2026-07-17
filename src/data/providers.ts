import type { Provider } from '../types/provider'

export const initialProviders: Provider[] = [
  {
    id: 1, name: 'Maya Chen', category: 'Web Development', location: 'Austin, TX',
    rating: 4.9, reviews: 86, price: 65,
    bio: 'Frontend developer crafting fast, accessible websites for growing teams and independent brands.',
    skills: ['React', 'TypeScript', 'Accessibility'], available: true, initials: 'MC', accent: 'bg-teal-100 text-teal-800',
  },
  {
    id: 2, name: 'Noah Williams', category: 'Graphic Design', location: 'Portland, OR',
    rating: 4.8, reviews: 64, price: 50,
    bio: 'Brand designer turning early ideas into memorable identities, packaging, and practical design systems.',
    skills: ['Brand identity', 'Packaging', 'Figma'], available: true, initials: 'NW', accent: 'bg-orange-100 text-orange-800',
  },
  {
    id: 3, name: 'Amara Patel', category: 'Digital Marketing', location: 'Chicago, IL',
    rating: 5.0, reviews: 41, price: 58,
    bio: 'Strategy-led marketer helping local businesses grow through useful content and measurable campaigns.',
    skills: ['SEO', 'Content', 'Analytics'], available: false, initials: 'AP', accent: 'bg-violet-100 text-violet-800',
  },
  {
    id: 4, name: 'Luis Romero', category: 'Home Repair', location: 'Phoenix, AZ',
    rating: 4.9, reviews: 112, price: 45,
    bio: 'Reliable home repair specialist for the fixes, installations, and upgrades on your running list.',
    skills: ['Carpentry', 'Fixtures', 'Assembly'], available: true, initials: 'LR', accent: 'bg-blue-100 text-blue-800',
  },
  {
    id: 5, name: 'Sofia Bennett', category: 'Tutoring', location: 'Boston, MA',
    rating: 4.8, reviews: 73, price: 40,
    bio: 'Patient STEM tutor making difficult concepts feel clear, practical, and a little more enjoyable.',
    skills: ['Mathematics', 'Physics', 'SAT prep'], available: true, initials: 'SB', accent: 'bg-rose-100 text-rose-800',
  },
  {
    id: 6, name: 'Ethan Brooks', category: 'Photography', location: 'Denver, CO',
    rating: 4.7, reviews: 55, price: 75,
    bio: 'Lifestyle photographer capturing honest portraits, intimate events, and small business stories.',
    skills: ['Portraits', 'Events', 'Editing'], available: false, initials: 'EB', accent: 'bg-amber-100 text-amber-800',
  },
]
