import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  IconButton,
  VStack,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

export default function PlacementExample() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton onClick={onOpen} aria-label='Search database' icon={<HamburgerIcon />} />
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
      <VStack
        backgroundColor='#E2E8F0'
        position={['inherit', 'inherit', 'absolute']}
        right={['unset', 'unset', '50%']}
        zIndex={1}
        p={2}
        borderRadius={5}
        spacing={4}
        minW='360px'
      >
        <Stack spacing={3}>
          <InputGroup>
            <Input type='text' placeholder='Pesquisar' pr='4.5rem' />
            <InputRightElement pointerEvents='none'>
              <SearchIcon color='gray.300' />
            </InputRightElement>
          </InputGroup>
        </Stack>
      </VStack>
    </>
  )
}
