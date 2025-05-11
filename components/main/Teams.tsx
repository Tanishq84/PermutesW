import React from 'react';
import { FaGear, FaLaptop } from 'react-icons/fa6';
import TeamsCarousel from '../sub/TeamsCarousel';

const Teams = () => {
  return (
    <section id="teams" className="flex flex-col items-center relative text-white">
      <div className="py-4 pb-2 pt-36 z-10 relative my-2 w-full flex flex-col items-center">
        <h1 className="heading lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-center mb-5">
          <span className="text-[#79f4de]">Our </span><span className="text-purple-400">Team</span>
        </h1>

        
        <TeamsCarousel />
        <div className="relative w-full max-w-7xl mt-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-center lg:h-[80vh] space-y-10 lg:space-y-0 lg:space-x-10">

          {/* Left Box */}
          <div className="flex flex-col items-start max-w-[300px] p-5 bg-opacity-20 rounded-lg shadow-lg">
            <h1 className="text-[#79f4de] text-3xl flex items-center gap-2">
              Research <FaLaptop />
            </h1>
            <p className="mt-4 text-sm text-amber-50">
            Our research focuses on solving complex problems in robotics, astrophysics, and engineering. From conceptualizing groundbreaking ideas to testing their feasibility, we aim to contribute meaningful advancements to the scientific community.
            </p>
          </div>

          {/* Center Image */}
          <div className="relative w-full lg:w-[50%] flex justify-center items-center">
            <img 
              className="w-[70%] lg:w-[80%] opacity-100 object-contain"
              src="./Logo_Permutes.png"
              alt="Brain" 
            />
          </div>

          {/* Right Box */}
          <div className="flex flex-col items-start max-w-[300px] p-5 bg-opacity-20 rounded-lg shadow-lg">
            <h1 className="text-[#79f4de] text-3xl flex items-center gap-2">
              Technology <FaGear />
            </h1>
            <p className="mt-4 text-sm text-amber-50">
            We utilize state-of-the-art technologies in AI, IoT, and automation to design and develop innovative solutions. By bridging creativity and technical expertise, we strive to build systems that are both impactful and sustainable.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Teams;
