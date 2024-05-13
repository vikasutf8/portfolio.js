import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { RiNextjsLine } from "react-icons/ri";
import { RiNodejsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { TbBrandDocker } from "react-icons/tb";

const Technology = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>

        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNextjsLine className='text-4xl'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-4xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsFill className='text-4xl text-green-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-4xl'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-4xl text-green-800'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssLine className='text-4xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandFramerMotion className='text-4xl text-pink-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-4xl text-sky-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandDocker className='text-4xl text-blue-400'/>
            </div>
            
           
        </div>
    </div>
  )
}

export default Technology