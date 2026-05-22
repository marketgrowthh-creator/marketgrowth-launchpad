import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Social } from "@/components/site/Social";
import { Packs } from "@/components/site/Packs";
import { Results } from "@/components/site/Results";
import { CtaFooter } from "@/components/site/CtaFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function App() {
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
