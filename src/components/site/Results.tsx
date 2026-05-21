import { SectionHeader } from "./Services";

const cases = [
  { quote: "Desde que trabajamos con MarketGrowth pasamos de 0 a 40 leads al mes en 3 semanas.", who: "E-commerce local" },
  { quote: "Duplicamos las reservas en menos de un mes gracias a Google Ads.", who: "Centro de estética" },
  { quote: "Nuestra presencia en Instagram pasó de 200 a 3.000 seguidores en 60 días.", who: "Marca de moda emergente" },
  { quote: "Ahora recibimos clientes todos los días sin depender del boca a boca.", who: "Negocio de servicios" },
];

export function Results() {
  return (
    <section id="resultados" className="py-32 px-6 bg-secondary/30">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Resultados" title="Casos de éxito" subtitle="Marcas reales que han transformado su crecimiento con nuestras estrategias." />
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {cases.map((c, i) => (
            <figure
              key={i}
              className="group relative rounded-2xl bg-card p-10 ring-1 ring-gold/30 hover:ring-gold transition-all duration-500 hover:-translate-y-1"
            >
              <svg className="h-8 w-8 text-gold mb-6 opacity-80" viewBox="0 0 32 32" fill="currentColor" aria-hidden>
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36 1 24.872 4.32 28 8.336 28c3.792 0 6.56-3.024 6.56-6.56 0-3.52-2.464-6.112-5.728-6.112-.624 0-1.456.112-1.664.224.624-3.952 4.384-8.64 8.144-10.992L9.352 4zm17.92 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.512 3.32 8.64 7.336 8.64 3.792 0 6.56-3.024 6.56-6.56 0-3.52-2.464-6.112-5.728-6.112-.624 0-1.456.112-1.664.224.624-3.952 4.384-8.64 8.144-10.992L27.272 4z" />
              </svg>
              <blockquote className="text-xl font-display leading-snug text-foreground">
                "{c.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span className="h-px w-8 bg-gold" />
                {c.who}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
