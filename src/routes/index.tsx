import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Factory,
  Clock,
  Award,
  Wrench,
  MessageCircle,
  ArrowRight,
  MapPin,
  Phone,
  Menu,
  X,
  Check,
  FileText,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImg from "@/assets/hero-shutter.jpg";
import cortinaAmericanaImg from "@/assets/cortina-metalica-americana-h.webp";
import cortinaCiegaImg from "@/assets/cortina-metalica-galvanizada-ciega-h.webp";
import cortinaMicroperforadaImg from "@/assets/cortina-metalica-microperforada-h.webp";
import puertaEscapeImg from "@/assets/puerta de escape.jpg";
import waImg1 from "@/assets/WhatsApp Image 2026-07-0.jpeg";
import waImg2 from "@/assets/WhatsApp Image 2026-07-02 at 10.49.32 AM.jpeg";
import waImg3 from "@/assets/WhatsApp Image 2026-07-02 at 10.49.32 AMdasd.jpeg";
import waImg4 from "@/assets/WhatsApp Image 2026-07-02 at 10.49.32 AMfafas.jpeg";
import waImg5 from "@/assets/WhatsApp Image 2026-07-02 at 10.49.32 AMfasda.jpeg";
import waImg6 from "@/assets/WhatsApp Image 2026-07-02 at 10.49.33 AMafsaf.jpeg";
import waImg7 from "@/assets/WhatsApp Image 2026-07-02 at 12.58.43 PM.jpeg";
import waImg8 from "@/assets/WhatsApp Image 2026-07-02 at 12.58.43 PMas.jpeg";
import waImg9 from "@/assets/WhatsApp Image 2026-07-02 at 12.58.43 PMfdsf.jpeg";
import waImg10 from "@/assets/WhatsApp Image 2026-07-02 at 12.58.44 PMsdfas.jpeg";
import waImg11 from "@/assets/WhatsApp Image 2026-07-02 at 12.59.04 PMASD.jpeg";
import waVideo from "@/assets/WhatsApp Video 2026-07-02 at 12.58.43 PMfds.mp4";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Servimás Cortinas Metálicas",
          image: "",
          telephone: "+5491176030033",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Monteagudo 481",
            addressLocality: "CABA",
            postalCode: "C1437",
            addressCountry: "AR",
          },
          areaServed: ["CABA", "GBA", "Argentina"],
          description:
            "Fábrica propia de cortinas metálicas. Fabricación e instalación en 24hs. +14 años de trayectoria.",
        }),
      },
    ],
  }),
});

// Google Ads conversion: replace label when available from Google Ads.
const CONVERSION_ID = "AW-16678975996";
const CONVERSION_LABEL = "REEMPLAZAR_CON_LABEL_DE_GOOGLE_ADS";
const WA_NUMBER = "5491176030033";

function fireConversion() {
  const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof g === "function") {
    g("event", "conversion", {
      send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
    });
  }
}

