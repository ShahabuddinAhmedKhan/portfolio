"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    // width: number;
    // height: number;
    index: number;
}

const SkillDataProvider = ({ src,  index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }

    const animationDelay = 0.3
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{ delay: index * animationDelay }}
            className="relative w-[25px] sm:w-[50px] md:w-[65px] lg:w-[90px] xl:w-[120px] aspect-square"
        >
            <Image
                src={src}
                fill
                className="object-contain bg-transparent"
                alt='skill image'
                sizes="(max-width: 768px) 100vw, 50vw"
            />
        </motion.div>
    )
}

export default SkillDataProvider