"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// icons
import {
  FaReact,
  FaLaravel,
  FaWordpress,
  FaNodeJs,
  FaGithub,
  FaExternalLinkAlt,
  FaVideo,
  FaVuejs,
  FaBootstrap
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMysql, SiInertia } from "react-icons/si";
import { FiMaximize } from "react-icons/fi";

// projects data
const projects = [
  {
    id: 1,
    title: "E-Commerce",
    description:
      "A modern e-commerce platform for managing products, orders, and payments with an intuitive user interface. Part of the source code is available on GitHub.",
    image: "/projects/E-Commerce.jpeg",
    imageFullSize: "/projects/full/E-Commerce.png",
    technologies: [<FaLaravel />, <SiMysql />],
    // codeLink: "#",
  },
  {
    id: 2,
    title: "SANN ERP",
    description:
      "A comprehensive ERP platform with accounting entries, invoicing, maintenance management, and analytical dashboards for business operations.",
    image: "/projects/SANN_ERP.jpeg",
    imageFullSize: "/projects/full/SANN_ERP.png",
    technologies: [<FaLaravel />, <SiMysql />, <FaBootstrap />, ],
  },
  {
    id: 3,
    title: "Car Rental",
    description:
      "A car rental management dashboard with invoicing, fleet maintenance, and real-time integration for Salik and traffic fines synchronization.",
    image: "/projects/CAR_RENTAL.jpeg",
    imageFullSize: "/projects/full/CAR_RENTAL.png",
    technologies: [<FaLaravel />, <SiMysql />, <FaBootstrap />, ],
  },
  {
    id: 4,
    title: "Instagram Clone",
    description:
      "A mini Instagram clone with user authentication, post sharing, likes, comments, and real-time chat functionality. Built for learning and demonstration purposes.",
    image: "/projects/instagram.jpeg",
    imageFullSize: "/projects/full/instagram.png",
    video: "/project/videos/instagram.mp4",
    technologies: [<FaLaravel />, <FaNodeJs />, <SiMysql />],
    codeLink: "https://github.com/DRGHAM100/Clone-Instagram-Laravel-NodeJs-MySQL",
  },
  {
    id: 5,
    title: "Alraya Poet",
    description:
      "A competition platform for poets in Saudi Arabia, featuring user registration, submission management, voting, and results tracking. Built with Laravel, MySQL, and Bootstrap.",
    image: "/projects/alraya_poet.jpeg",
    imageFullSize: "/projects/full/alraya_poet.png",
    technologies: [<FaLaravel />, <SiMysql />, <FaBootstrap />, ],
  },
  {
    id: 6,
    title: "Facebook Clone",
    description:
      "A mini Facebook clone featuring user authentication, post sharing, likes, comments, and real-time interactions. Built with Laravel, Vue.js, and Inertia.js.",
    image: "/projects/clone_facebook.jpeg",
    imageFullSize: "/projects/full/clone_facebook.png",
    technologies: [<FaLaravel />, <SiInertia />, <FaVuejs/>, <SiMysql />],
  },
  {
    id: 7,
    title: "Twitter Clone",
    description:
      "A design-only Twitter clone built with Vue.js and Tailwind CSS, showcasing UI components and layout for demonstration purposes.",
    image: "/projects/clone-twitter.jpeg",
    imageFullSize: "/projects/full/clone-twitter.png",
    technologies: [<FaVuejs />, <SiTailwindcss />],
    codeLink: "https://github.com/DRGHAM100/Clone-Twitter",
  },
  {
    id: 8,
    title: "Crypto",
    description:
      "A simple crypto dashboard displaying current cryptocurrency prices and latest news. Built with React and Ant Design for a responsive and interactive interface.",
    image: "/projects/react-crypto.jpeg",
    imageFullSize: "/projects/full/react-crypto.png",
    technologies: [<FaReact />],
    liveLink: "https://simple-react-crypto-app.vercel.app/",
    codeLink: "https://github.com/DRGHAM100/simple-react-crypto-app",
  },
  {
    id: 9,
    title: "eShop",
    description:
      "A simple e-commerce platform with product listing, shopping cart, and online checkout. Built with React for a responsive and interactive user experience.",
    image: "/projects/e_shop.jpeg",
    imageFullSize: "/projects/full/e_shop.png",
    technologies: [<FaReact />],
    liveLink: "https://eshop-75c9c.web.app/",
    codeLink: "https://github.com/DRGHAM100/simple-react-e-shop",
  },
  {
    id: 10,
    title: "Shawarma",
    description:
      "A website for an Arabic restaurant in Germany, featuring menu display, online ordering, and chef screens for managing orders. Built with Laravel, MySQL, and Bootstrap.",
    image: "/projects/shawarma.jpeg",
    imageFullSize: "/projects/full/shawarma.png",
    technologies: [<FaLaravel />, <SiMysql />, <FaBootstrap />, ],
  },
  {
    id: 11,
    title: "PQS",
    description:
      "A quality management system for monitoring, tracking, and improving business processes. Built with Laravel, MySQL, and Bootstrap for efficiency and scalability.",
    image: "/projects/iso.jpeg",
    imageFullSize: "/projects/full/iso.png",
    technologies: [<FaLaravel />, <SiMysql />, <FaBootstrap />, ],
  },
  {
    id: 12,
    title: "Wedding Invitations System",
    description:
      "A wedding invitations management system that sends invitations via WhatsApp and email, allowing guests to RSVP with accept or decline options. Built with Laravel, MySQL, and Bootstrap.",
    image: "/projects/wedding_invitations_system.jpeg",
    imageFullSize: "/projects/full/wedding_invitations_system.png",
    technologies: [<FaLaravel />, <SiMysql />, <FaBootstrap />, ],
  },
  {
    id: 13,
    title: "WP restaurant",
    description:
      "A restaurant website built on WordPress, featuring responsive design, menu display, and online ordering via Gloria Food plugin. Designed with Elementor for easy customization.",
    image: "/projects/wp-restaurant.jpeg",
    imageFullSize: "/projects/full/wp-restaurant.jpg",
    technologies: [<FaWordpress />],
  },
  {
    id: 14,
    title: "Pharma",
    description:
      "A small pharmacy management system (POS) for tracking inventory, sales, and prescriptions. Built with Laravel, MySQL, and Bootstrap for efficiency and scalability.",
    image: "/projects/pharma.jpeg",
    imageFullSize: "/projects/full/pharma.png",
    video: "/project/videos/POS_Pharamcy.mp4",
    technologies: [<FaLaravel />, <SiMysql />, <FaBootstrap />, ],
    codeLink: "https://github.com/DRGHAM100/POS-Pharmacy-System",
  }
];

