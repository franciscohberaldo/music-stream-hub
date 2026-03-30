import { Search, Music } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Shows", path: "/shows" },
  { label: "Busca", path: "/busca" },
  { label: "Bandas", path: "/bandas" },
  { label: "Mapa", path: "/mapa" },
  { label: "Espaços", path: "/espacos" },
  { label: "Inbox", path: "/inbox" },
  { label: "Painel", path: "/painel" },
  { label: "Vagas", path: "/vagas" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2">
          <Music className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold text-gradient-brand">Giggo</span>
        </Link>
        <div className="hidden md:flex items-center gap-1 bg-secondary rounded-full px-4 py-2 w-72">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar shows, bandas, cidades..."
            className="bg-transparent text-sm outline-none flex-1 placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-1">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:opacity-90 transition-opacity">
          + Publicar
        </button>
        <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">
          MF
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
