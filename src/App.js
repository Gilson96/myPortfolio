import './App.css';
import { useState } from 'react'
import Main from './components/main'
import Projects from './components/projects'
import background from './assets/background.jpg'
import { Slide } from 'react-awesome-reveal'

function App() {
  const [toggle, setToggle] = useState(true);

  const onBack = () => {
    setToggle(!toggle)
  }

  const onGoProjects = () => {
    setToggle(!toggle)
  }

  return (
    <div className={`bg-[url(${background})] h-screen w-full bg-center bg-cover relative overflow-auto`}>
      <Slide>
        {toggle && <Main goProjects={onGoProjects} />}
      </Slide>
      <Slide>
        {!toggle && <Projects back={onBack} />}
      </Slide>
    </div>
  );
}

export default App;
