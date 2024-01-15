import React from 'react'
import { Fade } from 'react-awesome-reveal'

const ProjectsInMobile = ({ title, screenshot, inlineStyle, description, live, github }) => {

  return (
    
    <div className='flex flex-col justify-center items-center transition ease-in-out hover:-translate-y-1 hover:scale-8'>
      <div className='my-5'>
        <div className='flex flex-col justify-center items-center border border-black h-80 right-10 bg-zinc-50 rounded-lg w-52 z-[9999999] shadow-xl'>

          <h1 id='card-font' className='text-xl font-bold relative -top-5 '>{title}</h1>

          <div className={`border border-black h-36 w-44 relative bottom-0 shadow-xl rounded-lg bg-[url(${screenshot})]  ${inlineStyle}  bg-cover`}></div>

          <p className='text-xs text-center font-bold p-2 uppercase' id='card-font'>{description}</p>

          <div className='flex gap-2 relative top-7'>
            <button className='flex items-center justify-center border border-slate-500 shadow-lg rounded-lg h-10 w-20 uppercase text-xs font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:font-extrabold'>
              <a id='card-font' className='' href={live}>live</a>
            </button>

            <button className='flex items-center justify-center border border-slate-500 shadow-lg rounded-lg h-10 w-20 uppercase text-xs font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:font-extrabold'>
              <a id='card-font' href={github}>github</a>
            </button>
          </div>
        </div>
      </div>      
    </div>

  )
}

export default ProjectsInMobile