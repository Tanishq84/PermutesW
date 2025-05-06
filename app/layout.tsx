import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Permutes: Crafting Innovation Beyond Limits",
  description:
    "A research-driven engineering company specializing in drone technology, AI innovation, robotics development, aerospace research, and scientific problem-solving. We blend creativity, design, and cutting-edge technology to deliver pioneering solutions in autonomous systems, fluid dynamics, space exploration, and machine learning. Explore how Permutes is shaping the future through interdisciplinary engineering and innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider signInUrl="/login" signUpUrl="/signup" publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          {children}
          {/* StarBackground must only be rendered in client components */}
        </body>
      </html>
    </ClerkProvider>
  );
}
