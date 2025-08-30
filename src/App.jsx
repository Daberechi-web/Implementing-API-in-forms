import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './Pages/Welcomepage'
import Login from './Pages/LogIn'
import Nav from './Components/Navbar'
import Signup from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Apitest from './Components/Apitest'

function App() {
 return(

  <div className='app container'>
    <Nav />
    
      <Routes>
        <Route path='/' element = {<Welcome />} />
        <Route path='/login' element= {<Login/> } />
        <Route path='/signup' element= {<Signup /> } />
        <Route path='/dashboard' element= {<Dashboard /> } />
      </Routes>
  </div>
 )
}

export default App
