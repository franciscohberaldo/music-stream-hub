import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Star, Users } from "lucide-react";
import venueCasaMusica from "@/assets/venue-casa-musica.jpg";
import venueJazzCia from "@/assets/venue-jazz-cia.jpg";
import venueBaraoRock from "@/assets/venue-barao-rock.jpg";
import venueTerraco from "@/assets/venue-terraco-atibaia.jpg";
import venueClubGroove from "@/assets/venue-club-groove.jpg";

const capacityFilters = ["50+", "100+", "300+", "500+", "1000+"];
const typeFilters = ["Bar", "Casa de Show", "Club", "Restaurante", "Espaço Aberto", "Igreja"];

interface Venue {
  image: string;
  type: string;
  name: string;
  city: string;
  description: string;
  capacity: number;
  rating: number;
  reviews: number;
  price: string;
  initial: string;
  color: string;
}

const venues: Venue[] = [
  {
    image: venueCasaMusica, type: "Casa de Show", name: "Casa da Música SP", city: "São Paulo, SP",
    description: "Casa de shows clássica no coração de São Paulo. Três palcos, capacidade total de 800 pessoas,...",
    capacity: 800, rating: 4.9, reviews: 87, price: "A partir de R$ 3.000", initial: "CM", color: "hsl(141, 73%, 42%)",
  },
  {
    image: venueJazzCia, type: "Restaurante", name: "Jazz & Cia", city: "São Paulo, SP",
    description: "Restaurante gastronômico com música ao vivo todas as sextas e sábados. Ambiente sofisticad...",
    capacity: 80, rating: 4.8, reviews: 52, price: "Consultar valor", initial: "JC", color: "hsl(270, 60%, 55%)",
  },
  {
    image: venueBaraoRock, type: "Bar", name: "Barão do Rock", city: "Campinas, SP",
    description: "Bar temático de rock com palco fixo, excelente sistema de som e iluminação cênica. Capacidad...",
    capacity: 200, rating: 4.7, reviews: 34, price: "A partir de R$ 800", initial: "BR", color: "hsl(33, 100%, 50%)",
  },
  {
    image: venueTerraco, type: "Espaço Aberto", name: "Terraço Atibaia", city: "Atibaia, SP",
    description: "Espaço ao ar livre com vista para a Serra da Mantiqueira. Estrutura para até 500 pessoas,...",
    capacity: 500, rating: 4.5, reviews: 71, price: "A partir de R$ 5.000", initial: "TA", color: "hsl(141, 73%, 42%)",
  },
  {
    image: venueClubGroove, type: "Club", name: "Club Groove", city: "Campinas, SP",
    description: "Club eletrônico com booth de DJ e pista para 300 pessoas. Sistema de som L-Acoustics,...",
    capacity: 300, rating: 4.2, reviews: 18, price: "A partir de R$ 1.500", initial: "CG", color: "hsl(210, 80%, 55%)",
  },
];

const Espacos = () => {
  const [activeType, setActiveType] = useState<string | null>(null);
  const [activeCapacity, setActiveCapacity] = useState<string | null>(null);
  const [cityFilter, setCityFilter] = useState("");

  const filtered = venues.filter((v) => {
    if (activeType && v.type !== activeType) return false;
    if (activeCapacity) {
      const min = parseInt(activeCapacity);
      if (v.capacity < min) return false;
    }
    if (cityFilter && !v.city.toLowerCase().includes(cityFilter.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 px-6 md:px-12 lg:px-24 pb-16">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl font-bold mb-1">Espaços para Shows</h1>
            <p className="text-muted-foreground text-sm">Bares, casas de show, teatros e muito mais</p>
          </div>
          <button className="rounded-full bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">
            + Cadastrar espaço
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <input
            type="text"
            placeholder="Filtrar por cidade..."
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="rounded-full border border-border bg-secondary px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 w-48"
          />
          {capacityFilters.map((cap) => (
            <button
              key={cap}
              onClick={() => setActiveCapacity(activeCapacity === cap ? null : cap)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCapacity === cap
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
              }`}
            >
              {cap}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {typeFilters.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(activeType === type ? null : type)}
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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((venue, i) => (
            <div
              key={i}
              className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer animate-slide-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={800}
                  height={512}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />

                {/* Type badge */}
                <span className="absolute top-3 left-3 text-[10px] font-semibold bg-background/70 backdrop-blur-sm text-foreground px-2 py-0.5 rounded-md">
                  {venue.type}
                </span>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-accent/90 text-primary-foreground px-2 py-0.5 rounded-md">
                  <Star className="h-3 w-3 fill-current" />
                  <span className="text-xs font-bold">{venue.rating}</span>
                </div>

                {/* Avatar + Capacity */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold text-foreground border-2 border-background"
                    style={{ backgroundColor: venue.color }}
                  >
                    {venue.initial}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-foreground/80">
                    <Users className="h-3 w-3" /> até {venue.capacity} pessoas
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-heading font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                  {venue.name}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">{venue.city}</p>
                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                  {venue.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground">{venue.reviews} avaliações</span>
                  <span className="text-xs font-semibold text-primary">{venue.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">Nenhum espaço encontrado com esses filtros.</p>
        )}
      </div>
    </div>
  );
};

export default Espacos;
