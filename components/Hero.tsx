import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import Image from 'next/image';
import ruchit from '../public/Image/Ruchit.jpg'

type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Ruchit Mer", 
            "Guy-who-loves-ice-cream.tsx", 
            "<ButLovesToCodeMore;) />"
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <Image className='relative rounded-full h-36 w-36 mx-auto object-cover' src={ruchit} alt="ruchit's image"/>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                FullStack Developer
            </h2>
            <h1 className='text-3xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text} </span>
                <Cursor cursorColor='gray'></Cursor>
            </h1>
            <div className='pt-5'>
            <Link href="#about"><button className='heroButton'>About</button></Link>
            <Link href="#education"><button className='heroButton'>Education</button></Link>
            <Link href="#experience"><button className='heroButton'>Experience</button></Link>
            <Link href="#skills"><button className='heroButton'>Skills</button></Link>
            </div>
        </div>
    </div>
  )
}