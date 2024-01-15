import './App.css';
import { useState } from 'react'
import Main from './components/main'
import Projects from './components/projects'
import background from './assets/background.jpg'


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
      
        {toggle && <Main goProjects={onGoProjects} />}
      
  
        {!toggle && <Projects back={onBack} />}
      
    </div>
  );
}

export default App;
