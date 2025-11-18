import { useState } from 'react'
import { Home, Menu, X, Phone, Building2 } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="group inline-flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-white/80 backdrop-blur-md shadow-lg ring-1 ring-white/40 flex items-center justify-center">
            <Home className="h-6 w-6 text-slate-900" />
          </div>
          <div>
            <p className="text-white/90 group-hover:text-white transition font-semibold text-lg">Skyline Estates</p>
            <p className="text-xs text-white/60 -mt-1">Luxury Realty</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#properties" className="text-white/80 hover:text-white transition">Properties</a>
          <a href="#services" className="text-white/80 hover:text-white transition">Services</a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition">Clients</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-xl font-medium shadow-lg hover:shadow-xl transition">
            <Phone className="h-4 w-4" /> Book a Call
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 backdrop-blur-md ring-1 ring-white/40 text-slate-900">
          {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-2xl bg-white/90 backdrop-blur-xl shadow-2xl ring-1 ring-white/60 overflow-hidden">
          <div className="px-6 py-4 flex items-center gap-2 border-b border-black/5">
            <Building2 className="h-5 w-5 text-slate-800"/>
            <span className="font-semibold text-slate-800">Menu</span>
          </div>
          <div className="px-6 py-4 space-y-3">
            <a href="#properties" className="block text-slate-800/80 hover:text-slate-900">Properties</a>
            <a href="#services" className="block text-slate-800/80 hover:text-slate-900">Services</a>
            <a href="#testimonials" className="block text-slate-800/80 hover:text-slate-900">Clients</a>
            <a href="#contact" className="block text-slate-800/80 hover:text-slate-900">Contact</a>
            <a href="#contact" className="inline-flex items-center gap-2 w-full justify-center bg-slate-900 text-white px-4 py-3 rounded-xl font-medium shadow-lg">Book a Call</a>
          </div>
        </div>
      )}
    </header>
  )
}
