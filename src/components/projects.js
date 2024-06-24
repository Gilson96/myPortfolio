import { useState } from 'react'
import 'animate.css';
import useScreenSize from '../components/useScreenSize';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

// icons
import reactIcon from '../assets/skillsIcon/react-2.svg'
import mongoIcon from '../assets/skillsIcon/mongodb-icon-1.svg'
import tailwindIcon from '../assets/skillsIcon/tailwind-css-2.svg'
import reduxIcon from '../assets/skillsIcon/redux.svg'

// Rocket Bank projects screenshots
import rocketBankLogo from '../assets/projectsPics/rocket_bank_logo.png'
import rocketBank1 from '../assets/projectsPics/rocket_bank_1.png'
import rocketBank2 from '../assets/projectsPics/rocket_bank_2.png'
import rocketBank3 from '../assets/projectsPics/rocket_bank_3.png'
import rocketBank4 from '../assets/projectsPics/rocket_bank_4.png'
import rocketBank5 from '../assets/projectsPics/rocket_bank_5.png'
import rocketBank6 from '../assets/projectsPics/rocket_bank_6.png'

// Health Care projects screenshots
import healthCareLogo from '../assets/projectsPics/health_logo.png'
import healthCare1 from '../assets/projectsPics/health_care_1.png'
import healthCare2 from '../assets/projectsPics/health_care_2.png'
import healthCare3 from '../assets/projectsPics/health_care_3.png'
import healthCare4 from '../assets/projectsPics/health_care_4.png'
import healthCare5 from '../assets/projectsPics/health_care_5.png'
import healthCare6 from '../assets/projectsPics/health_care_6.png'
import healthCare7 from '../assets/projectsPics/health_care_7.png'
import healthCare8 from '../assets/projectsPics/health_care_8.png'
import healthCare9 from '../assets/projectsPics/health_care_9.png'

const Projects = () => {
    const [isActive, setIsAcive] = useState(false)
    const screenSize = useScreenSize()

    const projects = [
        {
            title: 'Health Care',
            description: 'Health Care is a comprehensive web application aimed at improving the efficiency and accessibility of healthcare services. Developed using React for the front-end, Node.js for the back-end, and Tailwind CSS for styling, this project showcases the integration of modern web technologies to create a user-friendly and responsive interface for both patients',
            icons: [reactIcon, tailwindIcon, mongoIcon],
            screenshots: [healthCareLogo, healthCare1, healthCare2, healthCare3, healthCare4, healthCare5, healthCare6, healthCare7, healthCare8, healthCare9],
            liveLink: 'https://gilson96.github.io/health-care/',
            githubLink: 'https://github.com/Gilson96/health-care'
        },
        {

            title: 'Rocket Bank',
            description: 'Rocket Bank is an online banking platform designed to enable administrators to manage user accounts effectively. Built using React for the front-end, Node.js for the back-end, and Redux for state management, this project demonstrates the integration of modern web technologies to create a responsive and user-friendly interface.',
            icons: [reactIcon, tailwindIcon, mongoIcon, reduxIcon],
            screenshots: [rocketBankLogo, rocketBank1, rocketBank2, rocketBank3, rocketBank4, rocketBank5, rocketBank6],
            liveLink: 'https://gilson96.github.io/React_E-bank/',
            githubLink: 'https://github.com/Gilson96/React_E-bank'

        },
    ]



    return (
        <div id='projects' className={`${screenSize.width < 1024? 'mt-96' : 'mt-32'} flex flex-col justify-center items-start gap-20`}>

            <p className='text-[#E0E1DD] text-5xl w-full text-center mb-12 ' id='logoFont'>Projects</p>

            <div className='flex justify-between w-full h-full'>
                <div className='flex flex-col justify-between h-full w-full gap-10'>

                    {screenSize.width < 1024 ?
                        <div className='flex flex-col justify-center items-center gap-12'>
                            {projects.map(proj => (
                                <ProjectCard
                                    setIsAcive={setIsAcive}
                                    isActive={isActive}
                                    description={proj.description}
                                    title={proj.title}
                                    screenshots={proj.screenshots}
                                    liveLink={proj.liveLink}
                                    githubLink={proj.githubLink}
                                    icons={proj.icons}
                                />
                            ))}
                        </div>

                        :

                        <Swiper navigation={true} modules={[Navigation]} className=" h-full w-[80%]">
                            {projects.map(proj => (
                                <SwiperSlide>
                                    <div className='flex justify-center items-center'>
                                        <ProjectCard
                                            setIsAcive={setIsAcive}
                                            isActive={isActive}
                                            description={proj.description}
                                            title={proj.title}
                                            screenshots={proj.screenshots}
                                            liveLink={proj.liveLink}
                                            githubLink={proj.githubLink}
                                            icons={proj.icons}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects