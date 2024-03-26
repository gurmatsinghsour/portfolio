"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`w-full fixed top-0 shadow-lg bg-[#03001417] backdrop-blur-md z-50 px-10 transition-all duration-300 ${expanded ? 'h-[140px]' : 'h-[65px]'} hidden md:block`}>
      <div className="w-full flex flex-row justify-center m-auto">
        <div className={`h-full duration-500 flex pt-2 ${expanded ? 'w-[500px]' : 'w-[200px]'} items-center justify-center`}>
          <div className="flex justify-center w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 relative">
            <button onClick={toggleHeight} className="cursor-pointer">
              Menu
            </button>
          </div>
          {expanded && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={slideInFromTop}
              className="flex flex-col items-center justify-center absolute top-14 bg-[#0300145e] rounded-full shadow-lg rounded-md mt-4 py-2 w-full"
            >
              <div className="flex flex-row items-center justify-center gap-16">
                <a href="#about-me" className="text-gray-200 hover:text-gray-400">About Me</a>
                {/* <span className="text-gray-400">|</span> */}
                <a href="#blog" className="text-gray-200 hover:text-gray-400">Experience</a>
                {/* <span className="text-gray-400">|</span> */}
                <a href="#resume" className="text-gray-200 hover:text-gray-400">Projects</a>
                {/* <span className="text-gray-400">|</span> */}
                <a href="#projects" className="text-gray-200 hover:text-gray-400">Resume</a>
                {/* <span className="text-gray-400">|</span> */}
                <a href="#certifications" className="text-gray-200 hover:text-gray-400">Certifications</a>
                {/* <span className="text-gray-400">|</span> */}
                <a href="#about-me" className="text-gray-200 hover:text-gray-400">Blogs</a>
                {/* <span className="text-gray-400">|</span> */}
                <a href="#blog" className="text-gray-200 hover:text-gray-900">Contact</a>
              </div>
            
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
