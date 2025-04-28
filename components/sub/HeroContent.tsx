"use client";

import React from "react";
// import { motion } from "framer-motion";
// import {
//   slideInFromLeft,
//   slideInFromRight,
//   slideInFromTop,
// } from "@/utils/motion";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import MagicButton from "../ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const HeroContent = () => {
  return (
    <div className="pb-20 pt-36 z-10 relative my-20">
        <div className="flex justify-center">
            <div className="max-w-[89vw] justify-center">
                <h2 className="autoBlur uppercase tracking-wider text-xs justify-center items-center text-center text-blue-100">
                    Research & Development
                </h2>

                <TextGenerateEffect className="autoBlur text-center text-[40px] md:text-5xl lg:text-6xl lg:max-w-200"
                words="Permutes: Crafting Innovation Beyond Limits"/>
                <p className="text-center text-blue-100 md:tracking-wider mb4 text-sm md:text-lg lg:text-2xl">
                "Where Innovation, Expertise, and Exploration Converge"

                </p>

                <a href="#about" className="autoBlur text-center">
                    <MagicButton
                    title="Learn About Permutes" 
                    icon={<FaLocationArrow />}
                    position="right"/>
                </a>
            </div>
        </div>

    </div>
  );
};

export default HeroContent;