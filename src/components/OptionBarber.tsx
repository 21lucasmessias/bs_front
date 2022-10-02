import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import barbearia from '../assets/image/barbershop.png'
import tesoura from '../assets/image/hairdressing-scissors.png'
import barbeiro from '../assets/image/barber.png'
import date from '../assets/image/simbolo-de-data-e-hora-do-evento.png'

export const OptionBarber = () => {
  return (
    <Box w='100%' h='100%'>
      <Box borderRightRadius={15} bg='#4d4d4d' marginLeft={3} marginRight={3}>
        <Box display='flex' alignItems={'center'} justifyContent={'center'}>
          <Image src={barbearia} w='40px' h='40px' />
          <Text marginLeft={2}>Unidade</Text>
        </Box>
        <Box display='flex' alignItems={'center'} justifyContent={'center'}>
          <Image src={tesoura} w='40px' h='40px' />
          <Text marginLeft={2}>Serviço</Text>
        </Box>
        <Box display='flex' alignItems={'center'} justifyContent={'center'}>
          <Image src={barbeiro} w='40px' h='40px' />
          <Text marginLeft={2}>Barbeiro</Text>
        </Box>
        <Box display='flex' alignItems={'center'} justifyContent={'center'}>
          <Image src={date} w='40px' h='40px' />
          <Text marginLeft={2}>Data e Hora</Text>
        </Box>
      </Box>
    </Box>
  )
}
