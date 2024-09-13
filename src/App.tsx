

import './App.css'

import Intro from './Intro/Intro'
import StaticBox from './StaticBox/StaticBox'


function App() {

  return (
    <>

      <Intro></Intro>
      <div className='divider'></div>

      <div className='aboutMeCont'>
        <div className='aboutMeTitle'>About Me</div>
        <p className='aboutMeDes'>My name is Lucas Vanderwielen and I am currently a student at the University of Western Ontario. I'm currently a first year studying computer science. My passion is front end design, I have worked hard over the past few years to learn as much as I can about front end develpoment. I taught myself Swift and Swift UI to develope IOS applications. Then I moved on to learning web, which then I taught myself React, CSS and HTML. I have also dabbled in many other languages such as C#, Python, C++. </p>
      </div>
    </>

  )
}

export default App
