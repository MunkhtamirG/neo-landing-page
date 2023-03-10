import Head from "next/head";
import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";

export default function Navbar() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-cubic",
      duration: 400,
    });
  });
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-delay="200"
        className="fixed max-w-[1280px] w-full font-[Rajdhani] text-lg"
      >
        <div className="py-4 px-2 flex text-[#21CDA8] uppercase font-semibold justify-between items-center">
          <ul className="flex justify-between w-[70%]">
            <li className="hover:scale-110 neon-text">
              <Link href="/">main</Link>
            </li>
            <li className="hover:scale-110 neon-text">
              <Link href="#card">faq</Link>
            </li>
            <li className="hover:scale-110 neon-text">
              <a href="/">files</a>
            </li>
            <li className="hover:scale-110 neon-text">
              <a href="/">premium</a>
            </li>
            <li className="hover:scale-110 neon-text">
              <a href="/">contacts</a>
            </li>
          </ul>
          <button className="uppercase text-lg bg-[#21CDA8] text-white px-2 rounded-lg button">
            register now
          </button>
        </div>
        <div className="navbar h-[1px] bg-[#21CDA8]"></div>
      </div>
    </>
  );
}
