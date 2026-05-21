import { SectionHeader } from "./Services";

export function Packs() {
  return (
    <section id="packs" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Packs Completos"
          title="Soluciones integrales"
          subtitle="Combinaciones pensadas para maximizar resultados con un único partner."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <article className="rounded-2xl p-10 lg:p-12 bg-card ring-1 ring-border hover:ring-gold/50 transition-all duration-500">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Captación</p>
            <h3 className="mt-3 text-3xl">Pack Captación de Clientes</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Llena tu agenda con clientes nuevos cada semana combinando Google Ads y redes sociales.
            </p>
            <div className="divider-gold my-8" />
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between"><span>Google Ads</span><span className="text-muted-foreground">incluido</span></li>
              <li className="flex justify-between"><span>Gestión de redes sociales</span><span className="text-muted-foreground">Básico o Growth</span></li>
            </ul>
            <div className="mt-10 flex items-baseline gap-3">
              <span className="text-4xl font-display text-gold">700€ – 1.000€</span>
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">/mes</span>
            </div>
          </article>

          <article className="relative rounded-2xl p-10 lg:p-12 bg-foreground text-background overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at 70% 20%, oklch(0.76 0.13 84 / 0.6), transparent 60%)" }} />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Presencia Digital</p>
              <h3 className="mt-3 text-3xl">Pack Presencia Digital</h3>
              <p className="mt-4 text-sm text-background/70">
                Construye una imagen sólida y profesional con una web premium, SEO y fotografía propia.
              </p>
              <div className="my-8 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between"><span>Diseño web</span><span className="text-background/60">incluido</span></li>
                <li className="flex justify-between"><span>SEO / Optimización de Google</span><span className="text-background/60">incluido</span></li>
                <li className="flex justify-between"><span>Fotografía profesional</span><span className="text-background/60">incluido</span></li>
              </ul>
              <div className="mt-10 flex items-baseline gap-4">
                <span className="text-4xl font-display text-gold">1.050€</span>
                <span className="text-sm text-background/50 line-through">1.140€</span>
                <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-gold border border-gold/40 rounded-full px-3 py-1">Descuento</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
