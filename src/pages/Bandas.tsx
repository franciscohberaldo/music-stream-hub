import { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

import coverTrioJazz from "@/assets/band-cover-trio-jazz.jpg";
import coverVelvet from "@/assets/band-cover-velvet.jpg";
import coverBossa from "@/assets/band-cover-bossa.jpg";
import coverCordas from "@/assets/band-cover-cordas.jpg";
import coverJazzSul from "@/assets/band-cover-jazzsul.jpg";
import coverPercussao from "@/assets/band-cover-percussao.jpg";
import coverMetal from "@/assets/band-cover-metal.jpg";
import coverBlues from "@/assets/band-cover-blues.jpg";
import coverGospel from "@/assets/band-cover-gospel.jpg";

const genreCategories = ["Rock", "MPB", "Samba", "Jazz", "Blues", "Forró", "Funk", "Pop", "Eletrônica", "Clássico", "Reggae", "Pagode"];
const priceFilters = ["Até R$500", "Até R$1.000", "Até R$2.000", "Até R$5.000"];

interface Band {
  id: string;
  name: string;
  city: string;
  since: string;
  rating: number;
  available: boolean;
  price: string;
  description: string;
  genres: string[];
  cover: string;
  initial: string;
  color: string;
}

const bands: Band[] = [
  {
    id: "trio-jazz-sp",
    name: "Trio Jazz SP",
    city: "São Paulo, SP",
    since: "2019",
    rating: 5.0,
    available: true,
    price: "R$ 2.500",
    description: "Jazz moderno e standards americanos com toque brasileiro. Ideal para eventos sofisticados...",
    genres: ["Jazz", "Blues"],
    cover: coverTrioJazz,
    initial: "TJ",
    color: "hsl(210, 80%, 30%)",
  },
  {
    id: "velvet-horizon",
    name: "Velvet Horizon",
    city: "São Paulo, SP",
    since: "2015",
    rating: 5.0,
    available: true,
    price: "R$ 1.800",
    description: "Rock progressivo com influências dos anos 70 e 80. Formados em São Paulo, o Velvet Horizon já...",
    genres: ["Rock", "Blues"],
    cover: coverVelvet,
    initial: "VH",
    color: "hsl(270, 60%, 30%)",
  },
  {
    id: "bossa-carioca",
    name: "Bossa Carioca",
    city: "Rio de Janeiro, RJ",
    since: "2009",
    rating: 4.9,
    available: true,
    price: "R$ 2.800",
    description: "Bossa nova e MPB raiz. Voz e violão que transportam para a Ipanema dos anos...",
    genres: ["MPB", "Jazz"],
    cover: coverBossa,
    initial: "BC",
    color: "hsl(45, 100%, 30%)",
  },
  {
    id: "cordas-afeto",
    name: "Cordas & Afeto",
    city: "São Paulo, SP",
    since: "2017",
    rating: 4.9,
    available: true,
    price: "R$ 3.200",
    description: "Quarteto de cordas clássico com repertório versátil: erudito, pop e trilhas de cinema. Perfeit...",
    genres: ["Clássico"],
    cover: coverCordas,
    initial: "CA",
    color: "hsl(30, 60%, 30%)",
  },
  {
    id: "jazz-sul",
    name: "Jazz Sul",
    city: "Porto Alegre, RS",
    since: "2013",
    rating: 4.9,
    available: true,
    price: "R$ 3.000",
    description: "Jazz moderno com influências do sul. Quinteto sofisticado para restaurantes e eventos premium.",
    genres: ["Jazz"],
    cover: coverJazzSul,
    initial: "JS",
    color: "hsl(210, 70%, 30%)",
  },
  {
    id: "percussao-olodum",
    name: "Percussão Olodum Livre",
    city: "Salvador, BA",
    since: "2000",
    rating: 4.9,
    available: true,
    price: "R$ 3.500",
    description: "Percussão afro-baiana inspirada no Olodum. Show-espetáculo com fanfarra, dança e muita...",
    genres: ["Samba", "Funk"],
    cover: coverPercussao,
    initial: "PO",
    color: "hsl(0, 70%, 30%)",
  },
  {
    id: "metal-maceio",
    name: "Metal Maceió",
    city: "Maceió, AL",
    since: "2018",
    rating: 4.8,
    available: true,
    price: "R$ 1.800",
    description: "A mais pesada do Nordeste. Metal extremo com a energia crua do litoral alagoano. Shows intens...",
    genres: ["Metal", "Rock"],
    cover: coverMetal,
    initial: "MM",
    color: "hsl(0, 50%, 30%)",
  },
  {
    id: "paulistana-blues",
    name: "Paulistana Blues Band",
    city: "São Paulo, SP",
    since: "2010",
    rating: 4.8,
    available: true,
    price: "R$ 2.500",
    description: "Desde 2010 no cenário paulistano, misturamos o blues americano com pitadas de samba. Shows...",
    genres: ["Blues", "Rock"],
    cover: coverBlues,
    initial: "PB",
    color: "hsl(210, 50%, 30%)",
  },
  {
    id: "gospel-brasilia",
    name: "Gospel Brasília",
    city: "Brasília, DF",
    since: "2010",
    rating: 4.8,
    available: true,
    price: "R$ 2.200",
    description: "Louvor e adoração contemporâneo. Banda completa para eventos religiosos de qualquer...",
    genres: ["Gospel"],
    cover: coverGospel,
    initial: "GB",
    color: "hsl(40, 60%, 30%)",
  },
];

const BandListCard = ({ band }: { band: Band }) => (
  <Link
    to={`/bandas/${band.id}`}
    className="group rounded-xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all"
  >
    {/* Cover image */}
    <div className="relative h-40 overflow-hidden">
      <img
        src={band.cover}
        alt={band.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        width={768}
        height={512}
      />
      {/* Rating badge */}
      <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-0.5">
        <Star className="h-3 w-3 text-accent fill-accent" />
        <span className="text-xs font-bold text-accent">{band.rating.toFixed(1)}</span>
      </div>
      {/* Availability badge */}
      {band.available && (
        <span className="absolute bottom-3 right-3 text-[11px] font-medium text-primary bg-background/80 backdrop-blur-sm rounded-full px-2.5 py-0.5">
          Disponível
        </span>
      )}
      {/* Avatar */}
      <div
        className="absolute bottom-3 left-3 h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-foreground border-2 border-background"
        style={{ backgroundColor: band.color }}
      >
        {band.initial}
      </div>
    </div>

    {/* Content */}
    <div className="p-4">
      <h3 className="font-heading font-bold text-sm group-hover:text-primary transition-colors">{band.name}</h3>
      <p className="text-xs text-muted-foreground mb-2">{band.city} · desde {band.since}</p>
      <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">{band.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          {band.genres.map((g) => (
            <span key={g} className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground">
              {g}
            </span>
          ))}
        </div>
        <span className="text-sm font-bold text-accent">{band.price}</span>
      </div>
    </div>
  </Link>
);

