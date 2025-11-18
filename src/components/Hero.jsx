import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none" />

      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="mx-auto max-w-7xl px-6 pb-10 md:pb-0 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-white/10 ring-1 ring-white/30 px-3 py-1 text-white/80 mb-6">
              Award-winning real estate agency
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
              Elevate your portfolio with exceptional properties
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/80">
              Curated luxury homes in prime urban locations. Seamless buying and renting, guided by experts who know the skyline by heart.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#properties" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white text-slate-900 font-medium shadow-lg hover:shadow-xl transition">
                Browse Listings
              </a>
              <a href="#contact" className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/30 font-medium hover:bg-white/20 transition">
                Talk to an Advisor
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/80">
              <div>
                <p className="text-3xl font-semibold text-white">850+</p>
                <p className="text-sm">Exclusive listings</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">12</p>
                <p className="text-sm">Cities covered</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">98%</p>
                <p className="text-sm">Client satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-white">24h</p>
                <p className="text-sm">Concierge support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
