import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className='my-20 text-center text-4xl'>About
                <span className='text-neutral-500'> Me</span></h1>
            <div
                className='flex flex-wrap'>
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                     className='w-full lg:w-1/2 lg:p-8'>
                    {/* image */}
                    <div className='flex items-center justify-center'>
                        <img className='rounded-2xl' src="" alt="about section image" />
                    </div>

                </motion.div>
                <motion.div 
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro provident ab culpa numquam exercitationem, laborum praesentium adipisci dignissimos, rem assumenda sapiente nostrum facere perspiciatis iste ad commodi laboriosam. Perspiciatis, reprehenderit?
                        </p>
                        <button className=''>Download Resume</button>
                    </div>

                </motion.div>
            </div>
        </div >
  )
}

export default About