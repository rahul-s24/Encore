import React from "react";

const GenreCard = ({ genre }) => (
  <a
    href="#"
    className={`aspect-video rounded-lg p-6 flex items-end bg-gradient-to-t ${genre.gradient} event-card transition-all duration-300`}
  >
    <h3 className="text-2xl font-bold">{genre.name}</h3>
  </a>
);

export default GenreCard;
