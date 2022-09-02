import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Register } from './screens/Register'
import { Login } from './screens/Login'
import { Scheduler } from './screens/Scheduler'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registrar' element={<Register />} />
          <Route path='/calendario' element={<Scheduler />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
