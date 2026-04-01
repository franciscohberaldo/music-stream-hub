import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapItem } from "./mapData";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const createGenreIcon = (item: MapItem) => {
  const label = item.kind === "band" ? item.genres[0] : (item.date || "");
  const isShow = item.kind === "show";

  return L.divIcon({
    className: "custom-map-marker",
    html: `<div style="
      background: ${item.color};
      color: white;
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      border: 2px solid rgba(255,255,255,0.3);
      display: flex;
      align-items: center;
      gap: 4px;
    ">
      <span style="font-size: 10px;">${isShow ? "🎵" : "●"}</span>
      ${label}
    </div>`,
    iconSize: [0, 0],
    iconAnchor: [40, 15],
  });
};

interface FitBoundsProps {
  items: MapItem[];
}

const FitBounds = ({ items }: FitBoundsProps) => {
  const map = useMap();

  useEffect(() => {
    if (items.length === 0) return;
    const bounds = L.latLngBounds(items.map((it) => [it.lat, it.lng]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });
  }, [items, map]);

  return null;
};

interface MapViewProps {
  items: MapItem[];
}

const MapView = ({ items }: MapViewProps) => {
  return (
    <div className="flex-1 relative">
      <MapContainer
        center={[-14.24, -46.5]}
        zoom={4}
        className="h-full w-full z-0"
        zoomControl={true}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <FitBounds items={items} />
        {items.map((item, i) => (
          <Marker key={i} position={[item.lat, item.lng]} icon={createGenreIcon(item)}>
            <Popup>
              <div style={{ minWidth: 160 }}>
                <strong style={{ fontSize: 13 }}>{item.name}</strong>
                <br />
                <span style={{ fontSize: 11, color: "#888" }}>{item.city}</span>
                <br />
                <span style={{ fontSize: 12, fontWeight: 600 }}>{item.price}</span>
                {item.kind === "band" && item.rating && (
                  <span style={{ fontSize: 11, marginLeft: 8 }}>⭐ {item.rating}</span>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
