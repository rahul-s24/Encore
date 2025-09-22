const Hero = () => (
  <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=2070&auto=format&fit=crop')" }}></div>
    <div className="absolute inset-0 bg-charcoal/70"></div>
    <div className="relative z-10 px-4">
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-sora font-extrabold text-off-white mb-4">Unforgettable Live Events.</h1>
      <p className="text-lg md:text-xl text-light-gray max-w-2xl mx-auto mb-8">The simplest way to buy and sell tickets for the best shows.</p>
      <div className="max-w-2xl mx-auto relative">
        <input type="search" placeholder="Search for artists, events, or venues..." className="w-full bg-dark-gray/50 border border-white/20 text-off-white placeholder-light-gray rounded-full py-4 pl-6 pr-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 backdrop-blur-sm" />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-primary text-off-white font-semibold px-6 py-2.5 rounded-full cta-button">Search</button>
      </div>
    </div>
  </section>
);

export default Hero;
