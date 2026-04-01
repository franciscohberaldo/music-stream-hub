import { Star, MapPin } from "lucide-react";
import { MapItem } from "./mapData";

interface MapSidebarProps {
  tab: "all" | "bands" | "shows";
  setTab: (t: "all" | "bands" | "shows") => void;
  genre: string;
  setGenre: (g: string) => void;
  genres: string[];
  maxPrice: string;
  setMaxPrice: (p: string) => void;
  onlyAvailable: boolean;
  setOnlyAvailable: (v: boolean) => void;
  items: MapItem[];
}

const MapSidebar = ({
  tab, setTab, genre, setGenre, genres, maxPrice, setMaxPrice, onlyAvailable, setOnlyAvailable, items
}: MapSidebarProps) => {
  return (
    <aside className="w-72 border-r border-border flex flex-col overflow-hidden bg-background shrink-0">
      <div className="p-4 border-b border-border">
        <h2 className="font-heading text-lg font-bold mb-4">Explorar</h2>

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

        <select
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm text-foreground outline-none mb-3"
        >
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>

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

        <label className="flex items-center gap-2 text-sm text-muted-foreground cursor-pointer">
          <input
            type="checkbox"
            checked={onlyAvailable}
            onChange={(e) => setOnlyAvailable(e.target.checked)}
            className="accent-primary"
          />
          Só disponíveis
        </label>

        <p className="text-xs text-muted-foreground mt-3">{items.length} resultados no mapa</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {items.map((item, i) => (
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
                <span className="text-xs font-bold shrink-0 text-accent">
                  {item.price}
                </span>
              </div>

              {item.kind === "band" ? (
                <>
                  <p className="text-xs text-muted-foreground">{item.city}</p>
                  <span className="text-xs text-primary">{item.genres.join(" · ")}</span>
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
                  <span className="text-xs text-primary">{item.genres.join(" · ")}</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default MapSidebar;
