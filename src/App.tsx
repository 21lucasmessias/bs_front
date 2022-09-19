import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Register } from './screens/Register'
import { Login } from './screens/Login'
import { Scheduler } from './screens/Scheduler'
import Home from './screens/Homepage'
import ModalCustom from './screens/ModalCustom'
import { Flex } from '@chakra-ui/react'

function App() {
  return (
    <Flex width={'100vw'} height={'100vh'} flex={1}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registrar' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/agendamento' element={<Scheduler />} />
          <Route path='/modal' element={<ModalCustom />} />
        </Routes>
      </Router>
    </Flex>
  )
}

export default App
