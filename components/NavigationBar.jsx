import React, { useEffect } from "react";
import AOS from "aos";
import {
  HomeOutlined,
  RadarChartOutlined,
  BugOutlined,
  FireOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";
import Link from "next/link";

export default function NavigationBar() {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-cubic",
      duration: 400,
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="fixed w-full left-0 bottom-0"
    >
      <ul className="flex max-w-[1280px] m-auto py-8 px-2 justify-center items-center gap-10">
        <li className="text-[#21CDA8] text-3xl rounded-full border-[2px] border-[#21CDA8] flex button cursor-pointer hover:scale-110">
          <Link href="/" className="px-3 pb-3">
            <HomeOutlined />
          </Link>
        </li>
        <li className="text-[#21CDA8] text-3xl rounded-full border-[2px] border-[#21CDA8] flex  button cursor-pointer hover:scale-110">
          <Link href="#card" className="px-3 pb-3">
            <RadarChartOutlined />
          </Link>
        </li>
        <li className="text-[#21CDA8] text-3xl rounded-full border-[2px] border-[#21CDA8] flex p-3 button cursor-pointer hover:scale-110">
          <BugOutlined />
        </li>
        <li className="text-[#21CDA8] text-3xl rounded-full border-[2px] border-[#21CDA8] flex p-3 button cursor-pointer hover:scale-110">
          <FireOutlined />
        </li>
        <li className="text-[#21CDA8] text-3xl rounded-full border-[2px] border-[#21CDA8] flex p-3 button cursor-pointer hover:scale-110">
          <PoweroffOutlined />
        </li>
      </ul>
    </div>
  );
}
