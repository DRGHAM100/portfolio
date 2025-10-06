// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiDocument
} from 'react-icons/hi2';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'cv',
    path: '/cv',
    icon: <HiDocument />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
return (
  <nav className="fixed bottom-0 xl:top-1/2 xl:right-[2%] xl:-translate-y-1/2 z-50 w-full xl:w-auto">
  <div
    className="flex items-center justify-between w-full px-6 py-4 text-2xl rounded-none shadow-lg bg-white/10 backdrop-blur-md xl:rounded-full xl:w-auto xl:px-4 xl:py-6 xl:flex-col xl:justify-center gap-y-6"
  >
    {navData.map((link, index) => (
      <Link
        key={index}
        href={link.path}
        className={`${
          link.path === pathname ? 'text-accent' : ''
        } relative flex items-center group hover:text-accent transition-all duration-300`}
      >
        <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
          <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px] shadow">
            <div className="text-[12px] leading-none font-semibold capitalize">
              {link.name}
            </div>
            <div className="border-l-8 border-solid border-l-white border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
          </div>
        </div>
        {/* Icon */}
        <div>{link.icon}</div>
      </Link>
    ))}
  </div>
</nav>

);

};

export default Nav;
