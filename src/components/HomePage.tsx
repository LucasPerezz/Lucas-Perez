"use client"
import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import {motion} from 'framer-motion'
import Image from 'next/image';



export default function HomePage() {
  return (
    <motion.section initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}} className='w-full max-w-[1280px] mx-auto min-h-screen sm:min-h-max bg-neutral-950 flex flex-col md:flex-row justify-center sm:justify-between items-center rounded-2xl py-2 md:px-10 divide-y-2 divide-blue-700 md:divide-y-0 md:divide-x-2'>
        <div className='relative flex flex-col sm:flex-row gap-4 sm:gap-10 items-center justify-between'>
            <Image src="https://i.ibb.co/yBnLnN5/lucasperez-portfolio.jpg" alt="Lucas Perez" width={200} height={200} className='w-[160px] sm:[180px] lg:w-[200px] border-8 shadow-md border-neutral-400 rounded-xl relative'/>
            <div className='flex flex-col items-center justify-center md:justify-start md:items-start gap-1 md:gap-0'>
                <h1 className='text-blue-700 text-2xl lg:text-4xl font-semibold tracking-in-expand'>LUCAS TOMAS PEREZ</h1>
                <h2 className='text-neutral-300 font-light text-xl lg:text-2xl slide-in-top'>Desarrollador Full Stack</h2>
                <div className='flex gap-2 mt-2'>
                    <a href="https://www.linkedin.com/in/lucasperez26/"><FaLinkedin color='gray' size={"28px"}/></a>
                    <a href="https://github.com/LucasPerezz"><IoLogoGithub color='gray' size={"28px"}/></a>
                </div>
            </div>
        </div>
        <div className='flex flex-col gap-2 m-6 p-5'>
            <span className='flex flex-col gap-1'>
                <h3 className='text-xl lg:text-2xl text-blue-700'>E-Mail</h3>
                <p className='text-neutral-300 text-base lg:text-lg font-light'>perezlucas2609@gmail.com</p>
            </span>
            <span className='flex flex-col gap-1'>
                <h3 className='text-xl lg:text-2xl text-blue-700'>Nacionalidad</h3>
                <p className='text-neutral-300 text-base lg:text-lg font-light'>Argentina</p>
            </span>
        </div>
    </motion.section>
  )
}
