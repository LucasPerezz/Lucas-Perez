import React from 'react'
import { motion } from 'framer-motion'
import { BsCode } from 'react-icons/bs'
import Project from './Project'

export interface IProject {
    _id: number,
    title: string,
    description: string,
    thumbnail: string,
    skills: string[],
    github?: string,
    demo?: string
}

export default function Projects() {

    const projects: IProject[] = [
        {
            _id: 1,
            title: "Alaska Indumentaria",
            description: "Projecto final del curso de React.Js realizado en Coderhouse",
            thumbnail: "https://i.ibb.co/Qk0ppLH/Opera-Captura-de-pantalla-2022-07-29-113632-alaskaindumentaria-vercel-app.png",
            skills: ["React.Js", "Firebase", "Bootstrap"],
            github: "https://github.com/LucasPerezz/alaskaIndumentaria-perez",
            demo: "https://alaskaindumentaria.vercel.app/"
        },
        {
            _id: 2,
            title: "Batatacoin",
            description: "Pagina web realizado en curso de platzi",
            thumbnail: "https://i.ibb.co/pXFMWKV/batatacoin.jpg",
            skills: ["Html", "Css"],
            demo: "https://lucasperezz.github.io/batatacoin/",
            github: "https://github.com/LucasPerezz/batatacoin"
        },
        {
            _id: 3,
            title: "NextGames",
            description: "Pagina web realizada con JavaScript Vanilla",
            thumbnail: "https://i.ibb.co/xC47CPj/Opera-Captura-de-pantalla-2022-07-08-184443-127-0-0-1.png",
            skills: ["Html", "Tailwind Css", "JavaScript", "Firebase"],
            demo: "https://lucasperezz.github.io/nextgames/public/",
            github: "https://github.com/LucasPerezz/nextgames"
        },
        {
            _id: 4,
            title: "Player 1",
            description: "Aplicacion web para el consumo de rawg API",
            thumbnail: "https://i.ibb.co/xGCYnZD/Captura.jpg",
            skills: ["React.Js", "Tailwind Css"],
            demo: "https://player1-eight.vercel.app/",
            github: "https://github.com/LucasPerezz/player1"
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
        <BsCode color="#1d4ed8" size={"24px"} />
        <h3 className="text-lg md:text-xl text-blue-700">PROYECTOS</h3>
      </div>
      <div className='flex flex-wrap gap-4 justify-center'>
        {
            projects.map((pro) => {
                return <Project key={pro._id} data={pro} />
            })
        }
      </div>
    </motion.section>
  )
}
