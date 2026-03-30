import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroConcert from "@/assets/hero-concert.jpg";
import heroJazz from "@/assets/hero-jazz.jpg";
import heroSamba from "@/assets/hero-samba.jpg";

const slides = [
  {
    image: heroConcert,
    tags: ["ESPONTÂNEO", "Rock"],
    title: "Rock Gratuito no Barão — Velvet Horizon",
    subtitle: "terça-feira, 31 de março · Barão do Rock · Campinas, SP",
    band: "Velvet Horizon",
    price: "Grátis",
  },
  {
    image: heroJazz,
    tags: ["CONFIRMADO", "Jazz"],
    title: "Jazz Happy Hour — Trio Jazz SP",
    subtitle: "quarta-feira, 2 de abril · Blue Note · São Paulo, SP",
    band: "Trio Jazz SP",
    price: "Grátis",
  },
  {
    image: heroSamba,
    tags: ["CONFIRMADO", "Samba"],
    title: "Samba na Praça — Sambão da Rua",
    subtitle: "sábado, 5 de abril · Praça Central · Atibaia, SP",
    band: "Sambão da Rua",
    price: "Grátis",
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden rounded-b-3xl">
      {slides.map((s, i) => (
        <img
          key={i}
          src={s.image}
          alt={s.title}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          width={1920}
          height={800}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
        <div className="flex gap-2 mb-4">
          {slide.tags.map((tag, i) => (
            <span
              key={i}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                i === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight max-w-2xl mb-3">
          {slide.title}
        </h1>
        <p className="text-muted-foreground text-sm md:text-base mb-6">{slide.subtitle}</p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold">
              {slide.band[0]}
            </div>
            <span className="text-sm">{slide.band}</span>
          </div>
          <span className="text-primary font-bold">{slide.price}</span>
          <button className="rounded-full border border-foreground/20 px-5 py-2 text-sm font-medium hover:bg-secondary transition-colors">
            Ver evento →
          </button>
        </div>
      </div>

      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 backdrop-blur-sm hover:bg-background/80 transition-colors">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 p-2 backdrop-blur-sm hover:bg-background/80 transition-colors">
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 right-8 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-foreground" : "w-2 bg-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
