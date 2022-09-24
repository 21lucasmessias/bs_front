import * as React from 'react'
import {
  InputRightElement,
  Input,
  InputGroup,
  useDisclosure,
  IconButton,
  Box,
  HStack,
  Container,
  useColorModeValue,
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  CloseButton,
  Stack,
  useBreakpointValue,
  ButtonGroup,
  Image,
} from '@chakra-ui/react'

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import logo from '../assets/image/picwish.png'
import BarberCard from '../components/Card'
import Background from '../assets/image/background.jpg'

const Home = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box w='100%'>
      <Box as='nav' bg='#0B0B0B' boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '5', lg: '5' }} display='flex' padding='0px'>
          <Image
            src={logo}
            top='0px'
            alignItems='center'
            w='100px'
            h='80px'
            position='absolute'
            left='50px'
            border='0px'
          />
          <HStack spacing='10' justify='space-between' justifyContent='center' margin-right='0px'>
            {isDesktop ? (
              <Flex justify='space-between' flex='1'>
                <ButtonGroup variant='link' spacing='8'>
                  {['Home', 'Serviços', 'Produtos', 'Unidades', 'Agendamento'].map((item) => (
                    <Button color='#F3EBCA' key={item}>
                      {item}
                    </Button>
                  ))}
                </ButtonGroup>
                <HStack spacing='3' right='-5%' position='relative'>
                  <Button
                    color='white'
                    _hover={{ bg: '#8C5931' }}
                    colorScheme='#blackAlpha'
                    variant='outline'
                  >
                    Entrar
                  </Button>
                  <Button color='#8C5931' variant='solid'>
                    Registrar-se
                  </Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                bg='#F3EBCA'
                onClick={onOpen}
                aria-label='Search database'
                icon={<HamburgerIcon />}
              />
            )}
          </HStack>
        </Container>
      </Box>

      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />

        <DrawerContent bg='#F3EBCA' color='#8C5931'>
          <Stack direction='row' spacing={6}>
            <CloseButton size='lg' />
          </Stack>
          <DrawerHeader
            alignItems='center'
            justifyItems='center'
            borderBottomWidth='1px'
            borderBottomColor='#111111'
          >
            Barbearia Sabará
          </DrawerHeader>
          <DrawerBody>
            <Button bg='#111111' w='100%' top='10px'>
              Serviços
            </Button>
            <Button bg='#111111' w='100%' top='10px'>
              Produtos
            </Button>
            <Button bg='#111111' w='100%' top='10px'>
              Unidades
            </Button>
            <Button bg='#111111' w='100%' top='10px'>
              Agendamento
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box padding='30px' display='flex' justifyContent='center'>
        <BarberCard />
        <BarberCard />
        <BarberCard />
        <BarberCard />
        <BarberCard />
      </Box>
      <Box padding='30px' display='flex' justifyContent='center'>
        <BarberCard />
        <BarberCard />
        <BarberCard />
        <BarberCard />
        <BarberCard />
      </Box>
    </Box>
  )
}

export default Home
