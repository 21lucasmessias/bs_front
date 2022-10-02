import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Register } from './screens/Register'
import { Login } from './screens/Login'
import { Scheduler } from './screens/Scheduler'
import Home from './screens/Home'
import { Flex } from '@chakra-ui/react'

import Serviços from './components/Serviços'
import HomeMobile from './screens/HomeMobile'
import { OptionBarber } from './components/OptionBarber'

function App() {
  return (
    <Flex width={'100vw'} height={'100vh'} flex={1}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registrar' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mobile' element={<HomeMobile />} />
          <Route path='/calendario' element={<Scheduler />} />
          <Route path='/service' element={<Serviços />} />
          <Route path='/option' element={<OptionBarber />} />
        </Routes>
      </Router>
    </Flex>
  )
}

export default App
