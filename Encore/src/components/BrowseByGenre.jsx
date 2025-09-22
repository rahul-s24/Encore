import React from "react";
import GenreCard from "./GenreCard";

const genresData = [
  { name: 'Pop', gradient: 'from-pink-600/80 to-pink-600/0 hover:from-pink-600/90' },
  { name: 'Rock', gradient: 'from-amber-600/80 to-amber-600/0 hover:from-amber-600/90' },
  { name: 'Hip-Hop', gradient: 'from-violet-600/80 to-violet-600/0 hover:from-violet-600/90' },
  { name: 'Electronic', gradient: 'from-emerald-600/80 to-emerald-600/0 hover:from-emerald-600/90' },
  { name: 'Indie', gradient: 'from-slate-600/80 to-slate-600/0 hover:from-slate-600/90' },
  { name: 'K-Pop', gradient: 'from-rose-600/80 to-rose-600/0 hover:from-rose-600/90' }
];

const BrowseByGenre = () => (
  <section className="py-20 md:py-32">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Discover by Genre</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {genresData.map((genre) => (
          <GenreCard key={genre.name} genre={genre} />
        ))}
      </div>
    </div>
  </section>
);

export default BrowseByGenre;
