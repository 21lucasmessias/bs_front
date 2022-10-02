import {
  Box,
  Tabs,
  TabList,
  Tab,
  Text,
  Image,
  useDisclosure,
  Drawer,
  DrawerContent,
} from '@chakra-ui/react'
import { IoPersonOutline, IoCalendarOutline, IoSettingsOutline } from 'react-icons/io5'
import React from 'react'

import Serviços from '../components/Serviços'

const HomeMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Box bg='white' position='absolute' bottom='0' h='10%' w='100%'>
        <Tabs justifyContent={'center'} isFitted variant='enclosed'>
          <TabList color='#9d9eb4'>
            <Tab display='grid' _selected={{ color: '#97632B' }} onClick={onOpen}>
              <IoCalendarOutline></IoCalendarOutline>
              <Text>Agendar</Text>
              <Drawer isOpen={isOpen} placement='bottom' onClose={onClose}>
                <DrawerContent>
                  <Serviços />
                </DrawerContent>
              </Drawer>
            </Tab>
            <Tab display='grid' _selected={{ color: '#97632B' }}>
              <IoPersonOutline></IoPersonOutline>
              <Text>Perfil</Text>
            </Tab>
            <Tab display='grid' _selected={{ color: '#97632B' }}>
              <IoSettingsOutline></IoSettingsOutline>
              <Text>Configurações</Text>
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Box>
  )
}

export default HomeMobile
