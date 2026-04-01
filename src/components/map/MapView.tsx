import { useEffect, useMemo, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapItem } from "./mapData";

interface MapViewProps {
  items: MapItem[];
}

const tileLayerUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

const createMarkerIcon = (item: MapItem) => {
  const label = item.kind === "band" ? item.genres[0] : item.date || "Show";
  const bullet = item.kind === "show" ? "♪" : "●";

  return L.divIcon({
    className: "map-pill-icon",
    html: `<div style="
      background:${item.color};
      color:hsl(0 0% 100%);
      border:2px solid hsl(0 0% 100% / 0.26);
      border-radius:999px;
      padding:4px 10px;
      font-size:11px;
      font-weight:700;
      line-height:1;
      white-space:nowrap;
      display:flex;
      align-items:center;
      gap:6px;
      box-shadow:0 10px 24px hsl(0 0% 0% / 0.28);
    ">
      <span>${bullet}</span>
      <span>${label}</span>
    </div>`,
    iconSize: [88, 28],
    iconAnchor: [44, 14],
  });
};

const popupHtml = (item: MapItem) => `
  <div style="min-width:180px;font-family:DM Sans, sans-serif;">
    <div style="font-size:13px;font-weight:700;color:hsl(0 0% 10%);margin-bottom:4px;">${item.name}</div>
    <div style="font-size:11px;color:hsl(0 0% 40%);margin-bottom:6px;">${item.city}</div>
    <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
      <span style="font-size:12px;font-weight:700;color:hsl(0 0% 10%);">${item.price}</span>
      ${item.kind === "band" && item.rating ? `<span style="font-size:11px;color:hsl(33 100% 45%);">★ ${item.rating.toFixed(1)}</span>` : ""}
    </div>
    ${item.venue ? `<div style="font-size:11px;color:hsl(0 0% 40%);margin-top:6px;">${item.venue}</div>` : ""}
  </div>
`;

const MapView = ({ items }: MapViewProps) => {
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerLayerRef = useRef<L.LayerGroup | null>(null);

  const bounds = useMemo(() => {
    if (!items.length) return null;
    return L.latLngBounds(items.map((item) => [item.lat, item.lng] as [number, number]));
  }, [items]);

  useEffect(() => {
    if (!mapElementRef.current || mapInstanceRef.current) return;

    const map = L.map(mapElementRef.current, {
      zoomControl: true,
      attributionControl: false,
    }).setView([-14.24, -46.5], 4);

    L.tileLayer(tileLayerUrl, {
      maxZoom: 19,
    }).addTo(map);

    markerLayerRef.current = L.layerGroup().addTo(map);
    mapInstanceRef.current = map;

    return () => {
      markerLayerRef.current?.clearLayers();
      markerLayerRef.current = null;
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    const markerLayer = markerLayerRef.current;
    if (!map || !markerLayer) return;

    markerLayer.clearLayers();

    items.forEach((item) => {
      const marker = L.marker([item.lat, item.lng], {
        icon: createMarkerIcon(item),
      });

      marker.bindPopup(popupHtml(item), {
        closeButton: false,
        offset: [0, -10],
      });

      marker.addTo(markerLayer);
    });

    if (bounds) {
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 11 });
    }
  }, [items, bounds]);

  return (
    <div className="flex-1 relative bg-secondary/20">
      <div ref={mapElementRef} className="h-full w-full" aria-label="Mapa de bandas e shows" />
    </div>
  );
};

export default MapView;
