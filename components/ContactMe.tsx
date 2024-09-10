import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

type Props = {}
type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

export default function ContactMe({}: Props) {
    let[formData,setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    let handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;

        setFormData((currData) =>({
            ...currData,
            [name]: value,
        }));
    }

    let handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ duration: 1.5 }}   
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 gap-10 mt-20 md:mt-32'>
                
                {/* Contact Details */}
                <div className='flex flex-col space-y-8 2xl:space-y-10'>
                    <h4 className='text-xl 2xl:text-4xl font-semibold'>
                        I have got just what you need.{" "}
                        <span className='underline decoration-[#7a28cb]/50'>Let&#39;s Talk.</span>
                    </h4>

                    <div className='space-y-8 2xl:space-y-10'>
                        <div className='flex items-center space-x-5'>
                            <PhoneIcon className='text-[#7a28cb] h-5 w-5 2xl:h-7 2xl:w-7 animate-pulse'/>
                            <p className='text-xl 2xl:text-2xl'>+1 872 258 3907</p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <EnvelopeIcon className='text-[#7a28cb] h-5 w-5 2xl:h-7 2xl:w-7 animate-pulse'/>
                            <p className='text-xl 2xl:text-2xl'>ruchitmer00@gmail.com</p>
                        </div>
                        <div className='flex items-center space-x-5'>
                            <MapPinIcon className='text-[#7a28cb] h-5 w-5 2xl:h-7 2xl:w-7 animate-pulse'/>
                            <p className='text-xl 2xl:text-2xl'>Chicago, IL</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div>
                    <form onSubmit={handleSubmit} className='flex flex-col space-y-2 w-full mx-auto'>
                        <div className='flex space-x-2'>
                            <input  className='contactInput w-full' type="text" placeholder='Name' value={formData.name} onChange={handleInputChange} name='name' />
                            <input  className='contactInput w-full' type="email" placeholder='Email' value={formData.email} onChange={handleInputChange} name='email'/>
                        </div>
                        <input className='contactInput w-full' type="text" placeholder='Subject' value={formData.subject} onChange={handleInputChange} name='subject' />
                        <textarea  className='contactInput w-full' placeholder='Message' value={formData.message} onChange={handleInputChange} name='message' />
                        <button className='bg-[#7a28cb] py-4 2xl:py-5 px-8 2xl:px-10 rounded-md text-white font-bold text-base 2xl:text-lg'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}