const Bandas = () => {
  const [activeGenres, setActiveGenres] = useState<string[]>([]);
  const [activePrice, setActivePrice] = useState<string | null>(null);
  const [cityFilter, setCityFilter] = useState("");

  const toggleGenre = (genre: string) => {
    setActiveGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const filtered = bands.filter((band) => {
    const genreMatch = activeGenres.length === 0 || band.genres.some((g) => activeGenres.includes(g));
    const cityMatch = !cityFilter || band.city.toLowerCase().includes(cityFilter.toLowerCase());
    return genreMatch && cityMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 px-6 md:px-12 lg:px-24 pb-16">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold mb-1">Bandas e Artistas</h1>
            <p className="text-muted-foreground text-sm">Encontre o artista certo para o seu evento</p>
          </div>
          <button className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">
            + Cadastrar banda
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-4">
          <input
            type="text"
            placeholder="Filtrar por cidade..."
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="rounded-full border border-border bg-secondary px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 w-48"
          />
          {priceFilters.map((p) => (
            <button
              key={p}
              onClick={() => setActivePrice(activePrice === p ? null : p)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activePrice === p
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {p}
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
          {filtered.map((band, i) => (
            <div key={band.id} className="animate-slide-in" style={{ animationDelay: `${i * 80}ms` }}>
              <BandListCard band={band} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">Nenhuma banda encontrada com esses filtros.</p>
        )}
      </div>
    </div>
  );
};

export default Bandas;
