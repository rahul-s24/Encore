const MobileMenu = ({ isOpen }) => (
  <div className={`md:hidden fixed inset-0 bg-charcoal z-40 pt-20 transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
    <nav className="flex flex-col items-center gap-8 text-xl mt-8">
      <a href="#" className="text-light-gray hover:text-off-white transition">Events</a>
      <a href="#" className="text-light-gray hover:text-off-white transition">Sell Tickets</a>
      <a href="#" className="bg-white/10 px-6 py-3 rounded-full text-off-white hover:bg-white/20 transition">Login</a>
    </nav>
  </div>
);

export default MobileMenu;
