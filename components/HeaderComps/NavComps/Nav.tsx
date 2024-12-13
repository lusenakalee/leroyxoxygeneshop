'use client';
import { height } from '@/lib/anim';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import './Nav.css';
import NavBody from './NavBody';
import NavFooter from './NavFooter';
import NavImage from './NavImage';

interface LinkItem {
  title: string;
  href: string;
  src: string;
}

interface SelectedLink {
  isActive: boolean;
  index: number;
}
interface NavProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const links: LinkItem[] = [
  {
    title: "Home",
    href: "/",
    src: "header1.png"
  },
  {
    title: "Shop",
    href: "/products",
    src: "bag.jpg"
  },
];
const Nav: React.FC<NavProps> = ({ setIsActive }) => {
  const [selectedLink, setSelectedLink] = useState<SelectedLink>({ isActive: false, index: 0 });



  return (
    <motion.div
      variants={height as unknown as Variants}
      initial="initial"
      animate="enter"
      exit="exit"
      className="nav"
    >
      <div className="wrapper">
        <div className="container">
          <NavBody
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={(link) => {
              setSelectedLink(link); // Update local state
              setIsActive(link.isActive); // Update parent state
            }}
          />
<NavFooter setIsActive={setIsActive} />
</div>
        <NavImage src={links[selectedLink.index].src} isActive={selectedLink.isActive} />
      </div>
    </motion.div>
  );
};

export default Nav;