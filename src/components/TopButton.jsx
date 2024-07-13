import React from "react";
import { FaArrowLeftLong  } from "react-icons/fa6"; // Changed to FaArrowUp for a more appropriate icon
import { FaArrowUp } from "react-icons/fa6";
const TopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a href="#top"
        onClick={scrollToTop}
        className="w-8 h-18 md:w-12 md:h-28 flex flex-col items-center justify-center rounded-full border-[1px] border-gray-400 bg-white hover:bg-gray-400 transition-colors duration-200 p-4 hover:scale-105 "
      >
        <FaArrowUp className="text-gray-800 mb-2" />
        <p className="text-gray-800 text-sm md:font-semibold" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
           Top
        </p>
      </a>
    </div>
  );
};

export default TopButton;
