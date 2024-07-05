"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { HiMiniCodeBracket } from "react-icons/hi2";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { HiOutlineCloud } from "react-icons/hi2";
import { HiOutlineBriefcase } from "react-icons/hi2";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export default function AboutMe() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full container max-w-[1280px] mx-auto rounded-xl p-10 flex flex-col gap-10"
    >
      <div className="flex gap-3 items-center">
        <HiMiniCodeBracket color="#1d4ed8" size={"24px"} />
        <h3 className="text-lg md:text-xl text-blue-700">SOBRE MI</h3>
      </div>
      <p className="text-neutral-400 text-lg md:text-xl font-light text-justify">
        Apasionado de la programación. Resiliente, competitivo y persistente.
        <br /> Mi objetivo es poner en práctica todos los conocimientos adquiridos durante mi formación académica y ser parte de un equipo que me permita desarrollarme personal y profesionalmente.
        <br />
        Actualmente estudio Ingeniería Informática en la Universidad Nacional de La Matanza.
      </p>
      <div className='md:flex flex gap-3 max-w-lg'>
        <button className='border h-full rounded-md w-full text-blue-700 text-base md:text-lg p-2 md:px-5 md:py-1 border-blue-700 mx-auto mb-3 hover:border-neutral-600 flex items-center'><a href="https://drive.google.com/file/d/1wTzegr14IdFPGLhRKvynMQrzt7sv_GaW/view?usp=sharing" className='w-full flex items-center justify-center gap-2'><BsFillFileEarmarkPdfFill size={15} />CV</a></button>
        <button className='border h-full rounded-md w-full text-blue-700 text-base md:text-lg p-2 md:px-5 md:py-1 border-blue-700 items-center mx-auto hover:border-neutral-600'><a href="https://drive.google.com/file/d/1UMmoREeZZl8kX1820tDBSiNwxXc6ATV7/view?usp=drive_link">Hist. Academica</a></button>
      </div>

      <div className="flex gap-3 items-center mt-20 md:mt-0">
        <HiOutlineBriefcase color="#1d4ed8" size={"24px"} />
        <h3 className="text-lg md:text-xl text-blue-700">SERVICIOS</h3>
      </div>

      <div className="flex flex-col md:flex-row justify-evenly gap-4">
        <motion.article
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="slide-in-left border border-neutral-700 rounded-xl p-5 md:p-10 flex flex-col justify-center items-center gap-3 w-full hover:border-blue-700 transition-all"
        >
          <HiMiniComputerDesktop color="#1d4ed8" size={"40px"} />
          <h2 className="text-xl text-center md:text-2xl text-blue-700">
            Desarrollo Frontend
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light text-justify">
            Me enfoco en crear interfaces web seguras, eficientes y atractivas.
            Escribo código estándar y bien documentado para aplicaciones escalables,
            priorizando la experiencia del usuario y la seguridad.
          </p>
        </motion.article>
        <motion.article
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="slide-in-right border border-neutral-700 rounded-xl p-5 md:p-10 flex flex-col justify-center items-center gap-3 w-full hover:border-blue-700 transition-all"
        >
          <HiOutlineCloud color="#1d4ed8" size={"40px"} />
          <h2 className="text-xl md:text-2xl text-blue-700 text-center">
            Desarrollo Backend
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-light text-justify">
          Me especializo en la creación de sistemas potentes y adaptables. Mi enfoque está orientado hacia la creación de código meticuloso y bien documentado, 
          centrado en la seguridad y eficiencia de las aplicaciones.
          </p>
        </motion.article>
      </div>
    </motion.section>
  )
}
