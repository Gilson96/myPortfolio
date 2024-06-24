import './App.css';
import Menu from './components/Menu'
import HomePage from './components/HomePage'
import Projects from './components/Projects';
import useScreenSize from './components/useScreenSize';

function App() {
  const screenSize = useScreenSize()

  return (
    <div className=''>
      <Menu />
      <div className={`${screenSize.width < 1024 && 'flex flex-col gap-96'}`}>
        <HomePage />
        <Projects />
      </div>
    </div>
  );
}

export default App;
