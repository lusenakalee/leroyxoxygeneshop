import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

const carolineFont = localFont({
  src: "../../app/fonts/Caroline.woff",
  display: "swap",
});

export default function FooterContent() {
  return (
    <div className="bg-[#4E4E5A] py-8 px-12 h-full w-full flex flex-col justify-between">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="text-white">
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div>
      <Nav />

      <div className="flex justify-between items-end">
        <h1 className="text-[14vw] leading-[0.8] mt-10 text-yellow-600">
          <span className={carolineFont.className}>Leroy X</span>
          <img
            src="/images/oxygene_logo2.png"
            alt="oxyegene Logo"
            className="h-24"
          />
        </h1>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex shrink-0 gap-20">
      <div className="flex flex-col text-white  font-thin gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80] font-bold">About</h3>
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
       
      </div>
      <div className="flex flex-col text-white font-thin  gap-2">
        <h3 className="mb-2 uppercase text-[#ffffff80] font-bold">My Contacts</h3>
        <p className="hover:underline">
          WhatsApp:{" "}
          <a
            href="https://wa.me/0714392496"
            target="_blank"
            rel="noopener noreferrer"
          >
            0714392496
          </a>
        </p>
        <p className="hover:underline">
          Email:{" "}
          <a href="mailto:lusenakalee@gmail.com">lusenakalee@gmail.com</a>
        </p>
        <a className="hover:underline"
          href="https://leroyportfolio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio: Leroy Portfolio
        </a>
      </div>
    </div>
  );
};
