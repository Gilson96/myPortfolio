import React from 'react'
import { Slide } from 'react-awesome-reveal'
// assets
import avatar from '../assets/AvatarMaker-removebg-preview.png'
import SkillsIcon from './skillsIcon'
import html from '../assets/skillsIcon/html.png'
import css from '../assets/skillsIcon/css.png'
import js from '../assets/skillsIcon/javascript.png'
import react from '../assets/skillsIcon/react.png'
import ts from '../assets/skillsIcon/typescript.png'
import php from '../assets/skillsIcon/php.png'
import laravel from '../assets/skillsIcon/laravel.png'
import mysql from '../assets/skillsIcon/mysql.png'
import tailwind from '../assets/skillsIcon/tailwind.png'
import bootstrap from '../assets/skillsIcon/bootstrap.png'
import github from '../assets/github.png'
import linked from '../assets/linkedin.png'
import gmail from '../assets/email.png'

const Main = ({ goProjects }) => {


  return (
   
      <div className='flex flex-col justify-center items-center h-screen w-full gap-5 animate__animated animate__fadeInLeft transition ease-in-out'>

        <button
          onClick={goProjects}
          className='flex absolute top-5 right-10 border-3 border-gray-50 p-3 w-40 items-center justify-center text-gray-50 rounded-full shadow shadow-gray-50 hover:translate-y-px hover:shadow-lg hover:shadow-gray-50 max-[425px]:right-6 max-[425px]:p-2 max-[425px]:text-xs max-[425px]:w-20
        '
          id='name-font'
        >Projects
        </button>

        <div className='flex h-44 w-44 max-[425px]:h-32 max-[425px]:w-32'><img src={avatar} alt='avatar' /></div>

        <h1 className='text-5xl text-gray-100 max-[425px]:text-2xl' id='name-font'>Gilson de Almeida</h1>

        <h1 className='text-3xl text-gray-100 max-[425px]:text-sm' id='name-font'>Full Stack Developer</h1>

        <p className='text-lg text-gray-100 max-[425px]:hidden' id='name-font'>Click to see more</p>

        <div className='flex gap-2 max-[425px]:gap-1'>

          <SkillsIcon
            icon={html}
            icon2={bootstrap}
            iconName2='bootstrap'
            inlineClass=' max-[425px]:ml-0 max-[425px]:relative max-[425px]:right-3 max-[425px]:-top-3'
          />
          <SkillsIcon
            icon={css}
            icon2={tailwind}
            iconName2='tailwindcss'
            inlineClass='gap-4 w-12 mt-1 max-[425px]:relative max-[425px]:gap-5 max-[425px]:-top-4 max-[425px]:right-2'
          />
          <SkillsIcon
            icon={js}
            icon2={ts}
            icon3={react}
            iconName2='Typescript'
            iconName3='React'
            inlineClass='ml-1 gap-2 max-[425px]:relative max-[425px]:right-3 max-[425px]:-top-3'


          />
          <SkillsIcon
            icon={php}
            icon2={laravel}
            icon3={mysql}
            iconName2='laravel'
            iconName3='mysql'
            inlineClass='ml-1 max-[425px]:relative max-[425px]:right-3 max-[425px]:-top-3 '
          />

        </div>
        <div className="flex gap-4 absolute top-6 left-2  max-[425px]:-bottom-5 max-[425px]:h-10">
          <a className='transition ease-in-out  hover:-translate-y-1 hover:scale-110' href='https://github.com/Gilson96'>
            <img src={github} alt='github' className='h-16 w-16 max-[425px]:h-6 max-[425px]:w-6' />
          </a>
          <a className='transition ease-in-out  hover:-translate-y-1 hover:scale-110' href='https://www.linkedin.com/in/gilson-de-almeida-a51ba1194/'>
            <img src={linked} alt='linked' className='h-16 w-16  max-[425px]:h-6 max-[425px]:w-6' />
          </a>
          <a className='transition ease-in-out  hover:-translate-y-1 hover:scale-110' href='mailto:grafael99@gmail.com'>
            <img src={gmail} alt='mail' className='h-16 w-16  max-[425px]:h-6 max-[425px]:w-6' />
          </a>
        </div>
      </div>
      
   
  )
}

export default Main