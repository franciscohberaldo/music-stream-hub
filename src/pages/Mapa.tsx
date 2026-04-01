import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import MapSidebar from "@/components/map/MapSidebar";
import MapView from "@/components/map/MapView";
import { MapItem } from "@/components/map/mapData";
import { mapItems } from "@/components/map/mapData";

const allGenres = ["Todos os gêneros", "Rock", "MPB", "Samba", "Jazz", "Blues", "Forró", "Funk", "Pop", "Metal", "Reggae", "Pagode", "Sertanejo", "Indie", "Gospel", "Groove", "Bossa Nova"];

const Mapa = () => {
  const [tab, setTab] = useState<"all" | "bands" | "shows">("all");
  const [genre, setGenre] = useState("Todos os gêneros");
  const [maxPrice, setMaxPrice] = useState("");
  const [onlyAvailable, setOnlyAvailable] = useState(false);

  const filtered = useMemo(() => {
    return mapItems.filter((item) => {
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
        <MapSidebar
          tab={tab}
          setTab={setTab}
          genre={genre}
          setGenre={setGenre}
          genres={allGenres}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          onlyAvailable={onlyAvailable}
          setOnlyAvailable={setOnlyAvailable}
          items={filtered}
        />
        <MapView items={filtered} />
      </div>
    </div>
  );
};

export default Mapa;
