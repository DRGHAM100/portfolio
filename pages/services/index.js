"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from '../../components/Circles';

// icons
import { FaCode, FaLaptopCode, FaPaintBrush, FaDatabase, FaCloud, FaMobileAlt } from "react-icons/fa";

const servicesData = [
  {
    title: "Web & Backend Development",
    description: [
      "Building modern, scalable, and high-performance websites using the latest technologies.",
      "Developing secure, reliable, and optimized backend systems & RESTful APIs."
    ],
    icon: <FaLaptopCode />,
  },
  {
    title: "UI/UX & Mobile Design",
    description: [
      "Crafting clean, responsive, and user-friendly interfaces that focus on user experience.",
      "Ensuring seamless performance across all devices with fully responsive layouts."
    ],
    icon: <FaPaintBrush />,
  },
  {
    title: "Database & Cloud Management",
    description: [
      "Designing, optimizing, and maintaining relational & NoSQL databases.",
      "Deploying applications on AWS, DigitalOcean, and other cloud providers with CI/CD pipelines."
    ],
    icon: <FaDatabase />,
  },
];

const Services = () => {
  return (
    <div className="relative h-full py-24 bg-primary/30">
      <Circles/>
      <div className="container flex flex-col justify-center h-full mx-auto text-center xl:text-left">
        {/* Title */}
        <motion.h2
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden max-w-3xl px-4 mx-auto mb-10 text-lg text-center lg:block sm:text-base md:text-lg lg:text-4xl xl:text-4xl text-white/80"
        >
          Professional <span className="text-accent">digital solutions</span> for <br className="xl:hidden"/>{" "}
          <span className="text-accent">businesses</span> and{" "}
          <span className="text-accent">individuals</span>.
        </motion.h2>

        {/* Grid (Desktop: 3 columns, Medium: 1 column stacked) */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="grid grid-cols-1 gap-2 mt-10 md:gap-4 lg:mt-0 md:mt-12 md:grid-cols-1 lg:grid-cols-3"
        >
          {servicesData.map((service, i) => (
            <div
              key={i}
              className="flex flex-col items-start w-full p-2 text-left transition-all duration-300 shadow-lg md:p-4 lg:flex-col md:flex-row bg-white/10 rounded-2xl hover:bg-accent/20"
            >
              {/* أيقونة */}
              <div className="flex-shrink-0 mt-1 mb-2 mr-0 text-3xl lg:text-4xl lg:mx-auto lg:mb-4 text-accent md:mr-4 md:mb-0">
                {service.icon}
              </div>

              {/* النص */}
              <div className="flex-1">
                <h3 className="mb-1 text-base font-semibold">{service.title}</h3>
                <p className="text-[10px] md:text-[14px] lg:text-[15px] text-white/80">
                  {Array.isArray(service.description)
                    ? service.description.map((desc, idx) => (
                        <span key={idx}>
                          {desc}
                          <br />
                        </span>
                      ))
                    : service.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>



      </div>
    </div>
  );
};

export default Services;
