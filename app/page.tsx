import Grid from "@/components/main/Grid";
import Hero from "@/components/main/Hero";
import MediaContent from "@/components/main/MediaContent";
import RecentProjects from "@/components/main/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
// import Image from "next/image";
// import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="h-full w-full z-[900]">
      <div className="felx flex-col h-[850px] gap-20">
        <FloatingNav 
        navItems={navItems}/>
      <Hero />
      <Grid />
      <RecentProjects />
      <MediaContent />
      </div>

    </main>
  );
}
