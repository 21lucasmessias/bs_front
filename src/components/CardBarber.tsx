import {
  Heading,
  Avatar,
  Box,
  Center,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react'

export default function SocialProfileWithImage() {
  return (
    <Center py={6} marginLeft={20}>
      <Box
        maxW={'230px'}
        w={'250px'}
        bg={useColorModeValue('white', 'gray.800')}
        border='1px'
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        cursor='pointer'
      >
        <Flex justify={'center'}>
          <Avatar
            size={'xl'}
            src={'https://i.pinimg.com/564x/89/90/e0/8990e0304c44794197af164ab0138011.jpg'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Neymar Junior
            </Heading>
          </Stack>

          <Stack direction={'row'} justify={'center'} spacing={6}>
            <Stack spacing={0} align={'center'}>
              <Text fontWeight={600}>35</Text>
              <Text fontSize={'sm'} color={'gray.500'}>
                Avaliações
              </Text>
            </Stack>
          </Stack>

          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.900')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Reservar
          </Button>
        </Box>
      </Box>
    </Center>
  )
}
