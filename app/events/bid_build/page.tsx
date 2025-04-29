
import BidBuild from "@/components/main/BidBuild";
import Footer from "@/components/main/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
export default function Home() {
  return (
    <main className="h-full w-full z-[900]">
      <div className="felx flex-col h-[850px] gap-20">
        <FloatingNav 
        navItems={navItems}/>
      <BidBuild />
      <Footer />
      </div>
    </main>
  );
}
