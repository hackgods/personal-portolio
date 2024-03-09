"use client"

import { fadeUp } from '@/utils/motion'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const NoMobileScreen = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

  return (
    <motion.div 
    ref={ref}
    initial="hidden"
    animate={inView ? "visible" : "hidden"}
    variants={fadeUp}
    
    className="bg-zinc-950 border-4 border-zinc-800 rounded-3xl flex flex-col items-center justify-center gap-3 h-fit relative overflow-hidden p-10 m-10">
        <div className="z-20 justify-center items-center px-5">
          <p className='text-3xl text-zinc-200 text-justify'>Saurabh Suresh Portfolio</p>
          <p className='text-2xl text-zinc-400 mt-5'>Not available in mobile view only on desktop</p>
        </div>
        <div className="circle-blur-big rounded-xl top-0 left-0 z-10"></div>
        <div className="absolute top-50 left-0 w-full h-full z-20">
            <img
              src="/overlay-4.svg"
              alt="Overlay"
              className="w-full h-full object-cover"
            />
        </div>
    </motion.div>
  )
}

export default NoMobileScreen