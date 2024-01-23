import { useState, useEffect } from 'react'
import ProjectsInMobile from './projectsInMobile'


// Assets
import calculator from '../assets/projectsPics/calculator.png'
import expenseTracker from '../assets/projectsPics/expenseTracker.png'
import ticTacToe from '../assets/projectsPics/tic-tac-toe.png'
import toDo from '../assets/projectsPics/todo.png'
import weather from '../assets/projectsPics/weather1.png'
import blog from '../assets/projectsPics/blog_article.png'
import delivroo from '../assets/projectsPics/delivroo1.png'
import investment from '../assets/projectsPics/investment.png'

const Projects = ({ back }) => {


  const frontProjects = [
    {
      key: 1,
      title: 'Calculator',
      live: "https://gilson96.github.io/calculator/",
      github: "https://github.com/Gilson96/calculator",
      screenshot: calculator,
      description: "A simple calculator"
    },
    {
      key: 2,
      title: 'Expense Tracker',
      live: " https://gilson96.github.io/expense-tracker/",
      github: "https://github.com/Gilson96/expense-tracker",
      screenshot: expenseTracker,
      description: "A expense tracker app"
    },

    {
      key: 3,
      title: 'Tic-Tac-Toe',
      live: "https://gilson96.github.io/tic-tac-toe/",
      github: "https://github.com/Gilson96/tic-tac-toe",
      screenshot: ticTacToe,
      description: "The tic-tac-toe game"
    },
    {
      key: 4,
      title: 'To-do',
      live: "https://gilson96.github.io/to-do/",
      github: "https://github.com/Gilson96/to-do",
      screenshot: toDo,
      description: "A to-do list"
    },
    {
      key: 5,
      title: 'Investment Calculator',
      live: "https://gilson96.github.io/investmentCalculator/",
      github: "https://github.com/Gilson96/investmentCalculator",
      screenshot: investment,
      description: "A investement Calculator"
    },
  ]

  const backProjects = [
    {
      key: 1,
      title: 'Blog',
      live: "https://blog-article-9e7b5e9272c9.herokuapp.com/",
      github: "https://github.com/Gilson96/blog-laravel",
      screenshot: blog,
      description: "A article blog."
    },
  ]

  const fullProjects = [
    {
      key: 1,
      title: 'Delivroo-Clone',
      live: "https://gilson96.github.io/delivoo_clone-FrontEnd/",
      github: "https://github.com/Gilson96/delivoo_clone-FrontEnd",
      screenshot: delivroo,
      description: "Delivroo-clone app"
    },
    {
      key: 2,
      title: 'Weather-app',
      live: "https://gilson96.github.io/weather-app/",
      github: "https://github.com/Gilson96/weather-app",
      screenshot: weather,
      description: "A weather-app"
    },
  ]

  return (

    
      <div className='flex flex-col h-screen w-full animate__animated animate__fadeInRight transition ease-in-out'>

        <button
          onClick={back}
          className='flex absolute top-5 right-10 border-3 border-gray-50 p-3 w-40 items-center justify-center text-gray-50 rounded-full shadow shadow-gray-50 hover:translate-y-px hover:shadow-lg hover:shadow-gray-50 max-[425px]:right-6 max-[425px]:p-2 max-[425px]:text-xs max-[425px]:w-20'
          id='name-font'
        >
          Back
        </button>

        <h1 className='flex justify-center my-28 text-gray-50 text-5xl max-[425px]:text-3xl max-[425px]:mb-2' id='name-font'>
          Projects
        </h1>

        <div className='flex flex-col justify-between p-5 m-2'>

          <h1 className='relative top-7 text-4xl text-gray-50 my-3 max-[425px]:text-2xl' id='name-font'>
            Front - End
          </h1>

          <div className='flex gap-3 overflow-x-auto'>
            {frontProjects.map(pim => (
              <ProjectsInMobile
                project={pim.logo}
                live={pim.live}
                description={pim.description}
                github={pim.github}
                screenshot={pim.screenshot}
                logo={pim.logo}
                title={pim.title}
              />
            ))}
          </div>

        </div>

        <div className='flex flex-col justify-between p-5 m-2'>

          <h1 className='relative top-7 text-4xl text-gray-50 my-3 max-[425px]:text-2xl' id='name-font'>
            Back - End
          </h1>

          <div className='flex gap-3 overflow-x-auto'>
            {backProjects.map(pim => (
              <ProjectsInMobile
                project={pim.logo}
                live={pim.live}
                description={pim.description}
                github={pim.github}
                screenshot={pim.screenshot}
                logo={pim.logo}
                title={pim.title}
              />
            ))}
          </div>

        </div>

        <div className='flex flex-col justify-between p-5 m-2'>

          <h1 className='relative top-7 text-4xl text-gray-50 my-3 max-[425px]:text-2xl' id='name-font'>
           Full -Stack
          </h1>

          <div className='flex gap-3 overflow-x-auto'>
            {fullProjects.map(pim => (
              <ProjectsInMobile
                project={pim.logo}
                live={pim.live}
                description={pim.description}
                github={pim.github}
                screenshot={pim.screenshot}
                logo={pim.logo}
                title={pim.title}
              />
            ))}
          </div>

        </div>
      </div>
    
  )
}

export default Projects