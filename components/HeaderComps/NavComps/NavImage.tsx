import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import  './NavImage.css';
import { opacity } from '@/lib/anim';

interface IndexProps {
  src: string;
  isActive: boolean;
}

const NavImage: React.FC<IndexProps> = ({ src, isActive }) => {
  return (
    <motion.div 
      variants={opacity as  unknown as Variants} // Fix type compatibility here
      initial="initial" 
      animate={isActive ? "open" : "closed"} 
      className="imageContainer"
    >
      <Image 
        src={`/images/${src}`}
        fill
        alt="image"
      />
    </motion.div>
  );
};

export default NavImage;
