import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Fade } from 'react-awesome-reveal'

const SkillsIcon = ({ icon, icon2, icon3, iconName2, iconName3, inlineClass }) => {

  const [open, setOpen] = useState(false)

  const dropDownIcon = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div className='flex relative'>
      <span className='h-6 w-6 text-white cursor-pointer relative top-2 max-[425px]:gap-0' onClick={dropDownIcon}>
        <ChevronDownIcon />
      </span>

      <span className='h-20 w-20 max-[425px]:h-10 max-[425px]:w-12 max-[425px]:mb-5 max-[425px]:gap-4'>
        <img src={icon} alt='icon' />
      </span>


      {open && <span className='absolute top-full left-8 p-2 mt-2'>
        <Fade delay={1e2} cascade damping={1e-1}>
          <ul className='flex flex-col gap-2'>

            <li className={`flex flex-col justify-center items-center uppercase w-10 text-white font-bold text-xs gap-2 max-[425px]:w-8 ${inlineClass}`} id='icon-class'>
              <img src={icon2} alt='icon2' />
              <p className='max-[425px]:text-[0.5rem]' id='general-font'>{iconName2}</p>
            </li>

            <li className={`flex flex-col justify-center items-center uppercase w-10 text-white font-bold text-xs gap-2 max-[425px]:w-8 ${inlineClass}`} id='icon-class' >
              <img className={`${icon3 ? '' : 'hidden'}`} src={icon3} alt='icon3' />
              <p className='max-[425px]:text-[0.5rem]' id='general-font'>{iconName3}</p>
            </li>

          </ul>
        </Fade>
      </span>}


    </div>
  )
}

export default SkillsIcon