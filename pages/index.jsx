import React, { useEffect, Suspense } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Spline from "@splinetool/react-spline";
import Head from "next/head";

export default function Index() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="h-screen font-mono flex items-end">
        <div className="main" data-aos="fade-up" data-aos-once="false">
          <Spline scene="https://prod.spline.design/Ql6XtVqUPNA46ByS/scene.splinecode" />
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-once="false"
          data-aos-mirror="true"
          className="absolute w-[34vw] bg-slog left-0 bottom-[17vh] text-end"
        >
          <p className="text-[#21CDA8] pt-2 px-4 text-[70px] uppercase font-[Rajdhani]">
            Neo bank
          </p>
          <p className="text-[#21CDA8] px-4 opacity-50 text-xl">
            / / / / / / / / / / / / / / /
          </p>
        </div>
        <div
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-once="false"
          data-aos-mirror="true"
          className="absolute w-[34vw] right-0 top-[17vh] text-start"
        >
          <p className="text-[#21CDA8] pt-2 px-4 text-[70px] uppercase font-[Rajdhani]">
            Neo bank
          </p>
          <p className="text-[#21CDA8] px-4 opacity-50 text-xl">
            / / / / / / / / / / / / / / /
          </p>
        </div>
      </div>
      <div className="h-screen" id="card">
        <Spline scene="https://prod.spline.design/4eVq1f51MTf6glI5/scene.splinecode" />
        <div
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-once="false"
          data-aos-mirror="true"
          className="absolute w-[34vw] bg-slog left-0 bottom-[-83vh] text-end"
        >
          <p className="text-[#21CDA8] pt-2 px-4 text-[70px] uppercase font-[Rajdhani]">
            Neo card
          </p>
          <p className="text-[#21CDA8] px-4 opacity-50 text-xl">
            / / / / / / / / / / / / / / /
          </p>
        </div>
      </div>
    </>
  );
}
