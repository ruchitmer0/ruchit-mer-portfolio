import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import { motion } from "framer-motion";
import { useDarkMode } from './DarkModeContext';

type Props = {}

export default function Header({}: Props) {
  const { isDarkMode } = useDarkMode();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only run this on the client-side
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/document/ruchit-mer-resume.pdf'; // Use the correct public folder path
    link.download = 'RuchitMerResume.pdf'; // File name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      {/* Social Icons */}
      <motion.div 
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.25 }}
        className="flex flex-row items-center"
      >
        <SocialIcon target="_blank" url='https://www.linkedin.com/in/ruchit-mer/' fgColor={isDarkMode ? 'gray' : '#111827'} bgColor='transparent'/>
        <SocialIcon target="_blank" url='https://github.com/ruchitmer0' fgColor={isDarkMode ? 'gray' : '#111827'} bgColor='transparent'/>
        <SocialIcon target="_blank" url='https://www.instagram.com/m.er.ruchit/' fgColor={isDarkMode ? 'gray' : '#111827'} bgColor='transparent'/>
        <SocialIcon target="_blank" url='https://t.me/ruchit_mer/' fgColor={isDarkMode ? 'gray' : '#111827'} bgColor='transparent'/>
      </motion.div>

      {/* Contact and Resume */}
      <motion.div 
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.25 }}
        className='flex flex-row items-center cursor-pointer'
      >
        <SocialIcon url='#contact' className='cursor-pointer' network='email' fgColor={isDarkMode ? 'gray' : '#111827'} bgColor='transparent'/>
        <a href="#contact"> 
          <p className={`uppercase hidden md:inline-flex text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-950'}`}>Get in Touch</p>
        </a>
        {isClient && (
          <>
            <DocumentArrowDownIcon 
              onClick={handleDownload} 
              className={`h-6 w-6 ml-4 mr-2 cursor-pointer ${isDarkMode ? 'text-gray-400' : 'text-gray-950'}`} 
            />
            <p 
              onClick={handleDownload} 
              className={`uppercase hidden md:inline-flex text-sm cursor-pointer pt-0 ${isDarkMode ? 'text-gray-400' : 'text-gray-950'}`}>
              Resume
            </p>
          </>
        )}
      </motion.div>
    </header>
  );
}
