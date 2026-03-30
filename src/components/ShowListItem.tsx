interface ShowListItemProps {
  month: string;
  day: string;
  title: string;
  band: string;
  city: string;
  genres: string[];
  price: string;
  priceIsFree?: boolean;
}

const ShowListItem = ({ month, day, title, band, city, genres, price, priceIsFree }: ShowListItemProps) => {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-card border border-border p-4 cursor-pointer hover:border-primary/30 transition-all">
      <div className="flex flex-col items-center min-w-[40px]">
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">{month}</span>
        <span className="text-2xl font-bold font-heading leading-none">{day}</span>
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-heading font-semibold text-sm leading-tight line-clamp-1 mb-1">{title}</h3>
        <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
          <span>🎸</span>
          <span>{band} · {city}</span>
        </div>
        <div className="flex gap-1.5">
          {genres.map((g) => (
            <span key={g} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
              {g}
            </span>
          ))}
        </div>
      </div>
      <span className={`text-sm font-bold whitespace-nowrap ${priceIsFree ? "text-primary" : "text-accent"}`}>
        {price}
      </span>
    </div>
  );
};

export default ShowListItem;
