import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Register } from './screens/Register'
import { Login } from './screens/Login'
import { Scheduler } from './screens/Scheduler'
import Home from './screens/Homepage'
import { Flex } from '@chakra-ui/react'
import Cards from './components/Card'
import Teste1 from './screens/Teste1'

function App() {
  return (
    <Flex width={'100vw'} height={'100vh'} flex={1}>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registrar' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/agendamento' element={<Scheduler />} />
          <Route path='/card' element={<Cards />} />
          <Route path='/teste' element={<Teste1 />} />
        </Routes>
      </Router>
    </Flex>
  )
}

export default App
