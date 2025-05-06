import React from "react";
import HeroContent from "../sub/HeroContent";
import StarsCanvas from "./StarBackground"; // Adjust path if necessary

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-420px] h-full w-full left-0 z-[0] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>

      {/* Star background layer */}
      <div className="absolute inset-0 z-[1]">
        <StarsCanvas />
      </div>

      {/* Hero Content */}
      <div className="relative z-[2]">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
