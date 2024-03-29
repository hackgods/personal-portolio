"use client"

import { favStacks, personalData } from '@/constants'
import { fadeUp } from '@/utils/motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const Bento = () => {
  const {ref, inView} = useInView({
    triggerOnce: true
})

  return (
    <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
      
      <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className="card order-1 lg:order-none col-span-2 border-gray-950">
        <div
          className="border-gradient animate-bgWaves h-full w-full rounded-2xl">
          <div className="border-gradient__box">
            <div className="mt-4">
              <p className="mb-2 text-2xl">
                Hello 😈 <br />
                I&apos;m <span className="text-indigo-500">Saurabh</span>
              </p>
              <br/>
              <p className="text-gray-400">
                  With a Master&apos;s in Advanced Computer Science from Newcastle University, I bring over three years of hands-on experience in software engineering. <br/> <br/>
                  My portfolio showcases a commitment to excellence, with projects demonstrating seamless integration of frontend technologies for optimal user experiences. I ensure robust functionality to complement frontend designs. <br/> <br/>
                  <b>Get in touch with me to discuss how I can contribute to your projects.</b>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
        className="card order-3 lg:order-none">
        <div className="transition-smooth bg-gray-950 hover:bg-zinc-900 hover:border-gray-900 text-white rounded-3xl relative z-10">
          <div className="flex items-center gap-2 p-4">
            <img className="w-8 invert" src="/x-twitter.svg" alt=""/>
            <span>Profile</span>
          </div>
          <div className="bg-[url('https://pbs.twimg.com/profile_banners/1737440772490711040/1709913760/1500x500')] bg-cover bg-no-repeat h-40 lg:h-32 relative px-3">
            <div className="absolute -bottom-11">
              <img className="w-[85px] rounded-full border-zinc-900 hover:border-zinc-950 border-4" src="me.jpeg" alt="My X profile picture"/>
            </div>
          </div>
          <div className="text-right px-3 pt-4 pb-2">
            <a href="https://twitter.com/hxckgxd" target="_blank" className="btn">Follow</a>
          </div>
          <div className="p-4">
            <p className="text-xl">Saurabh Suresh </p>
            <p className="text-zinc-400">@hxckgxd</p>
            <p className="text-zinc-600">A passionate Full stack web & mobile developer</p>
          </div>
        </div>
      </motion.div>



      <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp} 
      className="card order-5 lg:order-none lg:row-span-3 relative overflow-hidden p-8">
        <div className="h-full w-full mx-auto flex items-center relative z-10">
          <div className="space-y-4 w-full text-center">
          <Image 
            width="384"
            height="0"
            className="w-96 h-auto animate-pulse hover:animate-none"
            src="/newcastle2.png" alt="Newcastle University"
            loading="lazy"
            />
          <p className="text-xl bg-clip-text text-transparent bg-gradient-to-b to-neutral-200 from-neutral-400">Master&apos;s Advanced Computer Science</p>
          </div>
        </div>
        <div className="circle-blur rounded-3xl top-0 left-0 w-32"></div>
      </motion.div>



      <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp} 
      className="card bg-grad-black-indigo transition-smooth delay-50 order-2 lg:order-none h-48 md:h-full lg:h-auto p-4 relative overflow-hidden">
        <div className="flex flex-col justify-between h-full">
          <div className="available-label">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm">Available for work</span>
          </div>
          <p className="text-3xl lg:text-4xl text-zinc-300 text-right">
            Contact me
          </p>
          <img className="w-52 lg:w-44 absolute top-2 -right-4 z-0 opacity-20 -rotate-12" src="/envelope-regular.svg"
            alt="envelope" />
        </div>
        <a href={`mailto:${personalData.email}`} className="link-full"
          title="Click to send email"></a>
      </motion.div>


      <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp} 
      className="card order-6 lg:order-none overflow-hidden relative">
        <div className="flex h-full flex-col justify-between gap-5 p-5 relative">
            <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b to-neutral-200 from-neutral-600">100k +</p>   
            <p className="text-base relative text-zinc-300 z-10">Lines of code written</p> 
            <div className="circle-blur rounded-3xl"></div>
        <img className="w-52 lg:w-44 absolute top-2 -right-4 z-0 opacity-100 -rotate-12 z-0" src="/code.svg" alt="Code" />
        </div>
      </motion.div>


      <motion.div 
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className="card bg-backdrop-gradient order-4 lg:order-none row-span-2 col-span-2 p-2 relative group">
        <div className="bg-backdrop-blur">
          <p className="font-medium text-2xl lg:text-3xl text-black/70">Favourite Tech Stacks</p>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-8 gap-8 mt-8 justify-between">

        {favStacks.map((item, index) => (
                <Image
                    key={index}
                    src={item.src}
                    width='50'
                    height='50'
                    className='w-20 h-20 object-contain'
                    alt={`${item.name}`}
                    loading="lazy"
                />
        ))}
          </div>
        </div>
        <a href="https://github.com/hackgods/" className="link-full" title="HackGods Github"
          target="_blank"></a>
      </motion.div>

    </section>
  )
}

export default Bento