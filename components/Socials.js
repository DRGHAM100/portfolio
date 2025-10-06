import Link from "next/link";
import {RiLinkedinLine, RiGithubLine, RiFacebookLine, RiInstagramLine} from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center text-lg gap-x-5">
    <Link href={'https://www.linkedin.com/in/drgham-dakhol-17b431173'} className="transition-all duration-300 hover:text-accent" >
      <RiLinkedinLine/>
    </Link>
    <Link href={'https://github.com/DRGHAM100'} className="transition-all duration-300 hover:text-accent" >
      <RiGithubLine/>
    </Link>
    <Link href={'https://www.instagram.com/drghamdakhol'} className="transition-all duration-300 hover:text-accent" >
      <RiInstagramLine/>
    </Link>
    <Link href={'https://www.facebook.com/drgham.dakhol.2025'} className="transition-all duration-300 hover:text-accent" >
      <RiFacebookLine/>
    </Link>
  </div>;
};

export default Socials;
