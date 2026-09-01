import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import TrustBadges from "./components/TrustBadges";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        <Packages />
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <TrustBadges />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
