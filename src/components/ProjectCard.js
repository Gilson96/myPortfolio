import { useState } from 'react'
import 'animate.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import useScreenSize from '../components/useScreenSize';

const ProjectCard = ({ setIsAcive, isActive, description, liveLink, githubLink, icons, screenshots, title }) => {

    const screenSize = useScreenSize()

    return (
        <>
            <div className={`${screenSize.width < 1024 ? 'w-[90%]' : 'w-[40rem]'} flex flex-col justify-center items-center border border-[#415A77] h-auto  rounded-3xl text-[#415A77] p-5 gap-3`}>

                {screenSize.width < 1024 ?
                    <p className='text-2xl mb-2 mt-3'>{title}</p>
                    :
                    <Swiper navigation={true} modules={[Navigation]} className=" h-full w-[80%]">
                        {screenshots.map(shot =>
                            <SwiperSlide>
                                <div className='flex items-center justify-center'>
                                    <img className='h-[15rem] w-[20rem] border border-white rounded-3xl' src={shot} alt='screenshot' />
                                </div>
                            </SwiperSlide>
                        )}
                    </Swiper >
                }


                <span className='bg-[#415A77] h-0.5 w-full' />
                <div className='flex w-full gap-3 justify-start'>
                    <p className='italic text-xl'>Skills:</p>
                    {icons.map(icon => <img className='h-7 w-7' src={icon} alt='icon' />)}
                </div>
                <hr className='bg-[#415A77] h-0.5 w-full' />

                <p className='text-justify mb-3 ' id='textFont'>{description}</p>

                <div className={`${screenSize.width < 1024 ? 'flex flex-col gap-2' : 'flex gap-10'}`} >
                    <button className='h-auto w-[10rem] p-3 rounded-lg border border-[#415A77] bg-[#415A77] text-[#E0E1DD]  hover:bg-[#778DA9] hover:text-[#E0E1DD] font-bold italic shadow-lg'><a className='' href={liveLink}>See live</a></button>
                    <button className='h-auto w-[10rem] p-3 rounded-lg border border-[#415A77] bg-[#415A77] text-[#E0E1DD]  hover:bg-[#778DA9] hover:text-[#E0E1DD] font-bold italic shadow-lg'><a className='' href={githubLink}>See Github</a></button>
                </div>
            </div >

        </>
    )
}

export default ProjectCard
