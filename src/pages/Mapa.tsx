import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Star, MapPin } from "lucide-react";

const allGenres = ["Todos os gêneros", "Rock", "MPB", "Samba", "Jazz", "Blues", "Forró", "Funk", "Pop"];

type ItemType = "band" | "show";

interface MapItem {
  kind: ItemType;
  name: string;
  city: string;
  genres: string[];
  price: string;
  priceNum: number;
  rating?: number;
  available?: boolean;
  initial: string;
  color: string;
  lat: number;
  lng: number;
  venue?: string;
  date?: string;
}

const items: MapItem[] = [
  { kind: "band", name: "MPB Roots", city: "São Paulo, SP", genres: ["MPB", "Jazz"], price: "R$ 1.400", priceNum: 1400, rating: 4.7, available: false, initial: "M", color: "hsl(0, 50%, 55%)", lat: -23.5505, lng: -46.6333 },
  { kind: "band", name: "Trio Jazz SP", city: "São Paulo, SP", genres: ["Jazz", "Blues"], price: "R$ 2.500", priceNum: 2500, rating: 5.0, available: true, initial: "T", color: "hsl(210, 80%, 55%)", lat: -23.5615, lng: -46.6560 },
  { kind: "band", name: "Velvet Horizon", city: "São Paulo, SP", genres: ["Rock", "Blues"], price: "R$ 1.800", priceNum: 1800, rating: 5.0, available: true, initial: "V", color: "hsl(270, 60%, 55%)", lat: -23.5435, lng: -46.6290 },
  { kind: "show", name: "Velvet Horizon — Noite d...", city: "Campinas", genres: ["Rock", "Blues"], price: "R$ 35", priceNum: 35, initial: "3", color: "hsl(270, 60%, 55%)", lat: -22.9071, lng: -47.0628, venue: "Barão do Rock · Campinas", date: "ABR 3" },
  { kind: "show", name: "Jazz Night — Trio Jazz SP", city: "São Paulo", genres: ["Jazz", "Blues"], price: "R$ 50", priceNum: 50, initial: "8", color: "hsl(210, 80%, 55%)", lat: -23.5580, lng: -46.6620, venue: "Jazz & Cia · São Paulo", date: "ABR 8" },
  { kind: "show", name: "Groove Night — Funk Fa...", city: "Campinas", genres: ["Funk", "Pop"], price: "R$ 60", priceNum: 60, initial: "1", color: "hsl(33, 100%, 50%)", lat: -22.9100, lng: -47.0550, venue: "Club Groove · Campinas", date: "ABR 1" },
  { kind: "show", name: "MPB Raiz — Noite de Cae...", city: "São Paulo", genres: ["MPB", "Jazz"], price: "R$ 80", priceNum: 80, initial: "19", color: "hsl(0, 50%, 55%)", lat: -23.5650, lng: -46.6450, venue: "Casa da Música SP · São Paulo", date: "ABR 19" },
  { kind: "show", name: "Rock Gratuito no Barão ...", city: "Campinas", genres: ["Rock"], price: "Grátis", priceNum: 0, initial: "31", color: "hsl(270, 60%, 55%)", lat: -22.9050, lng: -47.0600, venue: "Barão do Rock · Campinas", date: "MAR 31" },
  { kind: "show", name: "Jazz Happy Hour — Trio ...", city: "São Paulo", genres: ["Jazz"], price: "Grátis", priceNum: 0, initial: "2", color: "hsl(210, 80%, 55%)", lat: -23.5530, lng: -46.6580, venue: "Jazz & Cia · São Paulo", date: "ABR 2" },
];

const createIcon = (color: string, label: string) =>
  L.divIcon({
    className: "",
    html: `<div style="background:${color};width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;border:2px solid rgba(255,255,255,0.3);box-shadow:0 2px 8px rgba(0,0,0,0.4)">${label}</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
  });

const Mapa = () => {
  const [tab, setTab] = useState<"all" | "bands" | "shows">("all");
  const [genre, setGenre] = useState("Todos os gêneros");
  const [maxPrice, setMaxPrice] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const filtered = useMemo(() => {
    return items.filter((item) => {
      if (tab === "bands" && item.kind !== "band") return false;
      if (tab === "shows" && item.kind !== "show") return false;
      if (genre !== "Todos os gêneros" && !item.genres.includes(genre)) return false;
      if (maxPrice && item.priceNum > Number(maxPrice)) return false;
      if (onlyAvailable && item.kind === "band" && !item.available) return false;
      return true;
    });
  }, [tab, genre, maxPrice, onlyAvailable]);

  return (
    <div className="h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex flex-1 pt-14 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-72 border-r border-border flex flex-col overflow-hidden bg-background">
          <div className="p-4 border-b border-border">
            <h2 className="font-heading text-lg font-bold mb-4">Explorar</h2>

            {/* Tabs */}
            <div className="flex gap-1 bg-secondary rounded-lg p-1 mb-4">
              {([["all", "Tudo"], ["bands", "🎸 Bandas"], ["shows", "🎵 Shows"]] as const).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`flex-1 text-xs font-medium py-1.5 rounded-md transition-colors ${
                    tab === key ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Genre */}
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground outline-none mb-3"
            >
              {allGenres.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>

            {/* Price */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs text-muted-foreground whitespace-nowrap">Cachê até</span>
              <input
                type="number"
                placeholder="R$ máx"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="flex-1 rounded-lg border border-border bg-secondary px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>

            {/* Available only */}
            <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
              <input
                type="checkbox"
                checked={onlyAvailable}
                onChange={(e) => setOnlyAvailable(e.target.checked)}
                className="accent-primary"
              />
              Só disponíveis
            </label>

            <p className="text-xs text-muted-foreground mt-3">{filtered.length} resultados no mapa</p>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 px-4 py-3 border-b border-border hover:bg-secondary/50 transition-colors cursor-pointer"
              >
                {item.kind === "band" ? (
                  <div
                    className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold text-foreground shrink-0"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.initial}
                  </div>
                ) : (
                  <div className="flex flex-col items-center shrink-0 w-9">
                    <span className="text-[10px] text-muted-foreground uppercase leading-none">{item.date?.split(" ")[0]}</span>
                    <span className="text-lg font-bold leading-tight">{item.date?.split(" ")[1]}</span>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-semibold truncate">{item.name}</p>
                    <span className={`text-xs font-bold shrink-0 ${item.priceNum === 0 ? "text-primary" : "text-accent"}`}>
                      {item.price}
                    </span>
                  </div>

                  {item.kind === "band" ? (
                    <>
                      <p className="text-xs text-muted-foreground">{item.city}</p>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs text-muted-foreground">{item.genres.join(" · ")}</span>
                      </div>
                      <div className="flex items-center justify-between mt-1">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-accent fill-accent" />
                          <span className="text-xs text-accent">{item.rating}</span>
                        </div>
                        <span className={`text-[10px] font-medium ${item.available ? "text-primary" : "text-muted-foreground"}`}>
                          {item.available ? "Disponível" : "Ocupada"}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-1 mt-0.5">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground truncate">{item.venue}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{item.genres.join(" · ")}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Map */}
        <div className="flex-1 relative">
          <MapContainer
            center={[-22.5, -46.5]}
            zoom={7}
            className="h-full w-full"
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {filtered.map((item, i) => (
              <Marker
                key={i}
                position={[item.lat, item.lng]}
                icon={createIcon(item.color, item.initial)}
              >
                <Popup>
                  <div className="text-sm font-semibold">{item.name}</div>
                  <div className="text-xs">{item.city} · {item.price}</div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
