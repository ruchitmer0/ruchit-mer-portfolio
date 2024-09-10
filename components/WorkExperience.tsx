import React from 'react'
import { motion } from 'framer-motion'
import EducationCard from './Card'
import { AWSIcon, CPlusPlusIcon, CSS3Icon, DartIcon, DjangoIcon, ExpressJsDarkIcon, ExpressJsLightIcon, FigmaIcon, FlutterIcon, GitHubIcon, HTML5Icon, JavaScriptIcon, JiraIcon, JQueryIcon, MongoDBIcon, MySQLIcon, NextJsIcon, NodeJsIcon, PostmanIcon, PythonIcon, ReactIcon, TailwindCSSIcon, TypeScriptIcon, VisualStudioCodeIcon, WordPressIcon } from 'developer-icons';


type Props = {}

export default function WorkExperience({}: Props) {

    const experiences = [
        {
          title: 'WordPress Developer',
          company: 'Fact Finders Pro',
          techStack: [
            <WordPressIcon key="wordpress" />,
            <GitHubIcon key="github" />,
            <CSS3Icon key="css3" />,
            <JavaScriptIcon key="javascript" />,
            <JiraIcon key="jira" />,
          ],
          startDate: 'July 2024 - Present',
          summaryPoints: [
            "Created and customized web pages using WordPress, ensuring responsive and user-friendly designs.",
            "Collaborated with a team to supervise updates and version control deploying GitHub, ensuring seamless integration and deployment.",
            "Implemented extensively with CSS, SCSS, and JavaScript in VS Code, increasing visual and functional aspects of website.",
            "Implemented SEO best practices, resulting in a 25% increase in organic search traffic over six months.",
            "Optimized website loading times, reducing page load speed by 40%, leading to promoted user retention and engagement.",

          ],
        },
        {
          title: 'FullStack Developer ',
          company: 'Freelance (Remote), US',
          techStack: [
            <HTML5Icon key="html5" />,
            <TypeScriptIcon key="typescript" />,
            <JQueryIcon key="jquery" />,
            <PostmanIcon key="postman" />,
            <VisualStudioCodeIcon key="vscode" />,
          ],
          startDate: 'March 2024 - July 2024',
          summaryPoints: [
            "Devised an e-commerce platform leveraging HTML5, CSS, TypeScript, and jQuery, overhauling user satisfaction by 25%.",
            "Implemented AI-powered cap customization, increasing user engagement by 20% through real-time generated previews.",
            "Designed responsive web pages, ensuring 100% cross-browser compatibility, promoting accessibility for all users.",
            "Managed version control via GitHub, facilitating 20+ project updates and seamless collaboration with developers/designers.",
            "Applied UX principles and web accessibility standards, enhancing interface usability and inclusivity by 30%.",
            "Integrated custom product features into CMS, improving client management efficiency by 15%.",

          ],
        },
        {
          title: 'Software Developer ',
          company: 'Dell Technologies',
          techStack: [
            <PythonIcon key="python" />,
            <MongoDBIcon key="mongodb" />,
            <AWSIcon key="aws" />,
            <DjangoIcon key="django" />,
            <FlutterIcon key="flutter" />,
            <DartIcon key="dart" />,
          ],
          startDate: 'February 2021 - July 2022',
          summaryPoints: [
            "Developed a robust API leveraging Python (Django) for an inventory management system, ensuring seamless communication between frontend and backend.",
            "Created a responsive web application operating Angular and a complementary mobile app operating Flutter.",
            "Optimized MongoDB schemas and implemented 15+ indexing strategies for better query performance.",
            "Deployed applications on AWS EC2, integrating S3 and Lambda for automated inventory alerts and reporting.",
            "Managed source code using GitHub, implementing branching strategies and facilitating collaborative development.",
            "Led development of a feature, boosting user engagement by 30% and product adoption by 15%.",
            "Reduced code review time by 20% with automated testing, enhancing team productivity and efficiency.",
            "Mentored junior developers, cutting onboarding time by 25% and speeding up team integration.",
            
          ],
        },
        {
          title: 'Web Developer Intern ',
          company: 'Espire, India',
          techStack: [
            <ReactIcon key="react" />,
            <NodeJsIcon key="nodejs" />,
            <ExpressJsDarkIcon key="expressjs" />,
            <MySQLIcon key="mysql" />,
            <TailwindCSSIcon key="tailwindcss" />,
            <FigmaIcon key="figma" />,
          ],
          startDate: 'August 2020 - January 2021',
          summaryPoints: [
            "Developed two websites for orthopedic implants using React JS, Node.js, Express.js, and MySQL, managing over 7,000+ products.",
            "Created a secure client portal with personalized pricing and products, utilizing RESTful APIs for data handling.",
            "Implemented a tabular product layout, improving load speed by 30%, and enhancing product visibility.",
            "Designed responsive, visually consistent pages with Tailwind CSS and Figma, increasing user engagement by 15%.",
            "Integrated a sticky cart feature, boosting checkout efficiency by 30%, improving overall client satisfaction.            ",
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
        Experience
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
