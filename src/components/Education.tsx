import React from 'react'
import {motion} from 'framer-motion'
import { ImBooks } from "react-icons/im";
import Educations from './Educations'

export interface IEducation {
    _id: number,
    institution: string,
    degree: string,
    from_date: string,
    to_date: string,
    description ?: string,
    thumbnail: string
}


export default function Education() {
    const educations: IEducation[] = [
        {
            _id: 1,
            institution: "Coderhouse",
            degree: "Desarrollo FrontEnd",
            from_date: "2021",
            to_date: "2022",
            thumbnail: "https://i.ibb.co/RgjGxsL/coderhouse-logo.png"
        },
        {
            _id: 2,
            institution: "Platzi",
            degree: "Desarrollo Web",
            from_date: "2021",
            to_date: "2022",
            thumbnail: "https://i.ibb.co/QNvsgjG/platzi.png"
        },
        {
            _id: 3,
            institution: "Universidad Nacional de La Matanza",
            degree: "Ingenieria en Informatica",
            from_date: "2022",
            to_date: "Actualmente",
            thumbnail: "https://i.ibb.co/WkchYXM/unlam-universidad-nacional-de-la-matanza-logo-B665-E562-AA-seeklogo-com.png"
        },
        {
            _id: 4,
            institution: "Udemy",
            degree: "Desarrollo web TypeScript",
            from_date: "2024",
            to_date: "2024",
            thumbnail: "https://i.ibb.co/LzXxjCB/Udemy-Logo.png"
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
        <ImBooks color="#1d4ed8" size={"24px"} />
        <h3 className="text-lg md:text-xl text-blue-700">EDUCACION</h3>
      </div>
    <ol className="relative border-s border-gray-200 dark:border-gray-700 my-auto">
      {
        educations.reverse().map((ex) => {
          return <Educations key={ex._id} data={ex} />
        })
      }
    </ol>
    </motion.section>
  )
}
