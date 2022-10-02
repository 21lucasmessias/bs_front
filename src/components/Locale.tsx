import React from 'react'
import { Container, Box, CloseButton } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const Agendamentos = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <CloseButton />
      <Container fontSize={25}>Selecione a Unidade</Container>
      <Container
        onClick={() => navigate('/registrar')}
        marginBottom={3}
        padding='8px '
        border='1px'
        cursor='pointer'
        maxW='md'
        color='#4D4341'
        fontSize={20}
        _hover={{
          transition: 'all 0.5s',
          WebkitTransform: 'scale(1.1)',
        }}
      >
        Unidade Sabará Matriz
        <Box fontSize={15}>
          {' '}
          Av. Lions Club de Ponta Grossa, 180 - Chapada, Ponta Grossa - PR, 84062-160
        </Box>
      </Container>
      <Container
        marginBottom={3}
        padding='8px '
        border='1px'
        cursor='pointer'
        maxW='md'
        color='#4D4341'
        fontSize={20}
        _hover={{
          transition: 'all 0.5s',
          WebkitTransform: 'scale(1.1)',
        }}
      >
        Unidade Sabará Uvaranas
        <Box fontSize={15}>
          {' '}
          Av. General Carlos Cavalcanti, 3098 - Uvaranas, Ponta Grossa - PR, 84030-000
        </Box>
      </Container>
      <Container
        padding='8px '
        border='1px'
        cursor='pointer'
        maxW='md'
        color='#4D4341'
        fontSize={20}
        _hover={{
          transition: 'all 0.5s',
          WebkitTransform: 'scale(1.1)',
        }}
      >
        Unidade Sabará Oficinas
        <Box fontSize={15}>
          {' '}
          Rua Thaumaturgo de Azevedo, 32 - Oficinas, Ponta Grossa - PR, 84036-210
        </Box>
      </Container>
    </Container>
  )
}

export default Agendamentos
