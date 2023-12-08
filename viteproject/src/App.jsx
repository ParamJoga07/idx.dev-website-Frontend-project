import { useState } from 'react'

import './App.css'
import Sidebar from './components/sidebar'
import ParallaxStars from './components/parallax'
import Center from './components/center'
import Mobileanimation from './components/mobileanimation'
import Frameworks from './components/frameworks'
import Platforms from './components/platforms'
import Generative from './components/generative'
import DevelopementWorkflow from './components/DevelopementWorkflow'
import DropdownForm from './components/forms'


function App() {

  return (
   <div className="main">
     {/* <ParallaxStars></ParallaxStars>
    <Sidebar /> */}
    {/* <DropdownForm isOpen={isOpen} setIsOpen={setIsOpen} ></DropdownForm> */}
       {/* <Center></Center>
       <Mobileanimation></Mobileanimation>
       <Frameworks></Frameworks>
       <Platforms></Platforms>
      
       <Generative></Generative>
      
       <DevelopementWorkflow></DevelopementWorkflow> */}
       <Newchat></Newchat>
       
     
   
   </div>
  )
}

export default App
