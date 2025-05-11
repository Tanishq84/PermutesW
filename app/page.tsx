"use client";

import Grid from "@/components/main/Grid";
import Hero from "@/components/main/Hero";
import MediaContent from "@/components/main/MediaContent";
import RecentProjects from "@/components/main/RecentProjects";
import Teams from "@/components/main/Teams";
import Footer from "@/components/main/Footer";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/main/StarBackground"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <StarsCanvas />

      <main className="relative z-10 w-full">
        <div className="flex flex-col min-h-screen gap-20">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <MediaContent />
          <Teams />
          <Footer />
        </div>
      </main>
    </>
  );
}