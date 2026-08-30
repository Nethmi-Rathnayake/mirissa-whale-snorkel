import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Packages from "./components/Packages";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Packages />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
