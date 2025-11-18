import { ShieldCheck, Handshake, MapPinHouse, Stars, Building2, Sparkles } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: ShieldCheck, title: 'Trusted Advisors', desc: 'Licensed experts with decade-long track records guiding every step.' },
    { icon: Handshake, title: 'Seamless Closings', desc: 'From offer to keys, we orchestrate a smooth, transparent process.' },
    { icon: MapPinHouse, title: 'Prime Locations', desc: 'Handpicked addresses in thriving, high-demand neighborhoods.' },
    { icon: Stars, title: 'Curated Quality', desc: 'Only the top 3% of homes pass our architecture and amenities criteria.' },
    { icon: Building2, title: 'New Developments', desc: 'Early access to landmark projects and penthouse releases.' },
    { icon: Sparkles, title: 'Boutique Service', desc: 'Discreet, white-glove support tailored to your goals.' },
  ]

  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(59,130,246,0.15),transparent_80%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Why work with us</h2>
          <p className="mt-3 text-white/70">A boutique agency delivering results with discretion and excellence.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-white/70 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
