import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { AWSIcon, CPlusPlusIcon, CSS3Icon, DartIcon, FlutterIcon, GitIcon, HTML5Icon, JavaScriptIcon, MongoDBIcon, MySQLIcon, NextJsIcon, NodeJsIcon, PostmanIcon, PythonIcon, ReactIcon, TailwindCSSIcon, TypeScriptIcon, WordPressIcon } from 'developer-icons';


type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}   
    className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover over a skill for current proficiency
        </h3>

        <div className='grid grid-cols-4 gap-5'>
          <Skill percent='94%' Icon={JavaScriptIcon} directionLeft />
          <Skill percent='82%' Icon={TypeScriptIcon} directionLeft />
          <Skill percent='98%' Icon={HTML5Icon} directionLeft />
          <Skill percent='91%' Icon={CSS3Icon} directionLeft />
          <Skill percent='90%' Icon={ReactIcon} directionLeft />
          <Skill percent='87%' Icon={NodeJsIcon} directionLeft />
          <Skill percent='76%' Icon={AWSIcon} />
          <Skill percent='84%' Icon={MySQLIcon} />
          <Skill percent='78%' Icon={TailwindCSSIcon} />
          <Skill percent='80%' Icon={GitIcon} />
          <Skill percent='93%' Icon={WordPressIcon} />
          <Skill percent='90%' Icon={PythonIcon} />
        </div>

    </motion.div>
  )
}