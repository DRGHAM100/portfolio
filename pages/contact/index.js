"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Circles from "../../components/Circles";

const contactData = [
  {
    icon: <FaPhoneAlt />,
    label: "Call Me",
    value: "+971569184468",
    link: "tel:+971569184468",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "drghamdakhol@gmail.com",
    link: "mailto:drghamdakhol@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Dubai, UAE",
    link: "https://www.google.com/maps/place/Dubai,+UAE",
  },
];

const Contact = () => {
  return (
    <div className="relative h-full py-24 bg-primary/30">
      <Circles />

      <div className="container flex flex-col items-center px-4 mx-auto text-center">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate="show"
          className="mt-12 mb-4 text-3xl font-bold md:mt-10 sm:text-2xl md:text-3xl text-white/80"
        >
          Contact <span className="text-accent">Me</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          className="max-w-[900px] mb-7 lg:mb-12 text-sm text-white/70 sm:text-base md:text-lg"
        >
          I&apos;m always excited to collaborate on new projects, answer any questions, or just have a chat about ideas. Whether you have a business inquiry, a creative project, or simply want to say hello, feel free to reach out. I&rsquo;ll get back to you as soon as possible.
        </motion.p>


        {/* Contact Boxes */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3"
        >
          {contactData.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target={item.label === "Location" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 transition-all shadow-lg cursor-pointer lg:p-6 bg-white/10 rounded-2xl hover:bg-accent/20"
            >
              <div className="text-3xl text-accent">{item.icon}</div>
              <div className="text-left">
                <h4 className="text-base font-semibold text-white/80">{item.label}</h4>
                <p className="text-sm text-white/70">{item.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
