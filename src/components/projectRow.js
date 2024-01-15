import React, { useState, useEffect } from 'react'
import Fade from 'react-awesome-reveal'

const ProjectRow = ({ name, logo, image, live, github, description, screenshot, title, inlineStyle, inlineStyleLogo }) => {

  const [isShown, setIsShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 760) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })


  return (
    <>{isMobile ? <p>Hello</p>


      :

      <Fade delay={1e3}>
        <div
          className='relative flex h-20 w-60 cursor-pointer'
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <div className={`bg-[url(${logo})] bg-center bg-[length:240px_100px] bg-no-repeat h-20 w-60 rounded-lg shadow-lg ${inlineStyleLogo}`} />


          {isShown && (
            <Fade>

              <div className='flex flex-col justify-center items-center border border-black h-80 absolute right-10 bg-zinc-50 rounded-lg -bottom-10 w-52 z-[9999999] shadow-xl'>

                <h1 id='card-font' className='absolute top-1 text-xl font-bold'>{title}</h1>

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
            </Fade>
          )}
        </div>
      </Fade>}






    </>
  )
}

export default ProjectRow