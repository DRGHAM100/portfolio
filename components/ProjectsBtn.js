import Image from 'next/image';
import Link from 'next/link';
import {HiArrowRight} from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative z-50
                   w-[110px] h-[110px] 
                   sm:w-[130px] sm:h-[130px] 
                   lg:w-[160px] lg:h-[160px] 
                   xl:w-[185px] xl:h-[185px] 
                   flex justify-center items-center 
                   bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow 
                     w-[90px] h-[90px] 
                     sm:w-[110px] sm:h-[110px] 
                     lg:w-[130px] lg:h-[130px] 
                     xl:w-[141px] xl:h-[148px]"
        />
        <HiArrowRight className="absolute text-2xl transition-all duration-300 sm:text-3xl lg:text-4xl group-hover:translate-x-2" />
      </Link>
    </div>
  );
};


export default ProjectsBtn;
