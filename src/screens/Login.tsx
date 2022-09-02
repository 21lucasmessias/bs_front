import React from 'react'

import logo from '../assets/image/logo.png'
import background from '../assets/image/background.jpg'
import { Button, Flex, Heading, Image, Input, Link, VStack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <Flex h='100vh'>
      <Image
        src={background}
        alt='background'
        w='100vw'
        h='100vh'
        fit='cover'
        position='absolute'
        zIndex={0}
      />

      <Flex w='100%' h='100%' alignItems={'center'} justifyContent='center'>
        <VStack
          backgroundColor='white'
          position={['inherit', 'inherit', 'absolute']}
          right={['unset', 'unset', '200px']}
          zIndex={1}
          p={8}
          borderRadius={20}
          spacing={4}
          minW='360px'
        >
          <Image src={logo} />
          <Heading color='#3C3030' fontSize={'3xl'}>
            Barbearia Sabará
          </Heading>

          <VStack w='100%'>
            <Input variant='outline' w='100%' type='email' placeholder='Email' />
            <Input variant='outline' w='100%' type='password' placeholder='Senha' />
          </VStack>

          <Button
            width='100%'
            color='white'
            backgroundColor='#3C3030'
            _hover={{ backgroundColor: '#3C3030', opacity: '0.6' }}
          >
            Entrar
          </Button>
          <Button
            onClick={() => navigate('/registrar')}
            className='btn btn-register'
            width='100%'
            color='white'
            backgroundColor='#3C3030'
            _hover={{ backgroundColor: '#3C3030', opacity: '0.6' }}
          >
            Registrar
          </Button>

          <Link alignSelf={'end'}>Esqueceu a senha</Link>
        </VStack>
      </Flex>
    </Flex>
  )
}
