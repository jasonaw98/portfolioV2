import ToggleTheme from "@/components/toggle-theme";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="relative w-full">
        <FloatingNav navItems={navItems}>
          <ToggleTheme />
        </FloatingNav>
      </div>
    </main>
  );
}
