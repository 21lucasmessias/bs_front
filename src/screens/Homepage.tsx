import React from 'react'
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
  Grid,
  GridItem,
} from '@chakra-ui/react'

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box w='100%'>
      <Box as='nav' bg='bg-surface' boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container py={{ base: '4', lg: '5' }}>
          <HStack spacing='10' justify='space-between'>
            <IconButton onClick={onOpen} aria-label='Search database' icon={<HamburgerIcon />} />(
            <Flex justify='space-between' flex='1'>
              <HStack spacing='3'>
                <InputGroup>
                  <Input type='text' placeholder='Pesquisar' pr='4.5rem' zIndex={1} />
                  <InputRightElement pointerEvents='none'>
                    <IconButton
                      variant='ghost'
                      icon={<SearchIcon fontSize='1.25rem' />}
                      aria-label='Open Menu'
                    />
                  </InputRightElement>
                </InputGroup>
              </HStack>
            </Flex>
          </HStack>
        </Container>
      </Box>
      <Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader alignItems='center' justifyItems='center' borderBottomWidth='1px'>
            Barbearia Sabará
          </DrawerHeader>
          <DrawerBody>
            <Button w='100%' top='10px'>
              Agendamento
            </Button>
            <Button w='100%' top='20px'>
              Financeiro
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
    </Box>
  )
}

export default Home
