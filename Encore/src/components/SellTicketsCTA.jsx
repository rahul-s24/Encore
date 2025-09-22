import React from "react";

const SellTicketsCTA = () => (
  <section className="py-20 md:py-32">
    <div className="container mx-auto px-4 text-center border-t border-b border-white/10 py-20">
      <h2 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto">Have tickets to sell?</h2>
      <p className="text-light-gray max-w-xl mx-auto my-6">
        Join thousands of sellers on Encore. Listing is simple, secure, and reaches millions of fans.
      </p>
      <button className="bg-gradient-primary text-off-white font-bold px-8 py-3 rounded-full text-lg cta-button">
        Become a Seller
      </button>
    </div>
  </section>
);

export default SellTicketsCTA;