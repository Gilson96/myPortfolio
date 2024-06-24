import React from 'react'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { ReactTyped } from "react-typed";
import useScreenSize from '../components/useScreenSize';

const HomePage = () => {
    const screenSize = useScreenSize()

    return (
        <div className='flex flex-col w-full h-screen'>
            <div className='flex justify-between w-full '>
                <div className={`${screenSize.width < 1024? 'w-[85%] ml-5' : 'w-[60%] ml-12'} flex flex-col gap-4`}>

                    <div className={`${screenSize.width < 1024? 'w-full' : 'w-[40%]'} flex items-center justify-center border border-slate-300 h-auto p-5  bg-[#415A77] mt-16 rounded shadow`}>
                        <p className='text-[#E0E1DD] font-bold my-2'>Welcome to my Portfolio</p>
                    </div>

                    <p className={`${screenSize.width < 1024 && 'my-10'} text-[#778DA9] font-bold text-5xl w-full`}>{"I'm Gilson a "}
                        <ReactTyped strings={["full-stack developer"]} typeSpeed={150} />
                    </p>

                    <p className='text-[#0D1B2A] text-justify leading-10 text-lg' id='textFont'>My name is Gilson Jeremias, and I am reaching out to introduce myself as a passionate and motivated junior full-stack developer with a strong foundation in React and Nodejs, eager to begin my professional journey in the tech industry. Although I am new to the professional world, I have spent the past 3 of years deeply immersed in coding and development through self-study, online courses, and personal projects. </p>
                    <div className='flex'>
                        <button className={`${screenSize.width < 1024? 'w-[100%]' : 'w-[40%]'} flex items-center justify-center border border-slate-300 h-auto p-5 bg-[#415A77] rounded shadow font-bold text-[#E0E1DD] gap-2 mt-5 hover:bg-[#778DA9]`}>
                            <a href='https://drive.google.com/file/d/13Iu-hq8bPkVirwjbVwFQtlSbvBKjwHLR/view' className='flex '>Download my CV</a>
                            <ArrowRightCircleIcon className='h-5 w-5' />
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HomePage