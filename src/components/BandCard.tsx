import { Star } from "lucide-react";

interface BandCardProps {
  name: string;
  city: string;
  rating: number;
  price: string;
  initial: string;
  color: string;
}

const BandCard = ({ name, city, rating, price, initial, color }: BandCardProps) => {
  return (
    <div className="flex flex-col items-center text-center group cursor-pointer">
      <div
        className="h-20 w-20 rounded-full flex items-center justify-center text-2xl font-bold mb-3 ring-2 ring-transparent group-hover:ring-primary transition-all"
        style={{ backgroundColor: color }}
      >
        {initial}
      </div>
      <h4 className="font-heading font-semibold text-sm group-hover:text-primary transition-colors">{name}</h4>
      <p className="text-xs text-muted-foreground mb-1">{city}</p>
      <div className="flex items-center gap-1 text-accent text-xs mb-1">
        <Star className="h-3 w-3 fill-current" />
        <span>{rating.toFixed(1)}</span>
      </div>
      <span className="text-xs text-muted-foreground">R$ {price}</span>
    </div>
  );
};

export default BandCard;
