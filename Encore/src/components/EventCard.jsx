const EventCard = ({ event }) => (
  <div className="bg-dark-gray rounded-xl overflow-hidden group event-card">
    <img src={event.img} alt={event.title} className="w-full h-56 object-cover" />
    <div className="p-5">
      <h3 className="text-lg font-sora font-bold mb-1">{event.title}</h3>
      <p className="text-light-gray text-sm mb-3">{event.location}</p>
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-2">
          {event.tags.map(tag => (
            <span key={tag} className="bg-white/10 text-off-white text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <p className="text-off-white font-semibold">From {event.price}</p>
      </div>
    </div>
  </div>
);

export default EventCard;
