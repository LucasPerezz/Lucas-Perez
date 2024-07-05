import React from 'react'
import { VelocityScroll } from './magicui/scroll-based-velocity'

export default function Footer() {
  return (
    <footer className='max-w-[1280px] mx-auto container mb-7'>
        <VelocityScroll text='Lucas Perez • Desarrollador Full Stack • Estudiante de Ingenieria en Informatica •' className='text-white text-lg' default_velocity={1.5}/>
    </footer>
  )
}
