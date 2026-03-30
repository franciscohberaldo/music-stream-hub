import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tiposEvento = ["Show", "Festival", "Casamento", "Corporativo", "Missa", "Espontâneo", "Privado"];
const generos = ["Rock", "MPB", "Samba", "Jazz", "Blues", "Forró", "Funk", "Pop", "Eletrônico", "Clássico", "Reggae", "Pagode"];
const estados = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

const bandas = [
  { id: "1", nome: "Trio Jazz SP" },
  { id: "2", nome: "Samba da Laje" },
  { id: "3", nome: "Os Barões do Rock" },
];

const PublicarEvento = () => {
  const [tipoEvento, setTipoEvento] = useState("Show");
  const [generosSelecionados, setGenerosSelecionados] = useState<string[]>([]);
  const [tipoIngresso, setTipoIngresso] = useState<"gratuito" | "pago">("gratuito");

  const toggleGenero = (g: string) => {
    setGenerosSelecionados((prev) =>
      prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g]
    );
  };

  const inputClass = "rounded-lg border border-border bg-secondary px-4 py-2.5 text-sm outline-none placeholder:text-muted-foreground focus:border-primary/50 text-foreground w-full";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 px-6 md:px-12 lg:px-24 pb-16">
        <div className="max-w-2xl">
          <div className="mb-10">
            <h1 className="font-heading text-3xl font-bold mb-1">Publicar evento</h1>
            <p className="text-muted-foreground text-sm">Adicione um show ao guia cultural do Giggo</p>
          </div>

          {/* INFORMAÇÕES BÁSICAS */}
          <section className="mb-10">
            <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Informações Básicas</h2>
            <div className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nome do evento <span className="text-primary">*</span></label>
                <input placeholder="Ex: Noite de Jazz no Bar do João" className={inputClass} />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Tipo de evento <span className="text-primary">*</span></label>
                <div className="flex flex-wrap gap-2">
                  {tiposEvento.map((tipo) => (
                    <button
                      key={tipo}
                      onClick={() => setTipoEvento(tipo)}
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                        tipoEvento === tipo
                          ? "bg-primary text-primary-foreground"
                          : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                      }`}
                    >
                      {tipo}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Descrição</label>
                <textarea
                  placeholder="Conte mais sobre o evento..."
                  className={`${inputClass} min-h-[100px] resize-none`}
                />
              </div>
            </div>
          </section>

          {/* DATA E HORÁRIO */}
          <section className="mb-10">
            <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Data e Horário</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Data <span className="text-primary">*</span></label>
                <input type="date" className={inputClass} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Início <span className="text-primary">*</span></label>
                <input type="time" className={inputClass} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Término</label>
                <input type="time" className={inputClass} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Capacidade</label>
                <input type="number" placeholder="Ex: 200" className={inputClass} />
              </div>
            </div>
          </section>

          {/* LOCAL */}
          <section className="mb-10">
            <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Local</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Endereço <span className="text-primary">*</span></label>
                <input placeholder="Rua, número, bairro" className={inputClass} />
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Cidade <span className="text-primary">*</span></label>
                  <input placeholder="Ex: São Paulo" className={inputClass} />
                </div>
                <div className="w-28">
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Estado <span className="text-primary">*</span></label>
                  <Select>
                    <SelectTrigger className="rounded-lg border-border bg-secondary text-foreground h-[42px]">
                      <SelectValue placeholder="UF" />
                    </SelectTrigger>
                    <SelectContent>
                      {estados.map((uf) => (
                        <SelectItem key={uf} value={uf}>{uf}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </section>

          {/* ARTISTA */}
          <section className="mb-10">
            <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Artista</h2>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Banda / Artista</label>
              <Select>
                <SelectTrigger className="rounded-lg border-border bg-secondary text-foreground h-[42px]">
                  <SelectValue placeholder="Selecionar banda (opcional)" />
                </SelectTrigger>
                <SelectContent>
                  {bandas.map((b) => (
                    <SelectItem key={b.id} value={b.id}>{b.nome}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </section>

          {/* GÊNEROS MUSICAIS */}
          <section className="mb-10">
            <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Gêneros Musicais</h2>
            <div className="flex flex-wrap gap-2">
              {generos.map((g) => (
                <button
                  key={g}
                  onClick={() => toggleGenero(g)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    generosSelecionados.includes(g)
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </section>

          {/* INGRESSOS */}
          <section className="mb-10">
            <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Ingressos</h2>
            <div className="flex gap-3">
              <button
                onClick={() => setTipoIngresso("gratuito")}
                className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                  tipoIngresso === "gratuito"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                Gratuito
              </button>
              <button
                onClick={() => setTipoIngresso("pago")}
                className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                  tipoIngresso === "pago"
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                }`}
              >
                Pago
              </button>
            </div>

            {tipoIngresso === "pago" && (
              <div className="mt-4 grid grid-cols-2 gap-4 animate-slide-in">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Preço (R$)</label>
                  <input type="number" placeholder="Ex: 50" className={inputClass} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Link de compra</label>
                  <input placeholder="https://..." className={inputClass} />
                </div>
              </div>
            )}
          </section>

          {/* PATROCINADOR */}
          <section className="mb-12">
            <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-5">Patrocinador</h2>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nome do patrocinador</label>
              <input placeholder="Ex: Brahma, RedBull, Heineken" className={inputClass} />
            </div>
          </section>

          {/* SUBMIT */}
          <button className="w-full rounded-full bg-primary text-primary-foreground py-3 text-sm font-semibold hover:opacity-90 transition-opacity">
            Publicar evento
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicarEvento;