const Work = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  return (
    <div className="h-full py-32 text-center bg-primary/30 xl:text-left">
      {/* Section Title */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mb-10 text-3xl font-bold text-center uppercase sm:text-4xl xl:text-5xl text-accent"
      >
        Recent <span className="text-white">Projects</span>
      </motion.h2>

      {/* Slider */}
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="container mx-auto"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <style jsx global>{`
            @media (min-width: 1000px) {
              .swiper-button-next,
              .swiper-button-prev{
                display:none;
              }
            }
            
            @media (max-width: 900px) {
            
              .swiper-button-next,
              .swiper-button-prev {
                width: 30px;
                height: 25px;
                z-index: 20;
              }

              .swiper-button-next::after,
              .swiper-button-prev::after {
                font-size: 14px;
                z-index: 20;
              }

              .swiper-pagination-bullet {
                width: 6px;
                height: 6px;
                z-index: 20;
              }
            }
          `}</style>
          {projects.map((project, index) => (
            <SwiperSlide key={project.id || index}>
              <div className="flex flex-col items-center justify-between gap-6 px-4 transition-all duration-300 py-9 xl:py-10 xl:flex-row bg-white/5 rounded-2xl hover:bg-white/10">
                
                {/* Left Image */}
                <div className="relative flex-1 w-full overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="hidden object-cover h-24 transition-transform duration-500 xl:block xl:h-64 w-25 xl:w-full hover:scale-105 rounded-2xl"
                  />

                  {/* Zoom Icon */}
                  <div
                    className="absolute p-2 text-white rounded-full cursor-pointer bottom-3 right-3 bg-black/50 hover:bg-accent/70"
                    onClick={() => {
                      setLightboxImage(project.imageFullSize);
                      setLightboxOpen(true);
                    }}
                  >
                    <FiMaximize  size={18} />
                  </div>
                </div>
                <div
                    className="absolute p-2 text-white rounded-full cursor-pointer xl:hidden top-4 right-3 bg-black/50 hover:bg-accent/70"
                    onClick={() => {
                      setLightboxImage(project.imageFullSize);
                      setLightboxOpen(true);
                    }}
                  >
                    <FiMaximize  size={18} />
                  </div>

                {/* Right Content */}
                <div className="flex-1 w-full mt-1 text-left md:mt-4 xl:mt-0 xl:pl-8">
                  <h3 className="mb-3 text-[20px] md:text-2xl font-bold text-accent">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-[12px] md:text-[17px] text-white/80">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-3 mb-6 text-lg text-accent">
                    {project.technologies.map((icon, i) => (
                      <span
                        key={i}
                        className="p-2 transition bg-white/10 rounded-xl hover:bg-accent/20"
                      >
                        {icon}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition rounded-full bg-accent hover:bg-accent/70"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                    
                    {project.codeLink && (
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition rounded-full bg-white/10 hover:bg-accent/40"
                      >
                        <FaGithub /> Source Code
                      </a>
                    )}
                    
                    { project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition rounded-full bg-white/10 hover:bg-accent/40"
                      >
                        <FaVideo /> Video
                      </a>
                    ) }
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={[{ src: lightboxImage }]}
        />
      )}
    </div>
  );
};

export default Work;
