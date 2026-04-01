export type ItemType = "band" | "show";

export interface MapItem {
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
  venue?: string;
  date?: string;
  lat: number;
  lng: number;
}

export const mapItems: MapItem[] = [
  // São Paulo
  { kind: "band", name: "Velvet Horizon", city: "São Paulo, SP", genres: ["Rock", "Blues"], price: "R$ 1.800", priceNum: 1800, rating: 5.0, available: true, initial: "V", color: "hsl(270, 60%, 55%)", lat: -23.55, lng: -46.63 },
  { kind: "band", name: "Trio Jazz SP", city: "São Paulo, SP", genres: ["Jazz", "Blues"], price: "R$ 2.500", priceNum: 2500, rating: 5.0, available: true, initial: "T", color: "hsl(210, 80%, 55%)", lat: -23.56, lng: -46.65 },
  { kind: "band", name: "MPB Roots", city: "São Paulo, SP", genres: ["MPB", "Jazz"], price: "R$ 1.400", priceNum: 1400, rating: 4.7, available: false, initial: "M", color: "hsl(0, 50%, 55%)", lat: -23.54, lng: -46.64 },
  // Campinas
  { kind: "band", name: "Forró Universitário", city: "Campinas, SP", genres: ["Forró"], price: "R$ 1.500", priceNum: 1500, rating: 4.3, available: true, initial: "F", color: "hsl(33, 100%, 50%)", lat: -22.9, lng: -47.06 },
  // Rio de Janeiro
  { kind: "band", name: "Bossa Carioca", city: "Rio de Janeiro, RJ", genres: ["MPB", "Jazz"], price: "R$ 2.800", priceNum: 2800, rating: 4.9, available: true, initial: "B", color: "hsl(270, 60%, 55%)", lat: -22.9, lng: -43.17 },
  { kind: "band", name: "Funk Carioca Oficial", city: "Rio de Janeiro, RJ", genres: ["Funk"], price: "R$ 2.200", priceNum: 2200, rating: 4.2, available: true, initial: "F", color: "hsl(33, 100%, 50%)", lat: -22.92, lng: -43.2 },
  { kind: "band", name: "Pagode do Guanab...", city: "Rio de Janeiro, RJ", genres: ["Pagode", "Samba"], price: "R$ 3.000", priceNum: 3000, rating: 4.7, available: true, initial: "P", color: "hsl(270, 60%, 55%)", lat: -22.88, lng: -43.22 },
  { kind: "band", name: "Rock das Pedras", city: "Rio de Janeiro, RJ", genres: ["Rock", "Metal"], price: "R$ 2.600", priceNum: 2600, rating: 4.5, available: true, initial: "R", color: "hsl(0, 50%, 55%)", lat: -22.95, lng: -43.18 },
  { kind: "band", name: "Samba Reggae Rio", city: "Rio de Janeiro, RJ", genres: ["Reggae", "Samba"], price: "R$ 1.900", priceNum: 1900, rating: 4.3, available: true, initial: "S", color: "hsl(141, 73%, 42%)", lat: -22.91, lng: -43.15 },
  // Belo Horizonte
  { kind: "band", name: "MPB Mineira", city: "Belo Horizonte, MG", genres: ["MPB"], price: "R$ 2.100", priceNum: 2100, rating: 4.8, available: true, initial: "M", color: "hsl(270, 60%, 55%)", lat: -19.92, lng: -43.94 },
  { kind: "band", name: "Groove de Minas", city: "Belo Horizonte, MG", genres: ["Funk", "Pop"], price: "R$ 2.400", priceNum: 2400, rating: 4.6, available: true, initial: "G", color: "hsl(33, 100%, 50%)", lat: -19.91, lng: -43.96 },
  { kind: "band", name: "Sertanejo BH", city: "Belo Horizonte, MG", genres: ["Sertanejo"], price: "R$ 3.500", priceNum: 3500, rating: 4.4, available: true, initial: "S", color: "hsl(210, 80%, 55%)", lat: -19.93, lng: -43.92 },
  // Salvador
  { kind: "band", name: "Samba de Salvador", city: "Salvador, BA", genres: ["Samba"], price: "R$ 2.000", priceNum: 2000, rating: 4.6, available: true, initial: "S", color: "hsl(270, 60%, 55%)", lat: -12.97, lng: -38.51 },
  { kind: "band", name: "Samba Axé", city: "Salvador, BA", genres: ["Samba"], price: "R$ 2.200", priceNum: 2200, rating: 4.5, available: true, initial: "S", color: "hsl(33, 100%, 50%)", lat: -12.98, lng: -38.49 },
  // Recife
  { kind: "band", name: "Manguebeat Recife", city: "Recife, PE", genres: ["Rock", "Funk"], price: "R$ 1.800", priceNum: 1800, rating: 4.7, available: true, initial: "M", color: "hsl(0, 50%, 55%)", lat: -8.05, lng: -34.87 },
  { kind: "band", name: "Forró do Recife", city: "Recife, PE", genres: ["Forró"], price: "R$ 1.600", priceNum: 1600, rating: 4.4, available: true, initial: "F", color: "hsl(33, 100%, 50%)", lat: -8.06, lng: -34.88 },
  // Natal
  { kind: "band", name: "Potiguar Sound", city: "Natal, RN", genres: ["Rock", "Pop"], price: "R$ 1.400", priceNum: 1400, rating: 4.2, available: true, initial: "P", color: "hsl(210, 80%, 55%)", lat: -5.79, lng: -35.21 },
  // Fortaleza
  { kind: "band", name: "Forró Cearense", city: "Fortaleza, CE", genres: ["Forró"], price: "R$ 1.700", priceNum: 1700, rating: 4.6, available: true, initial: "F", color: "hsl(33, 100%, 50%)", lat: -3.72, lng: -38.52 },
  // São Luís
  { kind: "band", name: "Bumba Meu Boi", city: "São Luís, MA", genres: ["Forró", "Samba"], price: "R$ 1.500", priceNum: 1500, rating: 4.3, available: true, initial: "B", color: "hsl(270, 60%, 55%)", lat: -2.53, lng: -44.28 },
  // Belém
  { kind: "band", name: "Carimbó Belém", city: "Belém, PA", genres: ["Samba", "Forró"], price: "R$ 1.300", priceNum: 1300, rating: 4.1, available: true, initial: "C", color: "hsl(141, 73%, 42%)", lat: -1.46, lng: -48.5 },
  // Manaus
  { kind: "band", name: "Cururu Amazônia", city: "Manaus, AM", genres: ["Samba", "Forró"], price: "R$ 1.200", priceNum: 1200, rating: 4.0, available: true, initial: "C", color: "hsl(210, 80%, 55%)", lat: -3.12, lng: -60.02 },
  // Curitiba
  { kind: "band", name: "Jazz Curitiba", city: "Curitiba, PR", genres: ["Jazz"], price: "R$ 2.300", priceNum: 2300, rating: 4.7, available: true, initial: "J", color: "hsl(210, 80%, 55%)", lat: -25.43, lng: -49.27 },
  // Florianópolis
  { kind: "band", name: "Indie Floripa", city: "Florianópolis, SC", genres: ["Indie", "Rock"], price: "R$ 1.600", priceNum: 1600, rating: 4.3, available: true, initial: "I", color: "hsl(141, 73%, 42%)", lat: -27.6, lng: -48.55 },
  // Porto Alegre
  { kind: "band", name: "Jazz Gaúcho", city: "Porto Alegre, RS", genres: ["Jazz", "Blues"], price: "R$ 2.000", priceNum: 2000, rating: 4.5, available: true, initial: "J", color: "hsl(210, 80%, 55%)", lat: -30.03, lng: -51.23 },
  // Goiânia
  { kind: "band", name: "Sertanejo Goiás", city: "Goiânia, GO", genres: ["Sertanejo"], price: "R$ 3.200", priceNum: 3200, rating: 4.5, available: true, initial: "S", color: "hsl(33, 100%, 50%)", lat: -16.68, lng: -49.25 },
  { kind: "band", name: "Funk Goiânia", city: "Goiânia, GO", genres: ["Funk", "Pop"], price: "R$ 1.800", priceNum: 1800, rating: 4.1, available: true, initial: "F", color: "hsl(0, 50%, 55%)", lat: -16.7, lng: -49.27 },
  // Vitória
  { kind: "band", name: "Capixaba Sound", city: "Vitória, ES", genres: ["Rock", "Pop"], price: "R$ 1.500", priceNum: 1500, rating: 4.2, available: true, initial: "C", color: "hsl(210, 80%, 55%)", lat: -20.32, lng: -40.34 },
  // Santarém
  { kind: "band", name: "Carimbó Santarém", city: "Santarém, PA", genres: ["Samba", "Forró"], price: "R$ 1.100", priceNum: 1100, rating: 4.0, available: true, initial: "C", color: "hsl(141, 73%, 42%)", lat: -2.44, lng: -54.71 },
  // Macapá
  { kind: "band", name: "Coco do Norte", city: "Macapá, AP", genres: ["Samba"], price: "R$ 1.000", priceNum: 1000, rating: 3.9, available: true, initial: "C", color: "hsl(33, 100%, 50%)", lat: 0.03, lng: -51.06 },
  // Shows
  { kind: "show", name: "Velvet Horizon — Noite d...", city: "Campinas", genres: ["Rock", "Blues"], price: "R$ 35", priceNum: 35, initial: "3", color: "hsl(270, 60%, 55%)", lat: -22.88, lng: -47.05, venue: "Barão do Rock · Campinas", date: "ABR 3" },
  { kind: "show", name: "Jazz Night — Trio Jazz SP", city: "São Paulo", genres: ["Jazz", "Blues"], price: "R$ 50", priceNum: 50, initial: "8", color: "hsl(210, 80%, 55%)", lat: -23.57, lng: -46.66, venue: "Jazz & Cia · São Paulo", date: "ABR 8" },
  { kind: "show", name: "Groove Night — Funk Fa...", city: "Campinas", genres: ["Funk", "Pop"], price: "R$ 60", priceNum: 60, initial: "1", color: "hsl(33, 100%, 50%)", lat: -22.92, lng: -47.08, venue: "Club Groove · Campinas", date: "ABR 1" },
  { kind: "show", name: "AO VIVO — Samba SP", city: "São Paulo", genres: ["Samba"], price: "R$ 80", priceNum: 80, initial: "19", color: "hsl(0, 50%, 55%)", lat: -23.58, lng: -46.62, venue: "Casa da Música SP", date: "ABR 19" },
  { kind: "show", name: "Sertanejo Live — BH", city: "Belo Horizonte", genres: ["Sertanejo"], price: "Grátis", priceNum: 0, initial: "5", color: "hsl(270, 60%, 55%)", lat: -19.94, lng: -43.93, venue: "Arena BH", date: "ABR 5" },
  { kind: "show", name: "Pop & Sertanejo — Curitiba", city: "Curitiba", genres: ["Sertanejo", "Pop"], price: "R$ 45", priceNum: 45, initial: "12", color: "hsl(210, 80%, 55%)", lat: -25.44, lng: -49.28, venue: "Live Curitiba", date: "ABR 12" },
];
