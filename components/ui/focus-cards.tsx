"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type CardType = {
  title: string;
  src: string;
  type: string;
};

function extractYTId(url: string): string {
  const regex = /(?:\/shorts\/|v=|\/embed\/|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regex);
  return match?.[1] || "";
}

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (card.type === "reel") {
        if (
          !document.querySelector('script[src="https://www.instagram.com/embed.js"]')
        ) {
          const script = document.createElement("script");
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          document.body.appendChild(script);
        } else {
          if ((window as any).instgrm?.Embeds?.process) {
            (window as any).instgrm.Embeds.process();
          }
        }
      }
    }, [card]);

    return (
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative overflow-hidden bg-white dark:bg-neutral-900 lg:aspect-[9/17] sm:aspect-[10/16] aspect-[10/17] md:aspect-[10/16] w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        {card.type === "reel" && (
          <blockquote
            className="instagram-media absolute inset-0 w-full h-full"
            data-instgrm-permalink={card.src}
            data-instgrm-version="14"
            style={{ margin: 0, padding: 0 }}
          ></blockquote>
        )}

        {card.type === "short" && (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${extractYTId(card.src)}?autoplay=0&modestbranding=1`}
            title={card.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}

        {card.type === "custom" && (
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={card.src}
            controls
          />
        )}

        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300 pointer-events-none",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={`${card.title}-${index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
