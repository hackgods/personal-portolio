"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image';

interface Props {
    src: string;
    index: number;
}

const SkillDataProvider = ({ src, index} : Props) => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.06
  return (
        <motion.div
        ref={ref}
        initial="hidden"
        variants={imageVariants}
        animate={inView ? "visible" : "hidden"}
        custom={index}
        transition={{delay: index * animationDelay}}
        >
                <Image
                    src={src}
                    width='80'
                    height='0'
                    className='w-20 h-20 object-contain'
                    alt='skill image'
                    loading="lazy"
                />
        </motion.div>
  )
}

export default SkillDataProvider