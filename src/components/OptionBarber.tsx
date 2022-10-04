import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Image, Text, Button, Stack } from '@chakra-ui/react'
import barbearia from '../assets/image/barbershop.png'
import tesoura from '../assets/image/hairdressing-scissors.png'
import barbeiro from '../assets/image/barber.png'
import date from '../assets/image/simbolo-de-data-e-hora-do-evento.png'

export const OptionBarber = () => {
  const navigate = useNavigate()
  return (
    <Stack w='100%' h='35%' bg='white !important' justifyContent={'center'}>
      <Button alignItems={'center'} onClick={() => navigate('/unidades')}>
        <Image src={barbearia} w='40px' h='40px' />
        <Text paddingLeft={18}> Unidade</Text>
      </Button>
      <Button onClick={() => navigate('/service')}>
        <Image src={tesoura} w='40px' h='40px' />
        <Text paddingLeft={18}> Serviços</Text>
      </Button>
      <Button>
        <Image src={barbeiro} w='40px' h='40px' />
        <Text paddingLeft={18}> Barbeiros</Text>
      </Button>
      <Button>
        <Image src={date} w='40px' h='40px' />
        <Text paddingLeft={18}> Data e Hora</Text>
      </Button>
    </Stack>
  )
}
