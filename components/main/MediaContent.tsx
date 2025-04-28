"use client";
import React from "react";
import MagicButton from "../ui/MagicButton";
import { FaYoutube } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { medias } from "@/data";

const MediaContent = () => {
  return (
    <section id="team">
      <div className="py-40 text-amber-50 pb-20 pt-36 z-10 relative my-20 w-full">
        <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl justify-center text-center">
          <span className="text-[#79f4de]">Some</span> inside scoop!{"\n "}
        </h1>
        <h2 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl justify-center text-center">
          A glimpse of <span className="text-purple-400">our </span>team!
        </h2>

        {/* MAIN CONTAINER */}
        <div className="flex flex-col items-center justify-center w-full px-4 mt-[100px]">
          {/* CARD */}
          {medias.map((item) => (
          <CardContainer className="inter-var" key={item.id}>
            <CardBody className="bg-black/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full rounded-xl p-10 border h-auto flex flex-col md:flex-row gap-10">
              
              {/* VIDEO SECTION */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <CardItem
                  translateZ={25}
                  className="text-2xl font-bold text-neutral-100 mb-2"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ={30}
                  className="text-neutral-300 text-sm max-w-md mb-4 line-clamp-2"
                >
                  {item.des}
                </CardItem>
                <CardItem translateZ={50} className="w-full">
                  <iframe
                    width="90%"
                    height="250"
                    src={item.link}
                    className="rounded-xl shadow-lg"
                    title="YouTube video player"
                    allowFullScreen
                  />
                </CardItem>
                <div className="flex justify-start items-center mt-5">
                  <CardItem
                    translateZ={10}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                  >
                    {item.user}
                  </CardItem>
                </div>
              </div>

              {/* INFO SECTION */}
              <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 lg:pl-30 md:pl-10">
                <CardItem as="h1" translateX={10} translateZ={15} className="text-amber-50 text-3xl font-bold mb-4">
                  {item.heading}
                </CardItem>
                <CardItem as="p" translateX={10} translateZ={15} className="text-amber-50 mb-6 max-w-[500px]">
                  <span className="text-[#79f4de]">{item.user}</span>, {item.adm_des}
                </CardItem>
                <CardItem translateX={10} translateZ={15}>
                    <a href={item.link}>
                        <MagicButton title="Visit Video" icon={<FaYoutube />} position="left" />
                    </a>
                </CardItem>
              </div>

            </CardBody>
          </CardContainer>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MediaContent;
