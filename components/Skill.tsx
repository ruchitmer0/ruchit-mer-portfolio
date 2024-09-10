import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
    Icon: React.ElementType;
    percent: string;
}

export default function Skill({ directionLeft, Icon, percent}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div 
        initial={{
            x: directionLeft ? -200 : 200,
            opacity:0
        }}
        transition={{ duration:1 }}
        whileInView={{ opacity: 1, x:0}}
        viewport={{once: true}}
        className='flex items-center justify-center rounded-full border border-gray-500 w-24 h-24 md:w-26 md:h-26 2xl:w-32 2xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        ><Icon className='bg-transparent w-12 h-12 md:w-14 md:h-14 2xl:w-16 2xl:h-16' /></motion.div>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white w-24 h-24 md:w-26 md:h-26 2xl:w-32 2xl:h-32 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{percent}</p>
            </div>
        </div>
    </div>
  )
}