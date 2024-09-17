

import AboutMe from './AboutMe/AboutMe'
import './App.css'
import Footnotes from './Footnotes/Footnotes'

import Intro from './Intro/Intro'
import Projects from './Projects/Projects'


function App() {

  return (
    <>

      <Intro></Intro>
      <div className='divider'></div>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <div className='divider' ></div>
      <Footnotes></Footnotes>
    </>

  )
}



export default App
