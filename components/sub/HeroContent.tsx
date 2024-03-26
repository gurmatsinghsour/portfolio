"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const HeroContent = () => {

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-80 w-full z-[20] "
    >
      <div className="h-full w-full flex flex-col gap-4 justify-center items-center m-auto text-center">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Gurmat Singh Sour
            <br />
            <span className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Software Developer{" "}
            </span>

          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400  max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 w-full button-primary text-center text-white cursor-pointer rounded-lg max-w-[300px]"
        >
          Learn More!
        </motion.a>
      </div>


    </motion.div>
  );
};

export default HeroContent;
