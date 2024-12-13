"use client";

import "./Header.css";
import Link from "next/link";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Nav from "./NavComps/Nav";
import { background, opacity } from "@/lib/anim";
import ShoppingCart from "./ShoppingCart";

const carolineFont = localFont({
  src: "../../app/fonts/Caroline.woff",
  display: "swap",
});

const Header: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="header z-10 ">
      <div className="bar">
      <Link
          className="flex text-xl md:text-2xl font-semibold tracking-widest"
          href="/"
        >
          <span></span>
          <span className={carolineFont.className}>
            <span className="block sm:hidden">L X</span>
            <span className="hidden sm:block">Leroy X</span>
           
          </span>
          <span className="pl-2">
            <img
              src="/images/oxygene_logo2.png"
              alt="oxyegene Logo"
              className="h-4 md:h-6 bg-black m-1"
            />
          </span>
        </Link>
        <div onClick={() => setIsActive(!isActive)} className="el">
          <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
          <div className="label">
            <motion.p
              variants={opacity as unknown as Variants}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity as unknown as Variants}
              animate={isActive ? "open" : "closed"}
            >
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity as unknown as Variants}
          animate={!isActive ? "open" : "closed"}
          className="shopContainer"
        >
          <p className="shop">Shop</p>{" "}
          <div className="el">
            {" "}
            <ShoppingCart />{" "}
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={background as unknown as Variants}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className="background"
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav setIsActive={setIsActive} />}
      </AnimatePresence>
    </div>
  );
};

export default Header;
