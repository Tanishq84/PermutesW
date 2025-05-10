'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MagicButton from '@/components/ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa6";
import Link from 'next/link';

const fadeInVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const BidBuild = () => {
  const sections = [
    {
      title: 'Detailed Event Flow',
      bg: 'bg-black',
      content: (
        <div className="space-y-6 text-lg text-amber-50">
          <p><strong>Pre-Qualifier (Online – 4 May & 11 May, 2025):</strong> Robotics Quiz & Theme Voting</p>

          <div>
            <p><strong>Day 1:</strong></p>
            <ul className="list-disc ml-6">
              <li>Inauguration & Chit Draw</li>
              <li>PPT & Circuit Design</li>
              <li>Design Sketching</li>
              <li>Judging & Auction Setup</li>
              <li>Auction – Part 1 & 2 (Essentials + Bonuses)</li>
              <li>Strategy Lock-In</li>
            </ul>
          </div>

          <div>
            <p><strong>Day 2:</strong></p>
            <ul className="list-disc ml-6">
              <li>Overnight Bot Building</li>
              <li>3 Rounds of Technical Inspection</li>
              <li>Design Evaluation</li>
              <li>Live Bot Showdown</li>
              <li>Awards & Closing Ceremony</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: 'Judging Criteria',
      bg: 'bg-gray-900',
      content: (
        <ul className="list-disc ml-6 space-y-2 text-lg text-amber-50">
          <li><strong>PPT Presentation:</strong> 30%</li>
          <li><strong>Auction Strategy:</strong> 20%</li>
          <li><strong>Technical Performance:</strong> 30%</li>
          <li><strong>Design & Aesthetics:</strong> 20%</li>
        </ul>
      )
    },
    {
      title: 'Awards & Recognition',
      bg: 'bg-black',
      content: (
        <ul className="list-disc ml-6 space-y-2 text-lg text-amber-50">
          <li>Champion Team – Trophy + Certificate + Cash Prize</li>
          <li>Best Design Award</li>
          <li>Best Strategy Award</li>
          <li>Technical Excellence</li>
          <li>Innovative Thinkers Recognition</li>
        </ul>
      )
    },
    {
      title: 'Register for Round 1',
      bg: 'bg-black',
      content: (
        <div>
          <p className="mb-4 text-lg text-amber-50 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-0">
            Participation in the online robotics quiz on <strong>4th May</strong> is <strong>completely free</strong>! Register below to compete for your chance to build and battle.
          </p>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdT4EJErDt8M34NDyIGzT8uaqoqGxLfJU4ONJKlPSAuY9_7HA/viewform?embedded=true"
            width="100%"
            height="700"
            className="border rounded-xl z-10 relative min-w-[300px]"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    {
      title: 'Become a Sponsor',
      bg: 'bg-gray-900',
      content: (
        <div>
          <p className="mb-4 text-lg text-amber-50">Want to partner with one of India’s most creative student-led robotics events? Submit your interest below.</p>
          <iframe
            src="https://forms.gle/YOUR_SPONSOR_FORM"
            width="100%"
            height="700"
            className="border rounded-xl z-10 relative"
            allowFullScreen
          ></iframe>
        </div>
      )
    },
    {
      title: 'Contact Us',
      bg: 'bg-black',
      content: (
        <ul className="text-lg text-amber-50 space-y-2">
          <li><strong>Tanishq Som (CEO, Permutes):</strong> +91 84499 22025 | tanishqsom19@gmail.com</li>
          <li><strong>Nimish Gupta:</strong> +91 95283 58313 | nimish9119@gmail.com</li>
          <li><strong>Shubham (IEEE):</strong> +91 83170 72770 | shubham0568@ieee.org</li>
        </ul>
      )
    }
  ];

  return (
    <main className="text-gray-900 font-sans bg-black z-10 relative">
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/bidbuild_banner.png')" }}
      >
        <motion.div
          className="bg-black bg-opacity-60 p-8 rounded-2xl text-white text-center max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <h1 className="text-5xl font-bold tracking-tight mb-4">Bid & Build 2025</h1>
          <p className="text-xl font-light">Build. Battle. Brag. — Presented by Permutes x GU IEEE x Mechanical Department (GU)</p>
          <a href="https://forms.gle/cydDbKJrq1Wwc4ZZA" className="text-center">
            <MagicButton title="Register Now!" icon={<FaLocationArrow />} position="right" />
          </a>
          <Link href="/login" passHref>
            <MagicButton title="Participant Login" icon={<FaLocationArrow />} position="right" />
          </Link>
        </motion.div>
      </section>

      <motion.section
        className="bg-black py-16 px-6 md:px-20 flex justify-center z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <div className="bg-gray-800 rounded-2xl p-10 max-w-4xl w-full shadow-xl border border-gray-700 text-amber-50">
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">About the Event</h2>
          <p className="mb-4 text-lg leading-relaxed">
            <strong>Bid & Build</strong> is a 1.5-day immersive robotics competition that challenges participants to go beyond building — they must ideate, design, strategize, and construct a fully functional robot using only components they acquire through a strategic auction system.
          </p>
          <p className="mb-4 text-lg">It tests engineering skills, innovation, teamwork, and decision-making under pressure.</p>
          <ul className="list-disc ml-6 space-y-2 text-lg">
            <li><strong>Round 1 (Online Quiz):</strong> 4th May 2025 — Free Registration</li>
            <li><strong>Finals:</strong> 19–20 May 2025 at Galgotias University, Greater Noida</li>
            <li><strong>Team Size:</strong> 3–5 members</li>
            <li><strong>Robot Themes:</strong> Logistics Automation, Disaster Response, Environmental Protection, Assistive Technology</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        className="bg-gray-900 py-16 px-6 md:px-20 flex justify-center z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <div className="bg-gray-800 rounded-2xl p-10 max-w-4xl w-full shadow-xl border border-gray-700">
          <h2 className="text-3xl font-semibold mb-6 text-white text-center">Why Should You Participate?</h2>
          <ul className="list-disc pl-6 space-y-3 text-lg text-amber-50">
            <li>Get real-world experience in robotics and electronics</li>
            <li>Learn strategic thinking through a points-based auction</li>
            <li>Collaborate in high-pressure team environments</li>
            <li>Win exciting prizes and showcase your skills</li>
            <li>Network with faculty, experts, and fellow innovators</li>
          </ul>
        </div>
      </motion.section>

      {sections.map((section, idx) => (
        <motion.section
          key={idx}
          className={`${section.bg} py-16 px-6 md:px-20 flex justify-center z-10 relative`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
        >
          <div className="bg-gray-800 rounded-2xl p-10 max-w-4xl w-full shadow-xl border border-gray-700">
            <h2 className="text-3xl font-semibold mb-6 text-white text-center">{section.title}</h2>
            {section.content}
          </div>
        </motion.section>
      ))}
    </main>
  );
};

export default BidBuild;
