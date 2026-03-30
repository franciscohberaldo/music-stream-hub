import { useState } from "react";
import Navbar from "@/components/Navbar";
import ShowEventCard from "@/components/ShowEventCard";
import showRock from "@/assets/show-rock.jpg";
import showFunk from "@/assets/show-funk.jpg";
import showJazz from "@/assets/show-jazz.jpg";
import showSamba from "@/assets/show-samba.jpg";
import showProg from "@/assets/show-prog.jpg";
import showForro from "@/assets/show-forro.jpg";
import showMpb from "@/assets/show-mpb.jpg";
import showJazz2 from "@/assets/show-jazz2.jpg";

const typeCategories = ["Todos", "Show", "Festival", "Casamento", "Corporativo", "Missa", "Espontâneo"];
const genreCategories = ["Rock", "MPB", "Samba", "Jazz", "Blues", "Forró", "Funk", "Pop", "Eletrônico", "Clássico", "Reggae", "Pagode"];

const shows = [
  {
    image: showRock, type: "Espontâneo", typeColor: "hsl(141, 73%, 42%)", price: "Grátis", priceIsFree: true,
    title: "Rock Gratuito no Barão — Velvet Horizon", date: "ter., 31 de mar. às 20:00",
    venue: "Barão do Rock · Campinas, SP", bandName: "Velvet Horizon", bandInitial: "VH",
    bandColor: "hsl(270, 60%, 30%)", genres: ["Rock"],
  },
  {
    image: showFunk, type: "Show", typeColor: "hsl(141, 73%, 42%)", price: "R$ 60", priceIsFree: false,
    title: "Groove Night — Funk Família", date: "qua., 1 de abr. às 23:00",
    venue: "Club Groove · Campinas, SP", bandName: "Funk Família", bandInitial: "FF",
    bandColor: "hsl(33, 100%, 30%)", genres: ["Funk", "Pop"],
  },
  {
    image: showJazz, type: "Show", typeColor: "hsl(141, 73%, 42%)", price: "Grátis", priceIsFree: true,
    title: "Jazz Happy Hour — Trio Jazz SP", date: "qui., 2 de abr. às 18:30",
    venue: "Jazz & Cia · São Paulo, SP", bandName: "Trio Jazz SP", bandInitial: "TJ",
    bandColor: "hsl(210, 80%, 30%)", genres: ["Jazz"],
  },
  {
    image: showProg, type: "Show", typeColor: "hsl(141, 73%, 42%)", price: "R$ 35", priceIsFree: false,
    title: "Velvet Horizon — Noite de Rock Progressivo", date: "sex., 3 de abr. às 21:00",
    venue: "Barão do Rock · Campinas, SP", bandName: "Velvet Horizon", bandInitial: "VH",
    bandColor: "hsl(270, 60%, 30%)", genres: ["Rock", "Blues"],
  },
  {
    image: showSamba, type: "Show", typeColor: "hsl(141, 73%, 42%)", price: "Grátis", priceIsFree: true,
    title: "Samba na Praça — Sambão da Rua", date: "dom., 5 de abr. às 18:00",
    venue: "Terraço Atibaia · Atibaia, SP", bandName: "Sambão da Rua", bandInitial: "SR",
    bandColor: "hsl(45, 100%, 30%)", genres: ["Samba", "Pagode"],
  },
  {
    image: showJazz2, type: "Show", typeColor: "hsl(141, 73%, 42%)", price: "R$ 50", priceIsFree: false,
    title: "Jazz Night — Trio Jazz SP", date: "qua., 8 de abr. às 20:00",
    venue: "Jazz & Cia · São Paulo, SP", bandName: "Trio Jazz SP", bandInitial: "TJ",
    bandColor: "hsl(210, 80%, 30%)", genres: ["Jazz", "Blues"],
  },
  {
    image: showForro, type: "Festival", typeColor: "hsl(33, 100%, 50%)", price: "R$ 45", priceIsFree: false,
    title: "Festival Nordestina — Forró na Serra", date: "dom., 12 de abr. às 16:00",
    venue: "Terraço Atibaia · Atibaia, SP", bandName: "Nordestina Beat", bandInitial: "NB",
    bandColor: "hsl(0, 70%, 30%)", genres: ["Forró", "MPB"],
  },
  {
    image: showMpb, type: "Show", typeColor: "hsl(141, 73%, 42%)", price: "R$ 80", priceIsFree: false,
    title: "MPB Raiz — Noite de Caetano e Chico", date: "dom., 19 de abr. às 20:30",
    venue: "Casa da Música SP · São Paulo, SP", bandName: "MPB Roots", bandInitial: "MR",
    bandColor: "hsl(0, 50%, 30%)", genres: ["MPB", "Clássico"],
  },
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

      <div className="pt-20 px-6 md:px-12 lg:px-24 py-12">
        <h1 className="font-heading text-3xl font-bold mb-1">Shows e Eventos</h1>
        <p className="text-muted-foreground text-sm mb-8">Música ao vivo perto de você</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-4">
          <input
            type="text"
            placeholder="Filtrar por cidade..."
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 w-48"
          />
          <input
            type="date"
            className="rounded-lg border border-border bg-card px-4 py-2 text-sm outline-none text-muted-foreground focus:border-primary/50"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((show, i) => (
            <div key={i} className="animate-slide-in" style={{ animationDelay: `${i * 80}ms` }}>
              <ShowEventCard {...show} />
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
