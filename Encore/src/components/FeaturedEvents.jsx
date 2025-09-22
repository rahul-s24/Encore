import EventCard from "./EventCard";

const eventsData = [
  {
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
    title: "Retro Fusion Fest",
    location: "The Grand Arena, Secunderabad",
    tags: ["Pop", "Fusion"],
    price: "₹1,500"
  },
  {
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop",
    title: "Indie Wave Showcase",
    location: "Moonlight Gardens, Hyderabad",
    tags: ["Indie"],
    price: "₹999"
  },
  {
    img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=2070&auto=format&fit=crop",
    title: "Electronic Echoes",
    location: "Club Velocity, Hyderabad",
    tags: ["EDM"],
    price: "₹2,200"
  },
  {
    img: "https://images.unsplash.com/photo-1543321269-9d868a2d1f39?q=80&w=1974&auto=format&fit=crop",
    title: "Sufi Soul Night",
    location: "The Royal Auditorium, Hyderabad",
    tags: ["Classical"],
    price: "₹1,800"
  }
];

const FeaturedEvents = () => (
  <section className="py-20 md:py-32 bg-off-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-sora font-bold text-center mb-12 text-charcoal">Trending Near You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {eventsData.map(event => <EventCard key={event.title} event={event} />)}
      </div>
    </div>
  </section>
);

export default FeaturedEvents;
