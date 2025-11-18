import { Bath, Bed, Square, MapPin } from 'lucide-react'

const cards = [
  {
    title: 'Glasshouse Penthouse',
    location: 'Midtown, New York',
    price: '$6,450,000',
    beds: 3,
    baths: 3,
    area: '2,150 sqft',
    image: 'https://images.unsplash.com/photo-1692647386632-3489e174f7bc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIYXJib3Jmcm9udCUyMFJlc2lkZW5jZXxlbnwwfDB8fHwxNzYzNDc5NDk5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Harborfront Residence',
    location: 'Marina Bay, Singapore',
    price: '$3,180,000',
    beds: 2,
    baths: 2,
    area: '1,420 sqft',
    image: 'https://images.unsplash.com/photo-1752643719443-991766cceb24?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTa3lsaW5lJTIwQ29ybmVyJTIwU3VpdGV8ZW58MHwwfHx8MTc2MzQ3OTQ5OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80'
  },
  {
    title: 'Skyline Corner Suite',
    location: 'Canary Wharf, London',
    price: '£2,950,000',
    beds: 3,
    baths: 2,
    area: '1,980 sqft',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=2000&auto=format&fit=crop'
  },
]

export default function Properties() {
  return (
    <section id="properties" className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Featured properties</h2>
            <p className="mt-3 text-white/70">Explore sought-after listings handpicked by our specialists.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex bg-white text-slate-900 px-4 py-2 rounded-xl font-medium shadow-lg">Get Alerts</a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10">
              <div className="relative h-56 overflow-hidden">
                <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-500"/>
                <div className="absolute bottom-3 left-3 rounded-full bg-black/50 text-white text-xs px-3 py-1 backdrop-blur-md">
                  <MapPin className="inline h-3 w-3 mr-1"/> {c.location}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                  <span className="text-white/90 font-medium">{c.price}</span>
                </div>
                <div className="mt-3 flex items-center gap-4 text-white/70 text-sm">
                  <span className="inline-flex items-center gap-1"><Bed className="h-4 w-4"/> {c.beds} Beds</span>
                  <span className="inline-flex items-center gap-1"><Bath className="h-4 w-4"/> {c.baths} Baths</span>
                  <span className="inline-flex items-center gap-1"><Square className="h-4 w-4"/> {c.area}</span>
                </div>
                <a href="#contact" className="mt-5 inline-flex w-full justify-center bg-white text-slate-900 px-4 py-2 rounded-xl font-medium shadow hover:shadow-lg">Request Details</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
