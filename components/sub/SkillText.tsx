"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
       
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='mt-[10px] mb-[15px] pb-6 text-5xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600'>
            Expert in 50+ technologies
        </motion.div>

    </div>
  )
}

export default SkillText