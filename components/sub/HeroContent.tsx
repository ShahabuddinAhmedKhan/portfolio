"use client";
import React from 'react';
import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import Lottie from 'lottie-react';
import boy from "../../public/spaceboy.json"
import { ImDownload2 } from 'react-icons/im';

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex sm:flex-row flex-col items-center justify-between px-20 mt-40 z-[20] '
        >
            <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
                <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[15px]  border border-[#7042f88b] opacity-[0.9]'>
                    
                    <h1 className='Welcome-text text-[23px] px-5'>Shahabuddin Ahmed Khan</h1>

                </motion.div>
                <motion.div variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 2xl:text-7xl lg:text-6xl text-5xl    font-bold text-white max-w-[1000px] w-auto h-auto'
                >
                    <span>
                        Brewing
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#5e4578] to-cyan-500'> logic </span>
                        with a shot of espresso
                    </span>

                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-xl lg:text-lg text-gray-400 my-5 max-w-[600px]'>
                    I’m a Computer Science and Engineering graduate from BRAC University with a solid foundation in both frontend and backend development. I’m passionate about building smooth, responsive web applications and exploring innovative technologies. As an AI/ML enthusiast, I’m constantly learning and experimenting with intelligent systems, and I’m eager to collaborate on projects that push the boundaries of what tech can do.

                </motion.p>
                <motion.a
                    variants={slideInFromLeft(1)}
                    href="/Shahabuddin Ahmed Khan Resume.pdf"
                    download
                    className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] flex justify-center gap-5 items-center"
                >
                    <ImDownload2 />
                    Resume
                </motion.a>


            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className='flex w-full h-full justify-end items-center    '
            >
                <Lottie animationData={boy} loop={true} className="max-w-[500px] py-10 text-center text-white cursor-pointer rounded-lg hover:scale-105 transition  justify-end hidden sm:block opacity-75 " />

            </motion.div>

        </motion.div>
    );
};

export default HeroContent;