import React from 'react'
import {
  InputRightElement,
  Input,
  InputGroup,
  useDisclosure,
  IconButton,
  Box,
  HStack,
  ButtonGroup,
  Container,
  useColorModeValue,
  Flex,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
} from '@chakra-ui/react'

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

const Teste = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box as='section' pb={{ base: '12', md: '24' }} w='100%'>
      <Box float='left' as='nav' bg='bg-surface' boxShadow={useColorModeValue('sm', 'sm-dark')}>
        <Container w='100%' py={{ base: '4', lg: '5' }}>
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
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Button>Agendamento</Button>
            <Button>Financeiro</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Teste
