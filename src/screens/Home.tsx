import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCalendar,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import BarberCard from '../components/CardBarber'
import logo from '../assets/image/picwish.png'
import Agendamento from '../components/Locale'

interface LinkItemProps {
  name: string
  icon: IconType
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome },
  { name: 'Financeiro', icon: FiTrendingUp },
  { name: 'Agendamento', icon: FiCalendar },
  { name: 'Favoritos', icon: FiStar },
  { name: 'Configurações', icon: FiSettings },
]

export default function SidebarWithHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box w='100%' minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        bg='#0B0B0B'
        onClose={() => onClose}
        zIndex={1}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} bg='#0B0B0B' />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        <Agendamento />
        <BarberCard />
      </Box>
    </Box>
  )
}

interface SidebarProps extends BoxProps {
  onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('#0B0B0B', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Image
          src={logo}
          justifyContent='center'
          alignItems='center'
          w='150px'
          h='100px'
          position='absolute'
          border='0px'
        />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link href='#' style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align='center'
        color='white'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: '#97632B',
          color: 'white',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

interface MobileProps extends FlexProps {
  onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('#0B0B0B', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        color='white'
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'
      >
        <Image
          src={logo}
          top='0px'
          justifyContent='center'
          alignItems='center'
          w='140px'
          h='90px'
          position='absolute'
          border='0px'
        />
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton size='lg' variant='ghost' aria-label='open menu' icon={<FiBell />} />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} transition='all 0.3s' _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems='flex-start'
                  spacing='1px'
                  ml='2'
                >
                  <Text fontSize='sm' color='gray.600'>
                    Justina Clark
                  </Text>
                  <Text fontSize='xs' color='gray.600'>
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              color='white'
              bg={useColorModeValue('#0B0B0B', '#0B0B0B')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem
                _hover={{
                  bg: '#97632B',
                }}
              >
                Perfil
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: '#97632B',
                }}
              >
                Configurações
              </MenuItem>
              <MenuItem
                _hover={{
                  bg: '#97632B',
                }}
              >
                Cobrança
              </MenuItem>
              <MenuDivider />
              <MenuItem
                _hover={{
                  bg: '#97632B',
                }}
              >
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
