"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

const UpdateCard = ({
  images,
  event,
  details,
}: {
  event: string;
  details: string;
  images: (string | StaticImageData)[];
}) => {
  const [[currentIndex, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prevIndex]) => {
        const nextIndex =
          (prevIndex + newDirection + images.length) % images.length;
        return [nextIndex, newDirection];
      });
    },
    [images.length],
  );

  const goToSlide = useCallback((index: number) => {
    setPage(([prevIndex]) => {
      const dir = index > prevIndex ? 1 : -1;
      return [index, dir];
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
    <div className="bg-[#F7F7F8] p-3 md:p-8 rounded-2xl flex flex-col max-w-[620px] mx-auto h-full">
      {/* Carousel */}
      <div
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
              alt={`${event} ${currentIndex + 1}`}
              src={images[currentIndex]}
              fill
              className="object-cover object-top rounded-2xl"
              sizes="(max-width: 620px) 100vw, 620px"
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Previous image"
        >
          <svg
            width="16"
            height="16"
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
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-md transition-all duration-200 hover:scale-110"
          aria-label="Next image"
        >
          <svg
            width="16"
            height="16"
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
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {images.map((_, index) => (
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

      {/* Text content */}
      <div className="mt-4">
        <h5 className="text-[#262626] text-base font-semibold my-4">{event}</h5>
        <p className="text-[#4C4C4D] text-sm font-normal text-center md:text-justify">
          {details}
        </p>
      </div>
    </div>
  );
};

export default UpdateCard;
