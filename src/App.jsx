import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Services from "./components/Services";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="bg-charcoal min-h-screen">
      <main className="container mx-auto px-4">
        <Hero />
        <TechStack />
        <Services />
        <CTA />
      </main>
    </div>
  )
}