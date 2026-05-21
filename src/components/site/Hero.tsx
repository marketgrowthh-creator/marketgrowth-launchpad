import logo from "@/assets/logo-marketgrowth.png";

export function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-gold-soft/30 blur-3xl" />
      </div>
      <div className="mx-auto max-w-5xl px-6 text-center">
        <img
          src={logo}
          alt="MarketGrowth · Expansión Digital"
          className="animate-fade-in mx-auto mb-10 h-40 md:h-56 w-auto object-contain"
        />
        <p className="animate-fade-in text-xs uppercase tracking-[0.4em] text-muted-foreground mb-8">
          Agencia de Marketing Digital
        </p>
        <h1 className="sr-only">MarketGrowth</h1>
        <div className="mx-auto mt-10 max-w-2xl">
          <div className="divider-gold mb-8 mx-auto w-40" />
          <p className="animate-fade-up text-lg md:text-xl text-muted-foreground leading-relaxed" style={{ animationDelay: "120ms" }}>
            Hacemos crecer tu negocio con estrategias digitales que <em className="text-foreground not-italic">convierten</em>.
          </p>
        </div>
        <div className="animate-fade-up mt-12 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: "240ms" }}>
          <a
            href="#contacto"
            className="btn-gold inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-medium tracking-wide uppercase hover:[background-position:right_center] hover:-translate-y-0.5 transition-all duration-500"
          >
            Quiero crecer ahora
          </a>
          <a
            href="#servicios"
            className="text-sm uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
          >
            Ver servicios →
          </a>
        </div>
      </div>
    </section>
  );
}
