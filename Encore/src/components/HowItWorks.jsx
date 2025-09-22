import React from "react";

const HowItWorks = () => (
  <section className="py-20 md:py-32 bg-dark-gray/50 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial-glow"></div>
    <div className="container mx-auto px-4 relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">A Radically Better Way</h2>
      <p className="text-center text-light-gray max-w-2xl mx-auto mb-16">
        Your seamless experience is our priority. Get to the music faster.
      </p>
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="flex items-start gap-6">
          <div className="text-4xl font-bold text-indigo-300">01</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Find Your Show</h3>
            <p className="text-light-gray">
              Search from thousands of live events and find the perfect tickets for your taste and budget.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="text-4xl font-bold text-indigo-300">02</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Buy Securely</h3>
            <p className="text-light-gray">
              Our platform ensures every transaction is safe. Your tickets are guaranteed to be authentic.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-6">
          <div className="text-4xl font-bold text-indigo-300">03</div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Enjoy The Music</h3>
            <p className="text-light-gray">
              Receive your tickets instantly. Just show up and enjoy the show!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;