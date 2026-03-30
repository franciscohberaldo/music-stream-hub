import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-2xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-foreground font-[var(--font-heading)]">Publicar evento</h1>
        <p className="text-muted-foreground text-sm mt-1 mb-8">Adicione um show ao guia cultural do Giggo</p>

        {/* INFORMAÇÕES BÁSICAS */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">Informações Básicas</h2>

          <div className="space-y-4">
            <div>
              <Label className="text-foreground">Nome do evento <span className="text-primary">*</span></Label>
              <Input placeholder="Ex: Noite de Jazz no Bar do João" className="mt-1.5 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
            </div>

            <div>
              <Label className="text-foreground">Tipo de evento <span className="text-primary">*</span></Label>
              <div className="flex flex-wrap gap-2 mt-1.5">
                {tiposEvento.map((tipo) => (
                  <button
                    key={tipo}
                    onClick={() => setTipoEvento(tipo)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      tipoEvento === tipo
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tipo}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-foreground">Descrição</Label>
              <Textarea placeholder="Conte mais sobre o evento..." className="mt-1.5 bg-secondary border-border text-foreground placeholder:text-muted-foreground min-h-[80px]" />
            </div>
          </div>
        </section>

        {/* DATA E HORÁRIO */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">Data e Horário</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label className="text-foreground">Data <span className="text-primary">*</span></Label>
              <Input type="date" className="mt-1.5 bg-secondary border-border text-foreground" />
            </div>
            <div>
              <Label className="text-foreground">Início <span className="text-primary">*</span></Label>
              <Input type="time" className="mt-1.5 bg-secondary border-border text-foreground" />
            </div>
            <div>
              <Label className="text-foreground">Término</Label>
              <Input type="time" className="mt-1.5 bg-secondary border-border text-foreground" />
            </div>
            <div>
              <Label className="text-foreground">Capacidade</Label>
              <Input type="number" placeholder="Ex: 200" className="mt-1.5 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
            </div>
          </div>
        </section>

        {/* LOCAL */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">Local</h2>
          <div className="space-y-4">
            <div>
              <Label className="text-foreground">Endereço <span className="text-primary">*</span></Label>
              <Input placeholder="Rua, número, bairro" className="mt-1.5 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
            </div>
            <div className="grid grid-cols-[1fr_auto] gap-4">
              <div>
                <Label className="text-foreground">Cidade <span className="text-primary">*</span></Label>
                <Input placeholder="Ex: São Paulo" className="mt-1.5 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
              </div>
              <div className="w-28">
                <Label className="text-foreground">Estado <span className="text-primary">*</span></Label>
                <Select>
                  <SelectTrigger className="mt-1.5 bg-secondary border-border text-foreground">
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
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">Artista</h2>
          <div>
            <Label className="text-foreground">Banda / Artista</Label>
            <Select>
              <SelectTrigger className="mt-1.5 bg-secondary border-border text-foreground">
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
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">Gêneros Musicais</h2>
          <div className="flex flex-wrap gap-2">
            {generos.map((g) => (
              <button
                key={g}
                onClick={() => toggleGenero(g)}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  generosSelecionados.includes(g)
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </section>

        {/* INGRESSOS */}
        <section className="mb-8">
          <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">Ingressos</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTipoIngresso("gratuito")}
              className={`py-2.5 rounded-md text-sm font-semibold transition-colors ${
                tipoIngresso === "gratuito"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              Gratuito
            </button>
            <button
              onClick={() => setTipoIngresso("pago")}
              className={`py-2.5 rounded-md text-sm font-semibold transition-colors ${
                tipoIngresso === "pago"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              Pago
            </button>
          </div>

          {tipoIngresso === "pago" && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <Label className="text-foreground">Preço (R$)</Label>
                <Input type="number" placeholder="Ex: 50" className="mt-1.5 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
              </div>
              <div>
                <Label className="text-foreground">Link de compra</Label>
                <Input placeholder="https://..." className="mt-1.5 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
              </div>
            </div>
          )}
        </section>

        {/* PATROCINADOR */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">Patrocinador</h2>
          <div>
            <Label className="text-foreground">Nome do patrocinador</Label>
            <Input placeholder="Ex: Brahma, RedBull, Heineken" className="mt-1.5 bg-secondary border-border text-foreground placeholder:text-muted-foreground" />
          </div>
        </section>

        {/* SUBMIT */}
        <Button className="w-full h-12 text-base font-semibold">
          Publicar evento
        </Button>
      </main>
    </div>
  );
};

export default PublicarEvento;
