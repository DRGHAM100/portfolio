import React, {useState} from 'react';

// icons
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';

import { 
  FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap, FaWordpress, 
  FaPhp, FaLaravel, FaNodeJs, 
} from 'react-icons/fa';
import { 
  SiJquery, SiVuedotjs, SiInertia, SiTailwindcss, 
  SiPostgresql, SiMysql, SiMongodb, 
  SiExpress 
} from 'react-icons/si';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiJquery />,
          <SiVuedotjs />,
          <SiInertia />,
          <FaBootstrap />,
          <SiTailwindcss />,
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          <FaPhp />,
          <FaLaravel />,
          <FaNodeJs />,
          <SiExpress />,
        ],
      },
      {
        title: 'Databases & CMS',
        icons: [
          <SiPostgresql />,
          <SiMysql />,
          <SiMongodb />,
          <FaWordpress />,
        ],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Senior Software Engineer - SANN Technology | UAE, Dubai (On Site)',
        stage: '2024 - Present',
      },
      {
        title: 'Full Stack Web Developer - RS4IT | Saudi Arabia (Remote)',
        stage: '2022 - Present',
      },
      {
        title: 'Full Stack Web Developer - IT-TrendCo | Germany (Remote)',
        stage: '2021 - 2022',
      },
      {
        title: 'Junior Full Stack Web Developer - Digital Edge | Syria, Latakia (On Site)',
        stage: '2020 - 2021',
      },
    ],
  },
  {
    title: 'education',
    info: [
      {
        title: 'Software Engineering - Tishreen University',
        stage: '2016 - 2021',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
  <div className='h-full py-32 text-center bg-primary/30 xl:text-left'>
    <Circles/>
    <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className='hidden xl:flex absolute bottom-0 -left-[370px]'> </motion.div>
    <div className='container flex flex-col items-center h-full mx-auto xl:flex-row gap-x-6'>
      <div className='flex flex-col justify-center flex-1'>
        <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden" className="text-xl font-bold xl:-mt-16 sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl">
          Web Developer, <span className="text-accent">with extensive knowledge</span> and years of experience
        </motion.h2>
        <motion.p variants={fadeIn('right', 0.4)} initial="hidden" animate="show" exit="hidden" className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Skilled in web technologies and UI design, delivering high-quality, user-focused digital solutions.
        </motion.p>
        <div className='hidden xl:flex'> 
        <motion.div variants={fadeIn('right', 0.6)} initial="hidden" animate="show" exit="hidden" className="flex flex-col gap-6 md:flex-row">
          <div className="flex-1 flex flex-col justify-center items-center text-center relative md:after:w-[1px] md:after:h-full md:after:bg-white/10 md:after:absolute md:after:top-0 md:after:right-0">
            <div className="mb-2 text-2xl font-extrabold md:text-3xl xl:text-4xl text-accent">
              <CountUp start={0} end={5} duration={5} /> +
            </div>
            <div className="text-xs md:text-sm tracking-[1px] uppercase leading-[1.4] max-w-[120px]">
              Years of experience
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center text-center relative md:after:w-[1px] md:after:h-full md:after:bg-white/10 md:after:absolute md:after:top-0 md:after:right-0">
            <div className="mb-2 text-2xl font-extrabold md:text-3xl xl:text-4xl text-accent">
              <CountUp start={0} end={100} duration={5} /> +
            </div>
            <div className="text-xs md:text-sm tracking-[1px] uppercase leading-[1.4] max-w-[120px]">
              Completed Projects
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center flex-1 text-center">
            <div className="mb-2 text-2xl font-extrabold md:text-3xl xl:text-4xl text-accent">
              <CountUp start={0} end={4} duration={5} /> +
            </div>
            <div className="text-xs md:text-sm tracking-[1px] uppercase leading-[1.4] max-w-[120px]">
              Companies Worked
            </div>
          </div>
        </motion.div>

        </div>
      </div>
      <motion.div variants={fadeIn('left', 0.4)} initial="hidden" animate="show" exit="hidden" className="flex flex-col w-full xl:max-w-[48%] h-[480px] py-1 xl:py-14">
        <div className="flex mb-6 border-b gap-x-8 border-white/20">
          {aboutData.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className={`pb-2 relative cursor-pointer transition-all duration-300 ${
                index === itemIndex
                  ? 'text-accent after:w-full after:bg-accent'
                  : 'text-white/60 hover:text-white after:w-0'
              } after:h-[2px] after:absolute after:-bottom-[1px] after:left-0 after:transition-all capitalize`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          ))}
        </div>
        <div className="flex flex-col py-2 gap-y-3">
          {aboutData[index].info.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex flex-col text-left md:items-start gap-x-4 gap-y-1 text-white/70"
            >
              {/* Title */}
              <div className="flex-1 text-[10px] font-light sm:text-sm md:-mt-1 md:text-[16px]">
                {item.title}
              </div>

              {/* Stage */}
              {item.stage && (
                <div className='mt-1 text-[10px] sm:text-xs md:text-[10px] text-left'>
                  {item.stage}
                </div>
              )}

              {/* Icons */}
              {item.icons && (
                <div className="flex flex-wrap gap-2 mt-2 text-[17px] md:mt-0 sm:text-xl md:text-[18px] xl:text-[25px] xl:justify-start">
                  {item.icons.map((icon, i) => (
                    <div
                      key={i}
                      className="p-1 text-white transition bg-white/10 rounded-xl hover:bg-accent/20"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>);
};

export default About;
