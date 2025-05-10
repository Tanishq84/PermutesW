import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <section id="contact">
    <footer className="w-full pt-20 pb-10 z-10 py-40 text-amber-50 relative my-20">
      <div className="w-full left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full absolute h-full opacity-50 left-0 min-h-96"
        />
      </div>

      <div className="flex flex-col items-center text-amber-50">
        <h1 className="heading lg:max-w-[45vw] lg:text-7xl md:text-6xl text-center">
          Ready to Explore <span className="text-purple-400">the boundaries</span> of the unthinkable infinity ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center lg:text-2xl md:text-1xl">
          Witness the change!
        </p>
        <a href="mailto:tanishqsom19@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm p-10 md:font-normal font-light text-amber-50">
          Copyright © 2025 Tanishq Som
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