import Navbar from "@/components/Navbar";
import { Star, MapPin, Instagram, Music, ImageIcon, Calendar, Users } from "lucide-react";
import bandCover from "@/assets/band-cover-jazz.jpg";
import bandAvatar from "@/assets/band-avatar-jazz.jpg";

const bandData = {
  name: "Trio Jazz SP",
  city: "São Paulo, SP",
  since: "2019",
  genres: ["Jazz", "Blues"],
  level: "Nv.1 Entusiasta",
  rating: 5.0,
  reviews: 2,
  available: true,
  price: "2.500",
  about: "Jazz moderno e standards americanos com toque brasileiro. Ideal para eventos sofisticados, jantares, lounges e ambientes que pedem elegância e bom gosto musical.",
  tags: ["Cachê fixo", "Até 100 km"],
  members: [
    { name: "Pedro Santos", role: "Piano / Teclado", initial: "P", color: "hsl(270, 60%, 55%)" },
    { name: "Lucas Almeida", role: "Saxofone", initial: "L", color: "hsl(210, 80%, 55%)" },
    { name: "Rafael Costa", role: "Contrabaixo", initial: "R", color: "hsl(33, 100%, 50%)" },
  ],
  shows: [
    { date: "ABR 2", title: "Jazz Happy Hour — Trio Jazz SP", city: "São Paulo, SP", price: "Grátis", free: true },
    { date: "ABR 8", title: "Jazz Night — Trio Jazz SP", city: "São Paulo, SP", price: "R$ 50", free: false },
  ],
  stats: { avgRating: 5.0, totalReviews: 2, scheduledShows: 2 },
  links: { instagram: "#", spotify: "#" },
};

const BandProfile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-14">
        {/* Cover + Avatar */}
        <div className="relative">
          <div className="h-56 md:h-72 overflow-hidden">
            <img src={bandCover} alt="Cover" className="w-full h-full object-cover" width={1280} height={512} />
          </div>
          <div className="absolute -bottom-12 left-6 md:left-24">
            <img
              src={bandAvatar}
              alt={bandData.name}
              className="h-24 w-24 rounded-full border-4 border-background object-cover"
              width={512}
              height={512}
            />
          </div>
          {/* Rating + Follow */}
          <div className="absolute bottom-4 right-6 md:right-24 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-bold text-accent">{bandData.rating}</span>
              <span className="text-xs text-muted-foreground">({bandData.reviews} avaliações)</span>
            </div>
            {bandData.available && (
              <span className="text-xs font-medium text-primary border border-primary/30 rounded-full px-2.5 py-0.5">
                Disponível
              </span>
            )}
            <button className="rounded-full bg-primary text-primary-foreground px-4 py-1.5 text-sm font-semibold hover:opacity-90 transition-opacity">
              + Seguir
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 md:px-24 pt-16 pb-16">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main */}
            <div className="flex-1 min-w-0">
              <h1 className="font-heading text-3xl font-bold mb-2">{bandData.name}</h1>
              <div className="flex items-center gap-2 mb-3">
                <span className="flex items-center gap-1 text-xs bg-secondary rounded-full px-3 py-1 text-muted-foreground">
                  <Music className="h-3 w-3" /> {bandData.level}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                {bandData.city} · Formado em {bandData.since}
                <span className="ml-3 text-xs text-muted-foreground/60 cursor-pointer hover:text-foreground">Denunciar</span>
              </p>
              <div className="flex gap-2 mb-6">
                {bandData.genres.map((g) => (
                  <span key={g} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {g}
                  </span>
                ))}
              </div>

              {/* About */}
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Sobre</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{bandData.about}</p>
              <div className="flex gap-2 mb-8">
                {bandData.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              {/* Members */}
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Integrantes</h3>
              <div className="flex flex-col gap-3 mb-8">
                {bandData.members.map((m) => (
                  <div key={m.name} className="flex items-center gap-3">
                    <div
                      className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-foreground"
                      style={{ backgroundColor: m.color }}
                    >
                      {m.initial}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{m.name}</p>
                      <p className="text-xs text-muted-foreground">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Shows */}
              <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">Próximos Shows</h3>
              <div className="flex flex-col gap-1 mb-8">
                {bandData.shows.map((s, i) => (
                  <div key={i} className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="flex flex-col items-center w-10 shrink-0">
                      <span className="text-[10px] text-muted-foreground uppercase leading-none">{s.date.split(" ")[0]}</span>
                      <span className="text-xl font-bold leading-tight">{s.date.split(" ")[1]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{s.title}</p>
                      <p className="text-xs text-muted-foreground">{s.city}</p>
                    </div>
                    <span className={`text-sm font-bold ${s.free ? "text-primary" : "text-accent"}`}>{s.price}</span>
                  </div>
                ))}
              </div>

              {/* Photos */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">Fotos</h3>
                <button className="text-xs text-primary hover:underline">+ Adicionar foto</button>
              </div>
              <div className="flex flex-col items-center justify-center py-12 text-center border border-dashed border-border rounded-xl">
                <ImageIcon className="h-10 w-10 text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground">Nenhuma foto ainda</p>
                <p className="text-xs text-muted-foreground/60">Seja o primeiro a postar!</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 shrink-0 flex flex-col gap-4">
              {/* Hire card */}
              <div className="rounded-xl border border-border bg-card p-5">
                <p className="text-xs text-muted-foreground mb-1">Cachê a partir de</p>
                <p className="text-2xl font-heading font-bold text-primary mb-4">R$ {bandData.price}</p>
                <button className="w-full rounded-full bg-primary text-primary-foreground py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity mb-2">
                  Contratar banda
                </button>
                <p className="text-[10px] text-center text-muted-foreground">Sem compromisso · Resposta em até 24h</p>
              </div>

              {/* Links */}
              <div className="rounded-xl border border-border bg-card p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Links</h4>
                <div className="flex flex-col gap-2">
                  <a href={bandData.links.instagram} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                  <a href={bandData.links.spotify} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Music className="h-4 w-4" /> Spotify
                  </a>
                </div>
              </div>

              {/* Giggo Stage */}
              <div className="rounded-xl border border-accent/40 bg-card p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Estágio Giggo</h4>
                <span className="inline-flex items-center gap-1 text-xs bg-secondary rounded-full px-3 py-1 text-muted-foreground mb-3">
                  <Music className="h-3 w-3" /> {bandData.level}
                </span>
                <div className="flex gap-6 text-xs text-muted-foreground mb-3">
                  <div>
                    <p className="text-sm font-semibold text-foreground">Eventos</p>
                    <p>recomendados</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Monetização</p>
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground">
                  Informe sua média de público cadastro para calcular seu estágio
                </p>
              </div>

              {/* Virtual Hat */}
              <button className="w-full rounded-xl border border-accent/40 bg-card py-3 text-sm font-semibold text-accent hover:bg-accent/10 transition-colors">
                🎩 Chapéu Virtual
              </button>

              {/* Stats */}
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <p className="text-2xl font-bold">{bandData.stats.avgRating}</p>
                    <p className="text-[10px] text-muted-foreground">Nota média</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{bandData.stats.totalReviews}</p>
                    <p className="text-[10px] text-muted-foreground">Avaliações</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{bandData.stats.scheduledShows}</p>
                  <p className="text-[10px] text-muted-foreground">Shows agendados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BandProfile;
