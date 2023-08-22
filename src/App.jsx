import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Hero from './components/Home/Hero.jsx'
import Popular from './components/Cards/Popular.jsx'

const App = () => {
  return (
    <>
    <Router>

      <Hero />
      <Popular />

      <Routes>
        <Route />
      </Routes>
    
    </Router> 
    
   
      
    </>
  )
}

export default App
