import { Calendar, MapPin } from "lucide-react";

interface ShowEventCardProps {
  image: string;
  type: string;
  typeColor?: string;
  price: string;
  priceIsFree?: boolean;
  title: string;
  date: string;
  venue: string;
  bandName: string;
  bandInitial: string;
  bandColor: string;
  genres: string[];
}

const ShowEventCard = ({
  image,
  type,
  typeColor,
  price,
  priceIsFree,
  title,
  date,
  venue,
  bandName,
  bandInitial,
  bandColor,
  genres,
}: ShowEventCardProps) => {
  return (
    <div className="group rounded-xl bg-card border border-border overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={800}
          height={512}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
          <span
            className="rounded-md px-2.5 py-1 text-xs font-semibold"
            style={{
              backgroundColor: typeColor || "hsl(141, 73%, 42%)",
              color: "hsl(0, 0%, 0%)",
            }}
          >
            {type}
          </span>
          <span className={`text-sm font-bold ${priceIsFree ? "text-primary" : "text-foreground"}`}>
            {price}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-heading font-semibold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-1">
          <Calendar className="h-3.5 w-3.5" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
          <MapPin className="h-3.5 w-3.5" />
          <span>{venue}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="h-7 w-7 rounded-full flex items-center justify-center text-[10px] font-bold text-foreground"
              style={{ backgroundColor: bandColor }}
            >
              {bandInitial}
            </div>
            <span className="text-xs text-muted-foreground">{bandName}</span>
          </div>
        </div>

        <div className="flex gap-1.5 mt-3">
          {genres.map((genre) => (
            <span
              key={genre}
              className="text-[10px] px-2 py-0.5 rounded-full border border-border text-muted-foreground"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowEventCard;
