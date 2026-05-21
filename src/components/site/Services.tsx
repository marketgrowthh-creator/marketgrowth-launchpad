const services = [
  {
    title: "Diseño de páginas web",
    desc: "Webs rápidas, elegantes y optimizadas para convertir visitas en clientes.",
    items: [
      { label: "Lanzamiento", price: "500€" },
      { label: "Mantenimiento y soporte", price: "20€/mes" },
    ],
  },
  {
    title: "Fotografía profesional",
    desc: "Sesión completa para potenciar la imagen de tu marca.",
    items: [
      { label: "Sección de fotos profesional", price: "200€" },
    ],
  },
  {
    title: "Google Ads",
    desc: "Atrae clientes cualificados desde el primer día con campañas optimizadas.",
    items: [
      { label: "Setup inicial", price: "350€" },
      { label: "Gestión mensual (desde el 2º mes)", price: "200€" },
    ],
  },
  {
    title: "Optimización SEO",
    desc: "Posiciónate en Google de forma orgánica y sostenible.",
    items: [{ label: "Optimización completa", price: "200€" }],
  },
  {
    title: "Sistema de reservas",
    desc: "Integramos un sistema de reservas online en tu web sin complicaciones.",
    items: [{ label: "Implementación", price: "150€" }],
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Servicios" title="Todo lo que tu negocio necesita" subtitle="Soluciones independientes o combinadas, diseñadas para hacer crecer tu marca con elegancia." />

        <div className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden ring-1 ring-border">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-card p-10 transition-all duration-500 hover:bg-secondary/40"
            >
              <div className="absolute top-10 right-10 text-xs tracking-[0.3em] text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="text-2xl pr-10">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="divider-gold my-6 w-16" />
              <ul className="space-y-2">
                {s.items.map((it) => (
                  <li key={it.label} className="flex items-baseline justify-between gap-4 text-sm">
                    <span className="text-muted-foreground">{it.label}</span>
                    {it.price && <span className="font-medium text-gold">{it.price}</span>}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <p className="text-xs uppercase tracking-[0.4em] text-gold mb-6">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl">{title}</h2>
      {subtitle && <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}
