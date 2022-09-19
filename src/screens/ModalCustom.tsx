import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Heading,
  Image,
  VStack,
  Text,
  WrapItem,
  Avatar,
} from '@chakra-ui/react'
import React from 'react'
import background from '../assets/image/background.jpg'
import Scheduler from './Scheduler'

export default function SizeExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [size, setSize] = React.useState('md')

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    onOpen()
  }

  const sizes = ['full']

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
          right={['unset', 'unset', '50%']}
          zIndex={1}
          p={8}
          borderRadius={20}
          spacing={4}
          minW='360px'
        >
          <Heading fontSize='xl'>Barbeiros disponiveis na sede Sabará</Heading>
          <VStack w='100%' display='-webkit-inline-flex'>
            <WrapItem>
              <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
            </WrapItem>
            <Text>Neymar junior</Text>
            {sizes.map((size) => (
              <Button onClick={() => handleSizeClick(size)} key={size} m={4}>
                Agendar
              </Button>
            ))}
          </VStack>
          <VStack w='100%' display='inline-block' alignItems={'center'} justifyContent='center'>
            <WrapItem display='inline-block'>
              <Avatar size='xl' name='Christian Nwamba' src='https://bit.ly/code-beast' />{' '}
            </WrapItem>
            <Text position={'absolute'}>Firmino</Text>
            {sizes.map((size) => (
              <Button onClick={() => handleSizeClick(size)} key={size} m={4} float='right'>
                Agendar
              </Button>
            ))}
          </VStack>

          <Modal onClose={onClose} size={size} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Scheduler />
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </VStack>
      </Flex>
    </Flex>
  )
}
