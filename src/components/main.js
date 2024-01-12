import React from 'react'
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

const Main = ({ goProjects }) => {


  return (
    <div className='flex flex-col justify-center items-center h-screen w-full gap-5 '>

      <button
        onClick={goProjects}
        className='flex absolute top-5 right-10 border-3 border-gray-50 p-3 w-40 
        items-center justify-center text-gray-50 rounded-full shadow shadow-gray-50 
        hover:translate-y-px hover:shadow-lg hover:shadow-gray-50'
        id='name-font'
      >Projects
      </button>

      <div className='flex h-44 w-44'><img src={avatar} alt='avatar' /></div>

      <h1 className='text-5xl text-gray-100' id='name-font'>Gilson de Almeida</h1>

      <h1 className='text-3xl text-gray-100' id='name-font'>Full Stack Developer</h1>

      <p className='text-lg text-gray-100' id='name-font'>Click to see more</p>

      <div className='flex gap-2'>
        
          <SkillsIcon
            icon={html}
            icon2={bootstrap}
            iconName2='bootstrap'
            inlineClass='ml-1'
          />
          <SkillsIcon
            icon={css}
            icon2={tailwind}
            iconName2='tailwindcss'
            inlineClass='gap-4 w-12 mt-1'
          />
          <SkillsIcon
            icon={js}
            icon2={ts}
            icon3={react}
            iconName2='Typescript'
            iconName3='React'
            inlineClass='ml-1 gap-2'
          />
          <SkillsIcon
            icon={php}
            icon2={laravel}
            icon3={mysql}
            iconName2='laravel'
            iconName3='mysql'
            inlineClass='ml-1'
          />
        
      </div>
    </div>
  )
}

export default Main