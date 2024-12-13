import { Variants, motion } from 'framer-motion';
import Link from 'next/link';
import './NavBody.css';
import { blur, translate } from '@/lib/anim';
import { JSX } from 'react';

interface LinkItem {
  title: string;
  href: string;
}

interface SelectedLink {
  isActive: boolean;
  index: number;
}

interface BodyProps {
  links: LinkItem[];
  selectedLink: SelectedLink;
  setSelectedLink: (link: SelectedLink) => void;
}
const NavBody: React.FC<BodyProps> = ({ links, selectedLink, setSelectedLink }) => {
  const getChars = (word: string) => {
    const chars: JSX.Element[] = [];
    word.split("").forEach((char, i) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate as unknown as Variants}
          initial="initial"
          animate="enter"
          exit="exit"
          key={`${char}_${i}`}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <div className="body">
      {links.map((link, index) => {
        const { title, href } = link;
        return (
          <Link key={`l_${index}`} href={href}>
            <motion.p
              onMouseOver={() => setSelectedLink({ isActive: true, index })}
              onMouseLeave={() => setSelectedLink({ isActive: false, index })}
              variants={blur as unknown as Variants}
              animate={
                selectedLink.isActive && selectedLink.index !== index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </Link>
        );
      })}
    </div>
  );
};

export default NavBody;
