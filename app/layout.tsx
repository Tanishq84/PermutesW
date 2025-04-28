import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarBackground from "@/components/main/StarBackground";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Permutes",
  description: "A research-driven engineering company specializing in drone technology, AI innovation, robotics development, aerospace research, and scientific problem-solving. We blend creativity, design, and cutting-edge technology to deliver pioneering solutions in autonomous systems, fluid dynamics, space exploration, and machine learning. Explore how Permutes is shaping the future through interdisciplinary engineering and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        
        {children}
        <StarBackground />
      </body>
    </html>
  );
}
