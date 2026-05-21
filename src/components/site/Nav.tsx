import logo from "@/assets/logo-marketgrowth.png";

export function Nav() {
  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#redes", label: "Redes" },
    { href: "#packs", label: "Packs" },
    { href: "#resultados", label: "Resultados" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="MarketGrowth" className="h-9 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contacto" className="hidden md:inline-flex items-center text-sm font-medium border-b border-gold pb-0.5 hover:text-gold transition-colors">
          Hablar con nosotros
        </a>
      </div>
    </header>
  );
}
