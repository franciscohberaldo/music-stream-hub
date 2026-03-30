import { Music, Search, Users, MessageSquare, LayoutDashboard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Shows", path: "/shows", icon: Music },
  { label: "Busca", path: "/busca", icon: Search },
  { label: "Bandas", path: "/bandas", icon: Users },
  { label: "Inbox", path: "/inbox", icon: MessageSquare },
  { label: "Painel", path: "/painel", icon: LayoutDashboard },
];

const BottomTabBar = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background border-t border-border">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path || (tab.path === "/shows" && location.pathname === "/");
          const Icon = tab.icon;
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 text-[10px] font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{tab.label}</span>
              {isActive && <div className="h-0.5 w-4 rounded-full bg-primary mt-0.5" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomTabBar;
