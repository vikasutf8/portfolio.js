import React from 'react'
import { delay, motion } from "framer-motion"
import profilepic from '../assets/profilepic.jpg'
const container =(delay) => ({
    hidden: { opacity: 0 ,x: -100},
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            delay: delay,
            duration: 0.5
        }
    }
})

const Hero = () => {


  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-36'>
        <div className=' flex flex-wrap'>
            <div className=' w-full lg:w-1/2'>
                <div className=' flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0)}
                    initial='hidden'
                    animate='visible'
                    className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Vikas Arya</motion.h1>
                    <motion.span 
                      variants={container(0.5)}
                      initial='hidden'
                      animate='visible'
                    className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>
                        Full stack developer
                    </motion.span>
                    <motion.p 
                      variants={container(1)}
                      initial='hidden'
                      animate='visible'
                    className='my-2 max-w-xl py-6 font-light tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eos sunt facere doloremque error repellendus, commodi deleniti eligendi temporibus atque quo saepe rem, eius itaque possimus nam assumenda dignissimos nemo.</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img
                    initial ={{x: 100, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 1, duration: 1.5}}
                    src={profilepic} alt="profile pic" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero