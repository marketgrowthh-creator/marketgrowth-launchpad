import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Social } from "@/components/site/Social";
import { Packs } from "@/components/site/Packs";
import { Results } from "@/components/site/Results";
import { CtaFooter } from "@/components/site/CtaFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "MarketGrowth · Agencia de Marketing Digital Premium" },
      {
        name: "description",
        content:
          "Hacemos crecer tu negocio con estrategias digitales que convierten: webs, Google Ads, SEO, redes sociales y fotografía profesional.",
      },
      { property: "og:title", content: "MarketGrowth · Marketing Digital que Convierte" },
      { property: "og:description", content: "Agencia premium de marketing digital. Webs, Google Ads, SEO y redes sociales." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Social />
      <Packs />
      <Results />
      <CtaFooter />
      <WhatsAppButton />
    </main>
  );
}
