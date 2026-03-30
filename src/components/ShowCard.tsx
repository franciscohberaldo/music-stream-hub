interface ShowCardProps {
  date: string;
  city: string;
  title: string;
  band: string;
  genre: string;
  genreColor: string;
  price: string;
  priceIsFree?: boolean;
}

const ShowCard = ({ date, city, title, band, genre, genreColor, price, priceIsFree }: ShowCardProps) => {
  return (
    <div className="group rounded-xl bg-card border border-border p-4 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 cursor-pointer">
      <div className={`h-1 w-full rounded-full mb-4`} style={{ backgroundColor: genreColor }} />
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
        <span>🎵 {date} · {city}</span>
        <span className={priceIsFree ? "text-primary font-bold" : "font-bold text-accent"}>
          {price}
        </span>
      </div>
      <h3 className="font-heading font-semibold text-sm mb-3 group-hover:text-primary transition-colors line-clamp-2">
        {title}
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold">
            {band[0]}
          </div>
          <span className="text-xs text-muted-foreground">{band}</span>
        </div>
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ color: genreColor, backgroundColor: `${genreColor}15` }}>
          {genre}
        </span>
      </div>
    </div>
  );
};

export default ShowCard;
