import React from 'react'
import { motion } from 'framer-motion'
import EducationCard from './Card'
import { AWSIcon, CPlusPlusIcon, DartIcon, FlutterIcon, JavaScriptIcon, MongoDBIcon, MySQLIcon, NextJsIcon, NodeJsIcon, PostmanIcon, PythonIcon, ReactIcon, TypeScriptIcon, WordPressIcon } from 'developer-icons';


type Props = {}

export default function Education({}: Props) {

    const experiences = [
      {
        title: 'Master of Science in Computer Science',
        company: 'University in Illinois, USA',
        techStack: [
          <NodeJsIcon key="nodejs" />,
          <ReactIcon key="react" />,
          <DartIcon key="dart" />,
          <FlutterIcon key="flutter" />,
          <AWSIcon key="aws" />,
          <MongoDBIcon key="mongodb" />,
          <PostmanIcon key="postman" />,

        ],
        startDate: 'Aug 2022 - May 2024',
        summaryPoints: [
          'Gained advanced knowledge in Machine Learning and Big Data for data-driven applications.',
          'Developed enterprise-level web applications in Enterprise Web Application using React and Node.js.',
          'Enhanced backend development skills with Database Organization, utilizing MySQL and MongoDB.',
          'Built scalable mobile applications during the Mobile Application Development coursework.',
          'Collaborated on group projects following Agile methodologies and version control via Git and GitHub.',
          'Achieved a 3.8 GPA.'
        ],
      },
      {
        title: 'Bachelor of Engineering in Computer Science',
        company: 'Savitribai Phule Pune University, Pune, India',
        techStack: [
          <PythonIcon key="python" />,
          <CPlusPlusIcon key="cplusplus" />,
          <JavaScriptIcon key="javascript" />,
          <TypeScriptIcon key="typescript" />,
          <MySQLIcon key="mysql" />,
        ],
        startDate: 'Aug 2018 - May 2022',
        summaryPoints: [
          'Built a solid foundation in Discrete Mathematics, Algorithms, and Theory of Computation.',
          'Enhanced proficiency in Object-Oriented Programming, focusing on clean code and efficient problem-solving.',
          'Developed web applications using HTML, CSS, JavaScript, and frameworks during Web Technology coursework.',
          'Designed database solutions using SQL for dynamic web applications, ensuring efficient data handling.',
          'Explored Computer Organization & Architecture for integrating hardware-software systems efficiently.',
          'Applied Database Management Systems knowledge to develop scalable applications for real-world use cases.'
        ],
      },
    ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}   
      className='h-screen flex flex-col text-left max-w-full px-10 justify-start mx-auto items-center'>
      
      <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl pt-24'>
        Education
      </h3>

      <div className='w-full flex p-10 pb-0 mb-16 space-x-5 overflow-x-scroll  snap-x snap-mandatory scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-track-gray-400/20 scrollbar-thumb-[#7a28cb]/80'>
        {experiences.map((exp, index) => (
          <EducationCard
            key={index}
            title={exp.title}
            company={exp.company}
            techStack={exp.techStack}
            startDate={exp.startDate}
            summaryPoints={exp.summaryPoints}
          />
        ))}
      </div>
    </motion.div>
  );
}
