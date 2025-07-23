"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'


const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Driven By Curiosity, Guided By Best Practices
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <h1 className="Welcome-text text-[13px]">
            Sometimes flooded by errors but
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            Always learning. Always delivering.
        </motion.div>
    </div>
  )
}

export default SkillText