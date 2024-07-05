"use client"
import React from 'react'
import { ISkills } from './Skills'
import {motion} from 'framer-motion'
import Image from 'next/image'

interface SkillsProps {
    data: ISkills
}

export default function Skill(data: SkillsProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col gap-4 items-center justify-evenly relative p-6 w-[120px] sm:w-[140px] h-[120px] sm:h-[140px] border border-transparent rounded-xl transition-all"
    >
      <Image
        src={data.data.image}
        alt={data.data.language}
        width={500}
        height={500}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
      />
      <h4 className="sm:text-md text-center text-sm text-neutral-400 absolute bottom-0">{data.data.language}</h4>
    </motion.article>
  )
}
