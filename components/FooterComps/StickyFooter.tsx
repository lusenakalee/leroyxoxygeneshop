"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import FooterContent from "./FooterContent";

export default function StickyFooter() {
  useEffect(() => {
    const lenis = new Lenis();

    // Typing the 'time' parameter as DOMHighResTimeStamp
    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Clean up the Lenis instance on component unmount
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <FooterContent />
        </div>
      </div>
    </div>
  );
}
