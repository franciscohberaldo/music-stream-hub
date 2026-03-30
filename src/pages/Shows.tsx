import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ShowCard from "@/components/ShowCard";

const typeCategories = ["Todos", "Show", "Festival", "Casamento", "Corporativo", "Missa", "Espontâneo"];
const genreCategories = ["Rock", "MPB", "Samba", "Jazz", "Blues", "Forró", "Funk", "Pop", "Eletrônico", "Clássico", "Reggae", "Pagode"];

const shows = [
  { date: "31 de mar.", city: "Campinas", title: "Rock Gratuito no Barão — Velvet Horizon", band: "Velvet Horizon", genre: "Rock", genreColor: "hsl(270, 60%, 55%)", price: "Grátis", priceIsFree: true, type: "Espontâneo", genres: ["Rock"] },
  { date: "1 de abr.", city: "Campinas", title: "Groove Night — Funk Família", band: "Funk Família", genre: "Funk", genreColor: "hsl(33, 100%, 50%)", price: "R$ 60", priceIsFree: false, type: "Show", genres: ["Funk", "Pop"] },
  { date: "2 de abr.", city: "São Paulo", title: "Jazz Happy Hour — Trio Jazz SP", band: "Trio Jazz SP", genre: "Jazz", genreColor: "hsl(210, 80%, 55%)", price: "Grátis", priceIsFree: true, type: "Show", genres: ["Jazz"] },
  { date: "3 de abr.", city: "Campinas", title: "Velvet Horizon — Noite de Rock Progressivo", band: "Velvet Horizon", genre: "Rock", genreColor: "hsl(270, 60%, 55%)", price: "R$ 35", priceIsFree: false, type: "Show", genres: ["Rock", "Blues"] },
  { date: "5 de abr.", city: "Atibaia", title: "Samba na Praça — Sambão da Rua", band: "Sambão da Rua", genre: "Samba", genreColor: "hsl(45, 100%, 50%)", price: "Grátis", priceIsFree: true, type: "Show", genres: ["Samba", "Pagode"] },
  { date: "8 de abr.", city: "São Paulo", title: "Jazz Night — Trio Jazz SP", band: "Trio Jazz SP", genre: "Jazz", genreColor: "hsl(210, 80%, 55%)", price: "R$ 50", priceIsFree: false, type: "Show", genres: ["Jazz", "Blues"] },
  { date: "12 de abr.", city: "Atibaia", title: "Festival Nordestina — Forró na Serra", band: "Nordestina Beat", genre: "Forró", genreColor: "hsl(0, 70%, 55%)", price: "R$ 45", priceIsFree: false, type: "Festival", genres: ["Forró", "MPB"] },
  { date: "19 de abr.", city: "São Paulo", title: "MPB Raiz — Noite de Caetano e Chico", band: "MPB Roots", genre: "MPB", genreColor: "hsl(0, 50%, 55%)", price: "R$ 80", priceIsFree: false, type: "Show", genres: ["MPB", "Clássico"] },
];

const Shows = () => {
  const [activeType, setActiveType] = useState("Todos");
  const [activeGenres, setActiveGenres] = useState<string[]>([]);

  const toggleGenre = (genre: string) => {
    setActiveGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const filtered = shows.filter((show) => {
    const typeMatch = activeType === "Todos" || show.type === activeType;
    const genreMatch = activeGenres.length === 0 || show.genres.some((g) => activeGenres.includes(g));
    return typeMatch && genreMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 px-6 md:px-12 lg:px-24 pb-16">
        <div className="mb-10">
          <h1 className="font-heading text-3xl font-bold mb-1">Shows e Eventos</h1>
          <p className="text-muted-foreground text-sm">Música ao vivo perto de você</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-5">
          <input
            type="text"
            placeholder="Filtrar por cidade..."
            className="rounded-full border border-border bg-secondary px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 w-48"
          />
          <input
            type="date"
            className="rounded-full border border-border bg-secondary px-4 py-2 text-sm outline-none text-muted-foreground focus:border-primary/50"
          />
        </div>

        {/* Type chips */}
        <div className="flex flex-wrap gap-2 mb-3">
          {typeCategories.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeType === type
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Genre chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {genreCategories.map((genre) => (
            <button
              key={genre}
              onClick={() => toggleGenre(genre)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeGenres.includes(genre)
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((show, i) => (
            <div key={i} className="animate-slide-in" style={{ animationDelay: `${i * 80}ms` }}>
              <ShowCard
                date={show.date}
                city={show.city}
                title={show.title}
                band={show.band}
                genre={show.genre}
                genreColor={show.genreColor}
                price={show.price}
                priceIsFree={show.priceIsFree}
              />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">Nenhum show encontrado com esses filtros.</p>
        )}
      </div>
    </div>
  );
};

export default Shows;
