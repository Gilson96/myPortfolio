import { useState } from 'react'
import ProjectRow from './projectRow'
import calculator from '../assets/projectsPics/calculator.png'
import calculatorLogo from '../assets/projectsLogo/calculator_logo.png'
import expenseTracker from '../assets/projectsPics/expenseTracker.png'
import expenseTrackerLogo from '../assets/projectsLogo/expenseTracker_logo.png'
import ticTacToe from '../assets/projectsPics/tic-tac-toe.png'
import ticTacToeLogo from '../assets/projectsLogo/tic-tac-toe_logo.png'
import toDo from '../assets/projectsPics/todo.png'
import toDoLogo from '../assets/projectsLogo/todo_logo.png'
import weather from '../assets/projectsPics/weather1.png'
import weatherLogo from '../assets/projectsLogo/weather_logo.png'
import blog from '../assets/projectsPics/blog_article.png'
import blogLogo from '../assets/projectsLogo/blog_article_logo.png'
import delivroo from '../assets/projectsPics/delivroo1.png'
import delivrooLogo from '../assets/projectsLogo/delivroo_logo.png'

const Projects = ({ back }) => {

  const frontProjects = [
    {
      key: 1,
      title: 'Calculator',
      live: "https://gilson96.github.io/calculator/",
      github: "https://github.com/Gilson96/calculator",
      screenshot: calculator,
      logo: calculatorLogo,
      description: "A simple calculator"
    },
    {
      key: 2,
      title: 'Expense Tracker',
      live: " https://gilson96.github.io/expense-tracker/",
      github: "https://github.com/Gilson96/expense-tracker",
      screenshot: expenseTracker,
      logo: expenseTrackerLogo,
      description: "A expense tracker app to managing personal finances"
    },

    {
      key: 3,
      title: 'Tic-Tac-Toe',
      live: "https://gilson96.github.io/tic-tac-toe/",
      github: "https://github.com/Gilson96/tic-tac-toe",
      screenshot: ticTacToe,
      logo: ticTacToeLogo,
      description: "The tic-tac-toe game"
    },
    {
      key: 4,
      title: 'To-do',
      live: "https://gilson96.github.io/to-do/",
      github: "https://github.com/Gilson96/to-do",
      screenshot: toDo,
      logo: toDoLogo,
      description: "A to-do built with typescript"
    },
  ]

  const backProjects = [
    {
      key: 1,
      title: 'Blog',
      live: "https://blog-article-9e7b5e9272c9.herokuapp.com/",
      github: "https://github.com/Gilson96/blog-laravel",
      screenshot: blog,
      logo: blogLogo,
      description: "A article blog, where user can apply CRUD operations on a article and comment."
    },
  ]

  const fullProjects = [
    {
      key: 1,
      title: 'Delivroo-Clone',
      live: "https://gilson96.github.io/delivoo_clone-FrontEnd/",
      github: "https://github.com/Gilson96/delivoo_clone-FrontEnd",
      screenshot: delivroo,
      logo: delivrooLogo,
      description: "My clone version of the Delivroo app"
    },
    {
      key: 2,
      title: 'Weather-app',
      live: "https://gilson96.github.io/weather-app/",
      github: "https://github.com/Gilson96/weather-app",
      screenshot: weather,
      logo: weatherLogo,
      description: "A weather-app, find the weather on you city"
    },
  ]

  return (
    <div className='flex flex-col h-screen w-full'>

      <button
        onClick={back}
        className='flex absolute top-5 right-10 border-3 border-gray-50 p-3 w-40 items-center justify-center text-gray-50 rounded-full shadow shadow-gray-50 hover:translate-y-px hover:shadow-lg hover:shadow-gray-50'
        id='name-font'
      >
        Back
      </button>

      <h1 className='flex justify-center my-28 text-gray-50 text-5xl' id='name-font'>Projects</h1>

      <div className='flex justify-between p-5 m-2'>
        <h1 className='relative top-7 text-4xl text-gray-50' id='name-font'>Front - End</h1>
        <div className='flex gap-3'>
          {frontProjects.map(project => (
            <ProjectRow
              name='front - End'
              project={project.logo}
              live={project.live}
              description={project.description}
              github={project.github}
              screenshot={project.screenshot}
              logo={project.logo}
              title={project.title}
            />
          ))}
        </div>
      </div>

      <div className='flex justify-between p-5 m-2'>
        <h1 className='relative top-7 text-4xl text-gray-50' id='name-font'>Back - End</h1>
        <div className='flex gap-3'>
          {backProjects.map(project => (
            <ProjectRow
              name='Back - End'
              project={project.logo}
              live={project.live}
              description={project.description}
              github={project.github}
              screenshot={project.screenshot}
              logo={project.logo}
              title={project.title}
              inlineStyle='bg'
            />
          ))}
        </div>
      </div>

      <div className='flex justify-between p-5 m-2 mb-3'>
        <h1 className='relative top-7 text-4xl text-gray-50' id='name-font'>Full - Stack</h1>
        <div className='flex gap-3'>
          {fullProjects.map(project => (
            <ProjectRow
              name='Full - Stack'
              project={project.logo}
              live={project.live}
              description={project.description}
              github={project.github}
              screenshot={project.screenshot}
              logo={project.logo}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects