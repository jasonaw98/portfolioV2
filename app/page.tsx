import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import ToggleTheme from "@/components/toggle-theme";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import Homesvg from "@/public/icons/home";
import Projectsvg from "@/public/icons/project";
import Contactsvg from "@/public/icons/contact";
import Resumesvg from "@/public/icons/resume";

const navItems = [
  {
    name: "Home",
    link: "#home",
    icon: <Homesvg/>
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <Projectsvg/>
  },
  {
    name: "Contact",
    link: "#footer",
    icon: <Contactsvg/>
  },
  {
    name: "Resume",
    link: "https://docs.google.com/document/d/1oEXGzW--eptZe6lKES0xDf436Kd9_7Jl7_Y_fiyW21Q/edit?usp=sharing",
    target: "blank",
    icon: <Resumesvg/>
  },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center w-full">
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
