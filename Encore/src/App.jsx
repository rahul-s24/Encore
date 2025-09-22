import React, { useState, useEffect } from "react";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import FeaturedEvents from "./components/FeaturedEvents";
import HowItWorks from "./components/HowItWorks";
import SellTicketsCTA from "./components/SellTicketsCTA";
import BrowseByGenre from "./components/BrowseByGenre";
import Footer from "./components/Footer";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="bg-charcoal">
        <Header isScrolled={isScrolled} toggleMenu={toggleMenu} />
        <MobileMenu isOpen={isMenuOpen} />
        <main>
          <Hero />
          <FeaturedEvents />
          <HowItWorks />
          <SellTicketsCTA />
          <BrowseByGenre />
        </main>
        <Footer />
      </div>
    </>
  );
}
