"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  const words = [
    {
      text: "Permutes,",
    },
    {
      text: "where",
    },
    {
      text: "ideas",
    },
    {
      text: "evolve",
    },
    {
      text: "into",
    },
    {
      text: "Excellence.",
      className: "text-purple-400 dark:text-purple-400",
    },
  ];
  return (
    <section id="contact">
    <footer className="w-full pt-1 pb-1 z-10 py-4 text-amber-50 relative my-2">
      <div className="w-full left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full absolute h-full opacity-50 left-0 min-h-96"
        />
      </div>

      <div className="flex flex-col items-center text-amber-50">
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
      
      <div className="h-[40rem] z-10 flex flex-col justify-center  items-center px-4">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Innovating Today for a Better Tomorrow.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact Us
        </button>
      </div>
    </div>
    </div>
      </div>
      <div className="flex mt-1 md:flex-row z-10 flex-col justify-between items-center">
        <p className="md:text-base text-sm p-10 md:font-normal font-light text-amber-50">
          Copyright © 2025 <a href="https://tanishqsom.vercel.app/" target="_blank" className="text-[#79f4de]">Tanishq Som</a>
        </p>

        <div className="flex items-center md:gap-3 gap-6 p-10">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}><img src={info.img} alt="icons" width={20} height={20} /></a>
            </div>
          ))}
        </div>
      </div>
    </footer>
    </section>
  );
};

export default Footer;