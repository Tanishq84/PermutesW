'use client';

import { motion } from 'framer-motion';
import { AnimatedTooltip } from "../ui/animated-tooltip";


const teamsData = [
  {
    id: 1,
    name: "AI/ML Enthusiasts",
    designation: "Machines that learn, minds that innovate!",
    image: "/teams/AI_ML_Enthusiast.png",
  },
  {
    id: 2,
    name: "Robotics Enthusiasts",
    designation: "Building the future, one line of code and bolt at a time!",
    image: "/teams/Robotics_Enthusiast.png",
  },
  {
    id: 3,
    name: "Website & Social Media",
    designation: "Don't just share stories, amplify dreams!",
    image: "/teams/Website_and_Social_Media.png",
  },
  {
    id: 4,
    name: "Biological Sciences",
    designation: "Nothing makes sense except in the light of evolution!",
    image: "/teams/Biological_Science.png",
  },
  {
    id: 5,
    name: "Chemical Sciences",
    designation: "Nothing is lost, nothing is created, everything is transformed!",
    image: "/teams/Chemical_Science.png",
  },
  {
    id: 6,
    name: "Mathematical Sciences",
    designation: "The essence of math lies in its infinite possibilities!",
    image: "/teams/Mathematical_Science.png",
  },
  {
    id: 7,
    name: "Physical Sciences",
    designation: "Think in terms of energy, frequency, and vibrations!",
    image: "/teams/Physical_Science.png",
  },
];

export default function TeamsCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-20 bg-black text-white">
      <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={teamsData} />
    </div>
    </div>
  );
}