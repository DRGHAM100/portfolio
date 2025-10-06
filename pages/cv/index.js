"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaDownload, FaUserGraduate, FaBriefcase, FaTools } from "react-icons/fa";
import Circles from "../../components/Circles";

const CV = () => {
  return (
    <div className="relative min-h-screen py-16 sm:py-24 bg-primary/30">
      <Circles />

      <div className="container flex flex-col items-center px-4 mx-auto text-center">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="mt-16 mb-4 text-3xl font-bold md:mt-10 sm:text-4xl xl:text-5xl text-white/80"
        >
          My <span className="text-accent">CV</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="max-w-[90%] mb-10 text-[100%] sm:text-sm md:text-lg text-white/70"
        >
          Here you can preview some highlights from my professional background and download my full CV.
        </motion.p>

        {/* Basic Info Cards */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          className="grid w-full max-w-4xl grid-cols-1 gap-4 mb-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="flex flex-col items-center p-2 transition-all sm:p-6 bg-white/10 rounded-2xl hover:bg-accent/20">
            <FaUserGraduate className="mb-2 text-3xl sm:mb-3 sm:text-4xl text-accent" />
            <h4 className="mb-1 text-base font-semibold sm:text-lg text-white/80">Education</h4>
            <p className="text-xs sm:text-sm text-white/70">Bachelor’s in Software Engineering</p>
          </div>

          <div className="flex flex-col items-center p-2 transition-all sm:p-6 bg-white/10 rounded-2xl hover:bg-accent/20">
            <FaBriefcase className="mb-2 text-3xl sm:mb-3 sm:text-4xl text-accent" />
            <h4 className="mb-1 text-base font-semibold sm:text-lg text-white/80">Experience</h4>
            <p className="text-xs sm:text-sm text-white/70">5+ Years in Web Development</p>
          </div>

          <div className="flex-col items-center hidden p-2 transition-all lg:flex sm:p-6 bg-white/10 rounded-2xl hover:bg-accent/20">
            <FaTools className="mb-2 text-3xl sm:mb-3 sm:text-4xl text-accent" />
            <h4 className="mb-1 text-base font-semibold sm:text-lg text-white/80">Skills</h4>
            <p className="text-xs sm:text-sm text-white/70">Laravel, MySQL, PostgreSQL, React, AWS ..</p>
          </div>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
        >
          <a
            href="/files/CV.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-2 -mt-10 text-sm font-semibold text-white transition-all rounded-full shadow-lg sm:px-8 sm:py-3 sm:text-base bg-accent hover:bg-accent/80 hover:scale-105"
          >
            <FaDownload className="text-lg" />
            Download My CV
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default CV;
