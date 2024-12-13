
import React from "react";

interface HeroProps {
  title: string;
}

const Banner: React.FC<HeroProps> = ({ title }) => {
  return (
    <div className="relative h-[25vh] md:h-[50vh] w-full overflow-hidden">
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/header2.png')`,
      }}
    >
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
    
    <div className="relative flex h-full items-center justify-center px-4">
      <h1 className="font-serif capitalize text-4xl font-light tracking-wider text-white md:text-6xl lg:text-7xl">
      {title ? decodeURIComponent(title) : ''}
      </h1>
    </div>
  </div>
      
  );
};

export default Banner;
