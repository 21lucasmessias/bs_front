import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Register } from './screens/Register'
import { Login } from './screens/Login'
import { Scheduler } from './screens/Scheduler'
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <Flex width={'100vw'} height={'100vh'} flex={1}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registrar' element={<Register />} />
          <Route path='/agendamento' element={<Scheduler />} />
        </Routes>
      </Router>
    </Flex>
  )
}

export default App
