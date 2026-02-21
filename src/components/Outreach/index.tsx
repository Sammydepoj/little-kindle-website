"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bright from "@/assets/images/bright.jpg";
import CalendarIcon from "@/assets/icons/CalendarIcon";
import img1 from "@/assets/images/bright-beginnings/img1.jpg";
import img2 from "@/assets/images/bright-beginnings/img2.jpg";
import img3 from "@/assets/images/bright-beginnings/img3.jpg";
import img4 from "@/assets/images/bright-beginnings/img4.jpg";
import img5 from "@/assets/images/bright-beginnings/img5.jpg";
import img6 from "@/assets/images/bright-beginnings/img6.jpg";
import img7 from "@/assets/images/bright-beginnings/img7.jpg";
const carouselImages = [bright, img1, img2, img3, img4, img5, img6, img7];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
      scale: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 },
      scale: { duration: 0.3 },
    },
  }),
};

const AUTO_PLAY_INTERVAL = 4000;

const Outreach = () => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevIndex]) => {
      const nextIndex =
        (prevIndex + newDirection + carouselImages.length) %
        carouselImages.length;
      return [nextIndex, newDirection];
    });
  }, []);

  const goToSlide = useCallback((index: number) => {
    setPage(([prevIndex]) => {
      const direction = index > prevIndex ? 1 : -1;
      return [index, direction];
    });
  }, []);

  // Auto-play
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, AUTO_PLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isHovered, paginate]);

  return (
    <section className="w-full bg-[#FCFCFD] border-[4px] border-[#F7F7F8] p-2 md:p-[40px] rounded-[16px] gap-[30px] flex flex-col items-center">
      <div
        className="flex flex-col gap-[30px] items-center max-w-[700px] relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Carousel Container */}
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                alt={`Bright Beginnings ${currentIndex + 1}`}
                src={carouselImages[currentIndex]}
                fill
                className="object-cover object-top rounded-2xl"
                sizes="(max-width: 700px) 100vw, 700px"
                priority={currentIndex === 0}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
            aria-label="Previous image"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
            aria-label="Next image"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Calendar badge */}
          <div className="rounded-3xl bg-white py-1 md:py-3 px-2 md:px-4 absolute bottom-4 left-4 flex items-center gap-1 md:gap-3 z-10 shadow-sm">
            <CalendarIcon />
            May 2025
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to image ${index + 1}`}
              className={`rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-3 bg-[#3A5774]"
                  : "w-3 h-3 bg-[#D1D5DB] hover:bg-[#9CA3AF]"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[10px]">
        <h1 className="font-semibold text-[#1A1A1A] text-[20px]">
          Bright Beginnings
        </h1>
        <p className="text-[#4C4C4D] text-base font-normal">
          We sparked a brighter future at St. Raphael&apos;s Nursery and Primary
          School, Okokomaiko! Little Kindles Africa (LKA) visited this vibrant
          Lagos community to replace outdated chalkboards with modern marker
          boards and provide essential stationery kits. In underserved areas,
          the lack of basic tools often dimmed a child&apos;s potential; by
          equipping these classrooms, we removed significant barriers to
          learning. This donation served as a vital step in our mission to
          provide inclusive education across Nigeria. We ensured that every
          student could participate fully, proving that with the right
          resources, no child is left behind.
        </p>
      </div>
    </section>
  );
};

export default Outreach;
