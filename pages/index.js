import Image from 'next/image';
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';
import { motion } from 'framer-motion';
import {fadeIn} from '../variants';

const Home = () => {
  return (
    <div className='h-full bg-primary/60'>
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 '>
        <div className='container flex flex-col justify-center h-full mx-auto text-center xl:pt-20 xl:text-left'>
          <motion.h1 variants={fadeIn('down', 0.2)} initial='hidden' animate='show' exit='hidden' className='text-3xl h1 md:text-4xl lg:text-6xl'>Drgham Dakhol <br/> {' '}
            <span className='text-accent'>Software Engineer</span>
          </motion.h1>
          <motion.p variants={fadeIn('down', 0.3)} initial='hidden' animate='show' exit='hidden' className="max-w-md mx-auto mb-6 text-sm md:text-base xl:max-w-xl xl:mx-0">
            Senior Software Engineer & Web Developer with +5 years of experience.
            Proficient in various platforms and languages.
          </motion.p>
          <div className='relative flex justify-center xl:hidden'>
            <ProjectsBtn/>
          </div>
          <motion.div variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex'>
            <ProjectsBtn/>
          </motion.div>
        </div>
      </div>
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        <div className='absolute w-full h-full bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat mix-blend-color-dodge translate-z-0'></div>
        <div>
          <ParticlesContainer/>
        </div>
        <motion.div variants={fadeIn('up', 0.5)} initial='hidden' animate='show' exit='hidden' transition={{ duration: 1, ease: 'easeInOut' }} className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'>
          <Avatar/>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
