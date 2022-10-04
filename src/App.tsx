import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Register } from './screens/Register'
import { Login } from './screens/Login'
import { Scheduler } from './screens/Scheduler'
import Home from './screens/Home'
import { Flex } from '@chakra-ui/react'

import CardBarber from './components/CardBarber'
import Servicos from './components/Servicos'
import HomeMobile from './screens/HomeMobile'
import { OptionBarber } from './components/OptionBarber'
import Agendamentos from './components/Locale'

function App() {
  return (
    <Flex width={'100vw'} height={'100vh'} flex={1}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registrar' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/mobile' element={<HomeMobile />} />
          <Route path='/barber' element={<CardBarber />} />
          <Route path='/calendario' element={<Scheduler />} />
          <Route path='/unidades' element={<Agendamentos />} />
          <Route path='/service' element={<Servicos />} />
          <Route path='/option' element={<OptionBarber />} />
        </Routes>
      </Router>
    </Flex>
  )
}

export default App
