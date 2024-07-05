import React from "react";
import Experiences from "./Experiences";
import { motion } from 'framer-motion'
import { MdOutlineWork } from "react-icons/md";

export interface IExperience {
  _id: number;
  position: string;
  enterprise: string;
  from_date: string;
  to_date: string;
  time?: string;
  thumbnail: string
}

export default function Experience() {


  const experiences: IExperience[] = [
    {
      _id: 1,
      position: "Desarrollador JR",
      enterprise: "TFM IT Solutions",
      from_date: "Julio 2024",
      to_date: "Actualmente", 
      thumbnail: "https://i.ibb.co/8z51PCs/tfm-it-logo.jpg"
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full container max-w-[1280px] mx-auto rounded-xl p-10 flex flex-col gap-10"
    >
    <div className="flex gap-3 items-center">
        <MdOutlineWork color="#1d4ed8" size={"24px"} />
        <h3 className="text-lg md:text-xl text-blue-700">EXPERIENCIA</h3>
      </div>
    <ol className="relative border-s border-gray-200 dark:border-gray-700 my-auto">
      {
        experiences.reverse().map((ex) => {
          return <Experiences key={ex._id} data={ex} />
        })
      }
    </ol>
    </motion.section>
  );
}
