import { whatsappLink } from "@/components/WhatsAppButton";

export function CtaFooter() {
  return (
    <section id="contacto" className="relative py-40 px-6 overflow-hidden bg-foreground text-background">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, oklch(0.76 0.13 84 / 0.4), transparent 60%)" }} />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-gold mb-8">Empecemos</p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
          Tu negocio puede ser el<br />
          <span className="text-gold">siguiente caso de éxito</span>
        </h2>
        <p className="mt-8 text-lg text-background/70 max-w-xl mx-auto">
          Cuéntanos dónde estás y dónde quieres llegar. Te respondemos hoy mismo.
        </p>
        <div className="mt-12">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 rounded-full px-10 py-5 text-sm font-medium uppercase tracking-[0.2em] hover:[background-position:right_center] hover:-translate-y-1 transition-all duration-500"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.413c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z"/>
            </svg>
            Hablar por WhatsApp ahora
          </a>
        </div>
      </div>
      <footer className="relative mt-32 pt-10 border-t border-background/10 text-center text-xs text-background/40 tracking-wider">
        © {new Date().getFullYear()} MarketGrowth · Hecho con elegancia
      </footer>
    </section>
  );
}
