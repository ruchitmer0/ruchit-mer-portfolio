import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img
            initial={{
                x:-200,
                opacity: 0,
            }}
            transition={{
                duration: 1.2,
            }}
            whileInView={{
                x:0,
                opacity: 1,
            }}
            viewport={{once:true}}
            src='Image/20240511_141210.jpg'
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover pb-5 md:rounded-lg md:w-64 md:h-95 lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10 xl:mt-5'>
            <h4 className='text-xl md:text-2xl xl:text-3xl 2xl:text4xl font-semibold'>Here is a <span className='underline decoration-[#7a28cb]'>little</span> background</h4>
            <p className='text-sm md:text-lg text-justify'>
            I&#39;m a passionate Software Developer with over 2 years of experience, focused on delivering impactful and scalable solutions. 
            From building robust web applications to creating seamless user experiences, I combine creativity, precision, and 
            technical expertise in every project. I excel in collaborative environments where I can make a difference, and my 
            team trusts me to tackle challenges with dedication and deliver on time. With expertise in React, Node.js, Express, Git, 
            and Agile methodologies, I ensure clean, maintainable code. Let&#39;s collaborate to create innovative software solutions 
            and bring ideas to life with creativity and dedication ✨!
            </p>
        </div>
    </motion.div>
  )
}