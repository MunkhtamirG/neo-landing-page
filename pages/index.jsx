import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Spline from "@splinetool/react-spline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

export default function Index() {
  const [swiper, setSwiper] = useState();
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const mouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.addEventListener("mousemove", mouseMove);
    };
  }, []);

  function slidePrev() {
    swiper.slidePrev();
  }
  function slideNext() {
    swiper.slideNext();
  }

  const variants = {
    default: {
      x: cursor.x - 10,
      y: cursor.y - 10,
    },
  };

  return (
    <div className="h-screen">
      <div className="w-full text-white flex justify-between items-center">
        <div>
          <button
            onClick={slidePrev}
            className="text-[#21CDA8] flex items-center justify-center"
          >
            <LeftOutlined className="text-[48px] " />
            <LeftOutlined className="text-[24px] -translate-x-8" />
            <LeftOutlined className="text-[12px] -translate-x-12" />
          </button>
        </div>
        <Swiper
          loop="true"
          modules={[Navigation]}
          onSwiper={(e) => {
            console.log(e);
            setSwiper(e);
          }}
        >
          <SwiperSlide>
            <div className="w-full h-[90vh]">
              <Spline scene="https://prod.spline.design/Ql6XtVqUPNA46ByS/scene.splinecode" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-[90vh]">
              <Spline scene="https://prod.spline.design/4eVq1f51MTf6glI5/scene.splinecode" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div>
          <button
            onClick={slideNext}
            className="text-[#21CDA8] flex items-center justify-center"
          >
            <RightOutlined className="text-[12px] translate-x-12" />
            <RightOutlined className="text-[24px] translate-x-8" />
            <RightOutlined className="text-[48px]" />
          </button>
        </div>
      </div>

      <motion.div
        variants={variants}
        animate="default"
        transition={{ delay: 0, duration: 0 }}
        className="w-10 h-10 border-[2px] rounded-full border-[#21CDA8] fixed top-0 left-0 navbar z-[-1]"
      ></motion.div>

      {swiper?.activeIndex === 1 ? (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          transition={{ ease: "easeIn" }}
          className="text-[#21CDA8] font-[Rajdhani] font-medium text-[24px] -translate-y-40 bg-[rgba(250,250,250,0.2)] w-[300px] p-4 text-end border-r-4 border-[#21CDA8]"
        >
          <motion.p
            initial={{ opacity: 0, fontSize: 0 }}
            animate={{ opacity: 1, fontSize: "36px" }}
            transition={{ ease: "anticipate", delay: 0.5 }}
          >
            Neo Box
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 300 }}
          exit={{ width: 0 }}
          transition={{ ease: "easeIn" }}
          className="text-[#21CDA8] font-[Rajdhani] font-medium text-[24px] -translate-y-40 bg-[rgba(250,250,250,0.2)] w-[300px] p-4 text-end border-r-4 border-[#21CDA8]"
        >
          <motion.p
            initial={{ opacity: 0, fontSize: 0 }}
            animate={{ opacity: 1, fontSize: "36px" }}
            transition={{ ease: "anticipate", delay: 0.5 }}
          >
            Neo Card
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
