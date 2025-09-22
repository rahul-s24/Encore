import { MenuIcon } from "./icons";

const Header = ({ isScrolled, toggleMenu }) => (
  <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    <div className="container mx-auto px-4 py-3">
      <div className={`flex justify-between items-center rounded-full px-6 py-2 transition-all duration-300 ${isScrolled ? 'bg-black/30 backdrop-blur-lg border border-white/10 shadow-lg' : ''}`}>
        <a href="#" className="text-2xl font-sora font-bold tracking-wider">Encore</a>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#" className="text-light-gray hover:text-off-white transition">Events</a>
          <a href="#" className="text-light-gray hover:text-off-white transition">Sell Tickets</a>
          <a href="#" className="bg-white/10 px-4 py-2 rounded-full text-off-white hover:bg-white/20 transition">Login</a>
        </nav>
        <button onClick={toggleMenu} className="md:hidden text-off-white">
          <MenuIcon />
        </button>
      </div>
    </div>
  </header>
);

export default Header;