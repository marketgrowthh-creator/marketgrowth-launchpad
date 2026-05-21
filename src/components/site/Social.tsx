import { SectionHeader } from "./Services";

const packs = [
  {
    name: "Pack Básico",
    price: "350€",
    features: ["5 posts", "15 stories", "Informe mensual"],
  },
  {
    name: "Pack Growth",
    price: "650€",
    featured: true,
    features: [
      "10 publicaciones",
      "20 stories",
      "5 reels editados",
      "Estrategia mensual",
      "Informe + llamada estratégica",
    ],
  },
];

export function Social() {
  return (
    <section id="redes" className="py-32 px-6 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Redes Sociales"
          title="Gestión que construye marca"
          subtitle="Una presencia coherente, profesional y pensada para crecer mes a mes."
        />
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {packs.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl bg-card p-10 ring-1 transition-all duration-500 hover:-translate-y-1 ${
                p.featured
                  ? "ring-gold shadow-[var(--shadow-luxe)]"
                  : "ring-border hover:ring-gold/50"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-10 btn-gold text-[10px] uppercase tracking-[0.3em] px-4 py-1.5 rounded-full">
                  Más elegido
                </span>
              )}
              <div className="flex items-baseline justify-between">
                <h3 className="text-2xl">{p.name}</h3>
                <div className="text-3xl text-gold font-display">{p.price}</div>
              </div>
              <div className="divider-gold my-6" />
              <ul className="space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