function CtaBtn({
  children,
  className = "",
  variant = "primary",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-display uppercase tracking-wide text-sm md:text-base px-6 py-3.5 rounded-md transition-all duration-200 active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-primary text-white hover:brightness-110 shadow-industrial"
      : "border-2 border-ink text-ink hover:bg-ink hover:text-white";
  return (
    <a
      href="#contacto"
      className={`${base} ${styles} ${className}`}
    >
      <FileText className="h-5 w-5" strokeWidth={2.5} />
      {children}
    </a>
  );
}

function SectionTitle({
  eyebrow,
  children,
}: {
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-10 md:mb-14 text-center">
      {eyebrow && (
        <div className="mb-3 inline-flex items-center gap-2">
          <span className="h-0.5 w-8 bg-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {eyebrow}
          </span>
          <span className="h-0.5 w-8 bg-primary" />
        </div>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold uppercase text-ink leading-tight">
        {children}
      </h2>
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex h-11 w-11 items-center justify-center rounded-md bg-primary">
        <Factory className="h-6 w-6 text-white" strokeWidth={2.5} />
      </div>
      <div className="leading-tight">
        <div
          className={`font-display text-lg font-bold uppercase tracking-tight ${
            light ? "text-white" : "text-ink"
          }`}
        >
          Servimás
        </div>
        <div
          className={`text-[10px] uppercase tracking-[0.15em] ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          Cortinas Metálicas
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#servicios", label: "Servicios" },
    { href: "#proceso", label: "Cómo trabajamos" },
    { href: "#contacto", label: "Contacto" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#top"><Logo /></a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <CtaBtn>Pedí Presupuesto</CtaBtn>
        </div>
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menú"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-base font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
          <CtaBtn className="w-full">Pedí Presupuesto</CtaBtn>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Cortina metálica industrial iluminada"
          width={1600}
          height={1200}
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/40 px-4 py-1.5 mb-6">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Fabricamos e instalamos hoy
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase leading-[0.95]">
            Cortinas metálicas para tu local,{" "}
            <span className="text-primary">listas en 24 horas</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
            Somos fábrica propia. Sin intermediarios, sin esperas de semanas.
            +14 años protegiendo comercios en CABA, GBA y todo el país.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Fábrica Propia", "Entrega en 24hs", "+14 Años de Trayectoria"].map(
              (b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1.5 text-xs md:text-sm font-medium"
                >
                  <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                  {b}
                </span>
              )
            )}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <CtaBtn>Pedí tu Presupuesto</CtaBtn>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center gap-2 font-display uppercase tracking-wide text-sm md:text-base px-6 py-3.5 rounded-md border-2 border-white/30 text-white hover:bg-white hover:text-ink transition-all"
            >
              Ver Catálogo
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="h-2 diagonal-stripes" />
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: Factory,
      title: "Fábrica Propia",
      text: "Fabricamos nosotros mismos cada cortina. Control total de calidad, sin depender de terceros ni de stock ajeno.",
    },
    {
      icon: Clock,
      title: "Entrega en 24 Horas",
      text: "Al ser fábrica, no tenemos los tiempos de espera de un revendedor. Tu cortina lista en menos de un día.",
    },
    {
      icon: Award,
      title: "+14 Años de Trayectoria",
      text: "Más de una década resolviendo la seguridad de comercios en todo el país.",
    },
    {
      icon: Wrench,
      title: "Instalación Profesional",
      text: "Equipo propio de instalación, sin subcontratar terceros improvisados.",
    },
    {
      icon: MessageCircle,
      title: "Atención Directa",
      text: "Hablás directo con quien fabrica e instala, sin intermediarios ni vueltas.",
    },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle eyebrow="Nuestro diferencial">
          ¿Por Qué Elegir Servimás?
        </SectionTitle>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="group relative border-t-4 border-primary bg-muted/40 p-6 hover:bg-ink hover:text-white transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 group-hover:bg-primary transition-colors">
                <it.icon className="h-6 w-6 text-primary group-hover:text-white" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-lg font-bold uppercase mb-2">
                {it.title}
              </h3>
              <p className="text-sm leading-relaxed opacity-80">{it.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      title: "Cortinas Metálicas Comerciales",
      tag: "Nuestra especialidad",
      text: "Locales, negocios, oficinas y galerías comerciales. Cortinas ciegas, microperforadas o con puerta de escape, fabricadas a medida y listas en 24hs.",
      featured: true,
    },
    {
      title: "Cortinas Metálicas Residenciales",
      tag: "Residencial",
      text: "Para garages y entradas de casas. Terminaciones prolijas y opción de motorización.",
    },
    {
      title: "Cortinas Metálicas Industriales",
      tag: "Industrial",
      text: "Para galpones y depósitos que necesitan resistencia y grandes dimensiones. Fabricación a medida.",
    },
  ];
  return (
    <section id="servicios" className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle eyebrow="Servicios">
          Soluciones para Cada Tipo de Negocio
        </SectionTitle>
        <div className="grid gap-6 lg:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className={`relative flex flex-col p-8 rounded-md ${
                c.featured
                  ? "bg-ink text-white lg:scale-105 shadow-industrial lg:col-span-1"
                  : "bg-white border border-border"
              }`}
            >
              {c.featured && (
                <div className="absolute -top-3 left-8 bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
                  Destacado
                </div>
              )}
              <span
                className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 ${
                  c.featured ? "text-primary" : "text-primary"
                }`}
              >
                {c.tag}
              </span>
              <h3 className="font-display text-2xl font-bold uppercase mb-4 leading-tight">
                {c.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 flex-1 ${
                  c.featured ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {c.text}
              </p>
              <CtaBtn variant={c.featured ? "primary" : "outline"}>
                Solicitar Presupuesto
              </CtaBtn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Nos escribís", text: "Contanos las medidas y el tipo de local por WhatsApp." },
    { n: "02", title: "Cotizamos al toque", text: "Te pasamos precio y tiempo de entrega, sin vueltas." },
    { n: "03", title: "Fabricamos", text: "Al ser fábrica propia, no dependemos de stock de terceros." },
    { n: "04", title: "Instalamos", text: "Nuestro equipo la instala y la deja funcionando el mismo día." },
  ];
  return (
    <section id="proceso" className="relative bg-ink text-white py-20 md:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 diagonal-stripes" />
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-14 text-center">
          <div className="mb-3 inline-flex items-center gap-2">
            <span className="h-0.5 w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Cómo trabajamos
            </span>
            <span className="h-0.5 w-8 bg-primary" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase leading-tight">
            De la Medición a la Instalación{" "}
            <span className="text-primary">en 24 Horas</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-display text-5xl font-bold text-primary">
                  {s.n}
                </span>
                {i < steps.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-white/20" />
                )}
              </div>
              <h3 className="font-display text-xl font-bold uppercase mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Catalog() {
  const products = [
    {
      title: "Cortina Ciega",
      text: "Máxima seguridad, ideal para locales que buscan opacidad total.",
      img: cortinaCiegaImg,
    },
    {
      title: "Cortina Microperforada",
      text: "Seguridad con ventilación y algo de visibilidad. Ideal para locales con vidriera.",
      img: cortinaMicroperforadaImg,
    },
    {
      title: "Cortina con Puerta de Escape",
      text: "Cumple normativa de salida de emergencia para comercios.",
      img: puertaEscapeImg,
    },
    {
      title: "Cortina Americana",
      text: "Diseño clásico que permite máxima visibilidad y ventilación, ideal para frentes de locales.",
      img: cortinaAmericanaImg,
    },
  ];
  return (
    <section id="catalogo" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle eyebrow="Catálogo">Nuestras Cortinas Metálicas</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div
              key={p.title}
              className="group flex flex-col bg-white border border-border overflow-hidden hover:border-primary transition-colors"
            >
              <div className="relative aspect-[4/3] corrugated overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-bold uppercase mb-2 text-ink">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.text}</p>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  Consultar precio
                </div>
                <CtaBtn variant="outline" className="w-full !py-2.5 !text-sm">
                  Consultar Precio
                </CtaBtn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const mediaItems = [
    { src: waImg1, alt: "Trabajo realizado 1", type: "image" },
    { src: waImg2, alt: "Trabajo realizado 2", type: "image" },
    { src: waImg3, alt: "Trabajo realizado 3", type: "image" },
    { src: waImg4, alt: "Trabajo realizado 4", type: "image" },
    { src: waImg5, alt: "Trabajo realizado 5", type: "image" },
    { src: waImg6, alt: "Trabajo realizado 6", type: "image" },
    { src: waImg7, alt: "Trabajo realizado 7", type: "image" },
    { src: waImg8, alt: "Trabajo realizado 8", type: "image" },
    { src: waImg9, alt: "Trabajo realizado 9", type: "image" },
    { src: waImg10, alt: "Trabajo realizado 10", type: "image" },
    { src: waImg11, alt: "Trabajo realizado 11", type: "image" },
    { src: waVideo, alt: "Video de trabajo realizado", type: "video" },
  ];

  return (
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle eyebrow="Galería">Trabajos Realizados</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mediaItems.map((media, i) => (
            <div
              key={i}
              className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group shadow-sm"
            >
              {media.type === "video" ? (
                <video 
                  src={media.src} 
                  muted 
                  autoPlay 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              ) : (
                <img 
                  src={media.src} 
                  alt={media.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              )}
              <div className="absolute inset-0 bg-ink/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { n: "+14", label: "Años en el Mercado" },
    { n: "24hs", label: "Tiempo de Entrega" },
    { n: "100%", label: "Fábrica Propia" },
  ];
  return (
    <section className="relative bg-primary text-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-6xl md:text-7xl font-bold leading-none">
                {s.n}
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-[0.2em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  // PLACEHOLDER: reemplazar con reseñas reales de Google Maps.
  const items = [
    {
      name: "Martín G.",
      biz: "Kiosco, Villa Crespo",
      text: "Pedí presupuesto un martes y el miércoles ya tenía la cortina instalada. Muy prolijos.",
    },
    {
      name: "Laura P.",
      biz: "Farmacia, Almagro",
      text: "Necesitaba una cortina con puerta de escape urgente por habilitación. Cumplieron sin problemas.",
    },
    {
      name: "Ricardo T.",
      biz: "Depósito, San Justo",
      text: "Cortina grande para galpón, fabricada a medida. Buen trabajo y precio razonable.",
    },
  ];
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionTitle eyebrow="Testimonios">
          Lo que Dicen Nuestros Clientes
        </SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((t) => (
            <div
              key={t.name}
              className="relative bg-muted/40 border-l-4 border-primary p-6"
            >
              <div className="font-display text-5xl text-primary leading-none mb-2">
                “
              </div>
              <p className="text-sm text-ink leading-relaxed mb-6">{t.text}</p>
              <div className="border-t border-border pt-4">
                <div className="font-display text-base font-bold uppercase text-ink">
                  {t.name}
                </div>
                <div className="text-xs text-muted-foreground">{t.biz}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground uppercase tracking-widest">
          Testimonios de ejemplo — reemplazar con reseñas reales de Google
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "¿Cuánto tardan en entregar una cortina metálica?",
      a: "Al ser fábrica propia, entregamos en 24 horas o menos en la mayoría de los casos, dependiendo de las medidas y el tipo de cortina.",
    },
    {
      q: "¿Hacen instalación además de la fabricación?",
      a: "Sí, contamos con equipo propio de instalación. Fabricamos e instalamos, todo con el mismo equipo.",
    },
    {
      q: "¿Qué zonas cubren?",
      a: "Trabajamos de forma directa en CABA y GBA, y realizamos trabajos para todo el país. Contactanos para cotizar tu proyecto.",
    },
    {
      q: "¿Hacen cortinas para locales con puerta de escape?",
      a: "Sí, fabricamos cortinas con puerta de escape homologada para cumplir con la normativa de salida de emergencia en comercios.",
    },
    {
      q: "¿Puedo automatizar mi cortina actual?",
      a: "Sí, podemos evaluar tu cortina existente e instalar un motor para automatizarla.",
    },
    {
      q: "¿Cómo pido un presupuesto?",
      a: "Por WhatsApp es lo más rápido — contanos las medidas aproximadas y el tipo de local, y te respondemos con precio y tiempo de entrega.",
    },
  ];
  return (
    <section className="bg-muted/40 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionTitle eyebrow="FAQ">Preguntas Frecuentes</SectionTitle>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border bg-white rounded-md px-5"
            >
              <AccordionTrigger className="font-display text-left uppercase text-base md:text-lg hover:no-underline text-ink">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Contact() {
  const navigate = useNavigate({ from: "/" });

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && typeof e.data === 'string' && e.data.includes('Tally.FormSubmitted')) {
        fireConversion();
        navigate({ to: "/solicitud-completada" });
      }
    };
    window.addEventListener('message', handleMessage);
    
    // Inject Tally script
    const w = "https://tally.so/widgets/embed.js";
    const v = function() {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e: any){e.src=e.dataset.tallySrc}));
      }
    };
    if (typeof (window as any).Tally !== "undefined") {
      v();
    } else if (document.querySelector('script[src="' + w + '"]') == null) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      document.body.appendChild(s);
    }
    
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <section id="contacto" className="bg-muted/20 py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionTitle eyebrow="Contacto">Pedí tu Presupuesto</SectionTitle>
        <p className="-mt-6 mb-10 text-center text-muted-foreground max-w-xl mx-auto">
          Completá el formulario con los detalles y te enviaremos una cotización sin cargo lo antes posible.
        </p>
        
        {/* Formulario Principal */}
        <div className="bg-white rounded-xl shadow-industrial border border-border p-2 md:p-6 mb-12 relative z-10">
          <iframe
            data-tally-src="https://tally.so/embed/wAxL6N?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="700"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="¡Pedí tu presupuesto ahora!"
            className="border-none w-full"
          />
        </div>

        {/* Info adicional y mapa */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-ink text-white p-6 md:p-8 rounded-xl flex flex-col justify-center">
            <h3 className="font-display text-lg font-bold uppercase mb-4 text-primary">
              Atención Directa
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href={`tel:+${WA_NUMBER}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  +54 9 11 7603-0033
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-sm text-white/80">
                  Monteagudo 481, CABA (C1437)
                </div>
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden rounded-xl border border-border h-48 sm:h-auto">
            <iframe
              title="Servimás - Monteagudo 481, CABA"
              src="https://www.google.com/maps?q=Monteagudo+481,+C1437+CABA,+Argentina&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              style={{ border: 0, minHeight: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-white/80 pt-14 pb-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3 mb-10">
          <div>
            <Logo light />
            <p className="mt-4 text-sm text-white/60 max-w-sm">
              Fábrica propia de cortinas metálicas. Fabricación e instalación en 24hs. +14 años en el mercado. CABA, GBA y todo el país.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Monteagudo 481, C1437, CABA</li>
              <li>
                <a href={`tel:+${WA_NUMBER}`} className="hover:text-primary">
                  +54 9 11 7603-0033
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-primary mb-3">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#servicios" className="hover:text-primary">Servicios</a></li>
              <li><a href="#catalogo" className="hover:text-primary">Catálogo</a></li>
              <li><a href="#proceso" className="hover:text-primary">Cómo trabajamos</a></li>
              <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <div>© 2026 Servimás Cortinas Metálicas. Todos los derechos reservados.</div>
          <div>Fábrica propia · CABA, GBA y todo el país</div>
        </div>
      </div>
    </footer>
  );
}

function FloatingWA() {
  return (
    <a
      href="#contacto"
      className="fixed bottom-5 right-5 z-50 group flex items-center gap-2 rounded-full bg-whatsapp text-white shadow-industrial hover:brightness-110 transition-all pl-4 pr-5 py-3.5"
      aria-label="Pedí tu presupuesto"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
      <span className="hidden sm:inline font-display uppercase text-sm tracking-wide">
        Presupuesto ya
      </span>
    </a>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Services />
        <Process />
        <WhyUs />
        <Gallery />
        <Stats />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
