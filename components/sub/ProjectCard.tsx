"use client";

import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"

interface Props {
  src: string;
  title: string;
  description: string;
  live: string
  git: string
}

const ProjectCard = ({ src, title, description, live, git }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] h-full">
      <div className="p-10 ">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain opacity-90 rounded-xl"
        />
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="flex justify-around gap-5 mt-5">
          <motion.a
            variants={slideInFromLeft(1)}
            href={live}
            target="_blank"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex justify-center gap-5 items-center flex-1"
          >

            Live Link
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            href={git}
            target="_blank"
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex justify-center gap-5 items-center flex-1"
          >

            Git Repository
          </motion.a>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;