import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import ToggleTheme from "@/components/toggle-theme";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center" id="home">
      <div className="relative w-full">
        <FloatingNav navItems={navItems}>
          <ToggleTheme />
        </FloatingNav>
      </div>
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
