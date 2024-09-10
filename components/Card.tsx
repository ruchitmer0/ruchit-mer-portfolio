import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'
import { useDarkMode } from './DarkModeContext';

type Props = {
  title: string;
  company: string;
  techStack?: ReactElement[];
  startDate: string;
  summaryPoints?: string[];
  imageSrc?: string;
}

export default function Card({ title, company, techStack=[], startDate, summaryPoints=[], imageSrc }: Props) {
  const { isDarkMode } = useDarkMode();
  return (
    <article className={`flex flex-col ${isDarkMode ? '' :'border border-gray-300' } rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center 
      p-10 cursor-pointer transition-opacity duration-200 overflow-y-auto scrollbar-thin 
      scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-400/20 scrollbar-thumb-[#7a28cb]/80 shadow-2xl
      ${isDarkMode ? 'bg-[#292929]/60' : 'bg-[#F0F0F0]/60'} ${isDarkMode ? 'hover:bg-[#292929]' : 'hover:bg-[#F0F0F0]'}`}
      >
      {imageSrc && (
        <motion.img 
        initial={{ opacity:0, y:-100 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once:true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src={imageSrc}
        alt={company}
        />
      )}
        <div className='px-0 md:px-10'>
          <h4 className={` ${isDarkMode ? 'text-gray-500' : 'text-gray-900'} text-3xl font-light `}>{title}</h4>
          <p className={` ${isDarkMode ? 'text-gray-500' : 'text-gray-900'} font-bold text-xl mt-1 `}>{company}</p>
          <div className='flex space-x-2 my-2'>
          {techStack.map((tech, index) => (
            <div key={index} className='flex items-center h-6 w-6 rounded-full bg-transparent'>
            {tech}
          </div>
          ))}
        </div>

          <p className={` ${isDarkMode ? 'text-gray-500' : 'text-gray-900'}uppercase py-5 `}>{startDate}</p>

          <ul className={` ${isDarkMode ? 'text-gray-500' : 'text-gray-900'}list-disc space-y-4 ml-5 text-md scrollbar-thin 
          scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-400/20 scrollbar-thumb-[#7a28cb]/80`}>
          {summaryPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
          </ul>
        </div>
    </article>
  )
}
