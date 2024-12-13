"use client";

import React, { useEffect, useState } from "react";
import { translate } from "@/lib/anim";
import "./NavFooter.css";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

interface NavFooterProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavFooter: React.FC<NavFooterProps> = ({ setIsActive }) => {
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/categories");
        const data: string[] = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="footer">
      {isLoading ? (
        <div className="loading">Loading categories...</div>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {categories.map((category) => (
            <motion.li
              key={category}
              custom={[0.3, 0]}
              variants={translate as unknown as Variants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <span>Buy: </span>
              <Link
                href={`/categories/${category}`}
                onClick={() => setIsActive(false)}
              >
                {category}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavFooter;
