"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "../ui/Pin";

const RecentProjects = () => {
  return (
    <section id="projects">
    <div className="py-40 text-amber-50 pb-20 pt-36 z-10 relative my-20">
      <h1 className="heading lg:text-7xl md:text-6xl sm:text-5xl text-4xl justify-center text-center">
        <span className="text-[#79f4de]">A small </span>selection of</h1>
        <h1 className="heading lg:text-6xl md:text-5xl sm:text-4xl text-3xl justify-center text-center">
        <span className="text-purple-400">recent </span>projects.
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-50 gap-y-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[50%]"
            key={item.id}
          >
            <PinContainer
              title="/permutes.in"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-full overflow-hidden h-[20vh] lg:h-[35vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 rounded-xl rotate-[5deg] w-full h-auto"
                />
              
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-base lg:font-normal font-light text-sm line-clamp-4"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-base md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default RecentProjects;