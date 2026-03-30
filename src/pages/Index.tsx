import HeroCarousel from "@/components/HeroCarousel";
import ShowCard from "@/components/ShowCard";
import BandCard from "@/components/BandCard";
import { Search, Music } from "lucide-react";

const shows = [
  { date: "31 de mar.", city: "Campinas", title: "Rock Gratuito no Barão — Velvet Horizon", band: "Velvet Horizon", genre: "Rock", genreColor: "hsl(270, 60%, 55%)", price: "Grátis", priceIsFree: true },
  { date: "1 de abr.", city: "Campinas", title: "Groove Night — Funk Família", band: "Funk Família", genre: "Funk", genreColor: "hsl(33, 100%, 50%)", price: "R$ 60", priceIsFree: false },
  { date: "2 de abr.", city: "São Paulo", title: "Jazz Happy Hour — Trio Jazz SP", band: "Trio Jazz SP", genre: "Jazz", genreColor: "hsl(210, 80%, 55%)", price: "Grátis", priceIsFree: true },
  { date: "3 de abr.", city: "Campinas", title: "Velvet Horizon — Noite de Rock Progressivo", band: "Velvet Horizon", genre: "Rock", genreColor: "hsl(270, 60%, 55%)", price: "R$ 35", priceIsFree: false },
  { date: "5 de abr.", city: "Atibaia", title: "Samba na Praça — Sambão da Rua", band: "Sambão da Rua", genre: "Samba", genreColor: "hsl(45, 100%, 50%)", price: "Grátis", priceIsFree: true },
  { date: "8 de abr.", city: "São Paulo", title: "Jazz Night — Trio Jazz SP", band: "Trio Jazz SP", genre: "Jazz", genreColor: "hsl(210, 80%, 55%)", price: "R$ 50", priceIsFree: false },
];

const bands = [
  { name: "Trio Jazz SP", city: "São Paulo", rating: 5.0, price: "2.500", initial: "TJ", color: "hsl(210, 80%, 30%)" },
  { name: "Velvet Horizon", city: "São Paulo", rating: 5.0, price: "1.800", initial: "VH", color: "hsl(270, 60%, 30%)" },
  { name: "Sambão da Rua", city: "Atibaia", rating: 4.5, price: "900", initial: "SR", color: "hsl(45, 100%, 30%)" },
  { name: "Nordestina Beat", city: "Jundiaí", rating: 4.3, price: "700", initial: "NB", color: "hsl(0, 70%, 30%)" },
  { name: "Funk Família", city: "Sorocaba", rating: 4.1, price: "1.200", initial: "FF", color: "hsl(33, 100%, 30%)" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold text-gradient-brand">Giggo</span>
        </div>
        <div className="hidden md:flex items-center gap-1 bg-secondary rounded-full px-4 py-2 w-80">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar shows, bandas, cidades..."
            className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">Explorar</button>
          <button className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">
            Entrar
          </button>
        </div>
      </nav>

      {/* Hero */}
      <HeroCarousel />

      {/* Shows Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl font-bold">Próximos Shows</h2>
            <p className="text-muted-foreground text-sm mt-1">Eventos confirmados perto de você</p>
          </div>
          <button className="text-primary text-sm font-medium hover:underline">Ver todos →</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {shows.map((show, i) => (
            <div key={i} className="animate-slide-in" style={{ animationDelay: `${i * 80}ms` }}>
              <ShowCard {...show} />
            </div>
          ))}
        </div>
      </section>

      {/* Bands Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 border-t border-border">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-2xl font-bold">Bandas em Destaque</h2>
            <p className="text-muted-foreground text-sm mt-1">Artistas disponíveis para contratação</p>
          </div>
          <button className="text-primary text-sm font-medium hover:underline">Ver todas →</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {bands.map((band, i) => (
            <div key={i} className="animate-slide-in" style={{ animationDelay: `${i * 100}ms` }}>
              <BandCard {...band} />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 md:px-12 lg:px-24 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-primary" />
            <span className="font-heading font-bold text-gradient-brand">Giggo</span>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 Giggo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
