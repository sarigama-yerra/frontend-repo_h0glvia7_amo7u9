export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(400px_160px_at_80%_20%,rgba(59,130,246,0.2),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Find your next address</h2>
            <p className="mt-3 text-white/70">Tell us what you’re looking for and our advisors will shortlist options that match your goals within 24 hours.</p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4 text-white/80">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                Market snapshots sent weekly
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                Private showings by request
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                Mortgage and legal partners
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
                End-to-end concierge
              </div>
            </div>
          </div>

          <form className="rounded-2xl bg-white/10 ring-1 ring-white/20 p-6 backdrop-blur-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-xl bg-white/80 text-slate-900 px-4 py-3 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First name"/>
              <input className="w-full rounded-xl bg-white/80 text-slate-900 px-4 py-3 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last name"/>
              <input className="w-full rounded-xl bg-white/80 text-slate-900 px-4 py-3 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2" placeholder="Email address"/>
              <select className="w-full rounded-xl bg-white/80 text-slate-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Buy</option>
                <option>Rent</option>
                <option>Sell</option>
              </select>
              <select className="w-full rounded-xl bg-white/80 text-slate-900 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>New York</option>
                <option>London</option>
                <option>Singapore</option>
                <option>Dubai</option>
              </select>
              <textarea className="w-full rounded-xl bg-white/80 text-slate-900 px-4 py-3 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:col-span-2" placeholder="Tell us about your ideal home" rows="4"/>
            </div>
            <button className="mt-5 inline-flex w-full justify-center bg-white text-slate-900 px-4 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl">Request Consultation</button>
            <p className="mt-3 text-xs text-white/60 text-center">By submitting, you agree to our terms and privacy policy.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
