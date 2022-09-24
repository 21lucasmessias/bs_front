import React from 'react'

import logo from '../assets/image/logo.png'
import background from '../assets/image/background.jpg'
import { Button, Flex, Heading, Image, Input, Link, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <Flex w='100%' h='100%' alignItems={'center'} justifyContent='center'>
      <VStack zIndex={1} p={8} borderRadius={20} spacing={4} minW='360px'>
        <Image src={logo} />
        <Heading color='#111111' fontSize={'3xl'}>
          Barbearia Sabará
        </Heading>

        <VStack w='100%'>
          <Input variant='outline' borderColor='black' w='100%' type='email' placeholder='Email' />
          <Input
            variant='outline'
            borderColor='black'
            w='100%'
            type='password'
            placeholder='Senha'
          />
        </VStack>
        <Link alignSelf={'end'}>Esqueceu a senha</Link>

        <Button
          width='100%'
          color='white'
          borderRadius='18px'
          backgroundColor='#111111'
          _hover={{ backgroundColor: '#111111', opacity: '0.6' }}
        >
          Entrar
        </Button>
        <Button
          onClick={() => navigate('/registrar')}
          className='btn btn-register'
          width='100%'
          borderRadius='18px'
          border='1px'
          borderColor='black'
          color='Black'
          backgroundColor='white'
          _hover={{ backgroundColor: '#111111', opacity: '0.6' }}
        >
          Registrar
        </Button>
      </VStack>
    </Flex>
  )
}
