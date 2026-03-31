import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Calendar, MapPin, Users, Star, Bell } from "lucide-react";
import heroJazz from "@/assets/show-hero-jazz.jpg";
import heroRock from "@/assets/show-hero-rock.jpg";
import heroFunk from "@/assets/show-hero-funk.jpg";

const heroImages: Record<string, string> = {
  "jazz-night-trio-jazz-sp": heroJazz,
  "rock-gratuito-velvet-horizon": heroRock,
  "groove-night-funk-familia": heroFunk,
};

const showsData: Record<string, {
  title: string;
  band: string;
  bandInitial: string;
  bandGenres: string;
  bandRating: number;
  bandBio: string;
  date: string;
  time: string;
  address: string;
  city: string;
  genres: string[];
  description: string;
  price: string;
  priceIsFree: boolean;
  venue: string;
  venueAddress: string;
  venueCapacity: number;
}> = {
  "jazz-night-trio-jazz-sp": {
    title: "Jazz Night — Trio Jazz SP",
    band: "Trio Jazz SP",
    bandInitial: "TJ",
    bandGenres: "Jazz · Blues",
    bandRating: 5.0,
    bandBio: "Jazz moderno e standards americanos com toque brasileiro. Ideal para eventos sofisticados, jantares, lounges e ambientes que pedem elegância e bom gosto...",
    date: "Quarta-Feira, 8 de Abril de 2026",
    time: "20:00",
    address: "Rua Oscar Freire, 890 · São Paulo, SP",
    city: "São Paulo",
    genres: ["Jazz", "Blues"],
    description: "Uma noite especial de jazz moderno e bossa nova no elegante Jazz & Cia. Jantar opcional a partir das 19h. Reservas antecipadas recomendadas.",
    price: "R$ 50",
    priceIsFree: false,
    venue: "Jazz & Cia",
    venueAddress: "Rua Oscar Freire, 890 — Jardins · São Paulo",
    venueCapacity: 80,
  },
  "rock-gratuito-velvet-horizon": {
    title: "Rock Gratuito no Barão — Velvet Horizon",
    band: "Velvet Horizon",
    bandInitial: "VH",
    bandGenres: "Rock · Blues",
    bandRating: 5.0,
    bandBio: "Rock progressivo e alternativo com influências de blues e psicodelia. Shows energéticos e autorais.",
    date: "Segunda-Feira, 31 de Março de 2026",
    time: "21:00",
    address: "Rua Barão de Jaguara, 1200 · Campinas, SP",
    city: "Campinas",
    genres: ["Rock"],
    description: "Show gratuito de rock no coração de Campinas. Velvet Horizon traz seu repertório autoral e clássicos do rock progressivo.",
    price: "Grátis",
    priceIsFree: true,
    venue: "Bar do Barão",
    venueAddress: "Rua Barão de Jaguara, 1200 — Centro · Campinas",
    venueCapacity: 120,
  },
  "groove-night-funk-familia": {
    title: "Groove Night — Funk Família",
    band: "Funk Família",
    bandInitial: "FF",
    bandGenres: "Funk · Pop",
    bandRating: 4.1,
    bandBio: "Funk carioca com pegada pop. Energia contagiante e hits que fazem todo mundo dançar.",
    date: "Terça-Feira, 1 de Abril de 2026",
    time: "22:00",
    address: "Av. Norte-Sul, 500 · Campinas, SP",
    city: "Campinas",
    genres: ["Funk", "Pop"],
    description: "Noite de funk e groove com Funk Família. Pista aberta e drinks especiais a partir das 21h.",
    price: "R$ 60",
    priceIsFree: false,
    venue: "Groove House",
    venueAddress: "Av. Norte-Sul, 500 — Cambuí · Campinas",
    venueCapacity: 200,
  },
};

const ShowDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const show = slug ? showsData[slug] : null;
  const heroImage = slug ? heroImages[slug] : undefined;

  if (!show) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 px-6 md:px-12 lg:px-24 text-center py-20">
          <p className="text-muted-foreground">Show não encontrado.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-20 px-6 md:px-12 lg:px-24 pb-16">
        {/* Hero Banner — full width */}
        <div className="relative rounded-2xl overflow-hidden h-64 md:h-80 lg:h-96 mb-10">
          {heroImage ? (
            <img src={heroImage} alt={show.title} className="absolute inset-0 w-full h-full object-cover" width={1920} height={640} />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary to-primary/10" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/20 px-2.5 py-1 rounded">SHOW</span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">{show.title}</h1>
            <div className="h-1 w-24 bg-primary rounded-full mt-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Date & Location */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>{show.date} às {show.time}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{show.address}</span>
              </div>
            </div>

            {/* Genre chips */}
            <div className="flex gap-2">
              {show.genres.map((g) => (
                <span key={g} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                  {g}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">{show.description}</p>

            {/* Artist Card */}
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">ARTISTA</span>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold">
                    {show.bandInitial}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">{show.band}</h3>
                    <p className="text-xs text-muted-foreground">{show.bandGenres}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-bold text-amber-400">{show.bandRating}</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{show.bandBio}</p>
              <Link to={`/bandas/${show.band.toLowerCase().replace(/\s+/g, "-")}`} className="text-primary text-xs font-medium mt-3 inline-block hover:underline">
                Ver perfil completo →
              </Link>
            </div>

            {/* Venue Card */}
            <div className="rounded-xl border border-border bg-card p-5">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">ESPAÇO</span>
              <h3 className="font-heading font-semibold text-sm mt-2">{show.venue}</h3>
              <p className="text-xs text-muted-foreground mt-1">{show.venueAddress}</p>
              <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                <Users className="h-3.5 w-3.5" />
                <span>{show.venueCapacity} pessoas</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Price & CTA */}
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="font-heading text-3xl font-bold">{show.price}</p>
              <p className="text-xs text-muted-foreground mt-1">por pessoa</p>
              {!show.priceIsFree && (
                <button className="mt-4 w-full rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">
                  Comprar ingresso · {show.price}
                </button>
              )}
              <button className="mt-3 w-full rounded-full border border-border py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors flex items-center justify-center gap-2">
                <Bell className="h-4 w-4" />
                Quero ser avisado
              </button>
            </div>

            {/* QR Code placeholder */}
            <div className="rounded-xl border border-border bg-card p-6 text-center">
              <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">CHECK-IN QR CODE</span>
              <div className="mt-4 mx-auto w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-5 gap-0.5 w-24 h-24">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={`w-full h-full ${[0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24].includes(i) ? "bg-black" : "bg-white"}`} />
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">Escaneie para fazer check-in no evento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
