import React, { useRef } from 'react'
import { Link,Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence.jsx'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
 
  const stairParentRef = useRef(null)



  return (
    <div className='text-white'>


  
      <Routes>
        <Route path='/' element={<Home/>}/>
          <Route path='/agence' element={<Agence/>}/>
          <Route path='/projects' element={<Projects/>}/>

      </Routes>
    </div>
  )
}

export default App
