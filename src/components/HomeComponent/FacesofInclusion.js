"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const carouselItems = [
  {
    title: "Meera’s Story",
    subtitle: "Hospitality Sector",
    description:
      "Meera lost her vision at 19. Today, she leads guest relations at Lemon Tree Hotels, proof that empathy and training can redefine service excellence.",
  },
  {
    title: "Priya’s Story",
    subtitle: "Education",
    description:
      "As a teacher with cerebral palsy, Priya mentors students online. Her workplace’s flexible tools made that possible.",
  },
  {
    title: "Ravi’s Story",
    subtitle: "Tech Sector",
    description:
      "As a developer with hearing loss, Ravi helped build accessible interfaces for clients — making digital experiences inclusive for millions.",
  },
];

const FacesofInclusion = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoScroll = () => {
    stopAutoScroll();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  const goToPrevious = () => {
    stopAutoScroll();
    setIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    startAutoScroll();
  };

  const goToNext = () => {
    stopAutoScroll();
    setIndex((prev) => (prev + 1) % carouselItems.length);
    startAutoScroll();
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 text-center px-4">
      {/* Top Section */}
      <div>
        <h2 className="md:text-4xl text-2xl font-semibold flex flex-col items-center justify-center gap-1 pb-10">
          <span className="text-black roboto-serif-medium md:text-4xl text-3xl">
            FACES OF INCLUSION
          </span>
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="lg:mt-6 flex items-center justify-center overflow-hidden text-black relative w-full max-w-6xl">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="absolute lg:left-4 left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#E8E8E8] rounded-full transition-colors duration-200 hover:bg-[#D0D0D0] active:scale-95"
          aria-label="Previous story"
        >
          <svg
            className="w-6 h-6 text-[#84298E] hover:text-[#84298E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="flex-1 flex justify-center px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselItems[index].title} // ✅ unique key instead of index
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h5 className="text-[#84298E] Poppins-semibold lg:text-2xl text-xl">
                {carouselItems[index].title}
              </h5>
              <h6 className="text-black Poppins-regular lg:text-xl text-lg pt-2">
                {carouselItems[index].subtitle}
              </h6>
              <p className="text-black Poppins-regular pt-4 lg:text-lg text-base">
                {carouselItems[index].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="absolute lg:right-4 right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#E8E8E8] rounded-full transition-colors duration-200 hover:bg-[#D0D0D0] active:scale-95"
          aria-label="Next story"
        >
          <svg
            className="w-6 h-6 text-[#84298E] hover:text-[#84298E]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FacesofInclusion;
