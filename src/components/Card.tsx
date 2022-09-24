import { Box, Image, Badge, Button } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

function BarberCard() {
  const property = {
    imageUrl: 'https://i.pinimg.com/564x/89/90/e0/8990e0304c44794197af164ab0138011.jpg',
    imageAlt: 'barbeiro01',
    name: 'Neymar Junior',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      bg='#F3EBCA'
      h='360px'
      w='250px'
    >
      <Image src={property.imageUrl} alt={property.imageAlt} w='250px' />

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          <Badge variant='solid' colorScheme='green'>
            Disponivel
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            <Button colorScheme='teal' size='xs'>
              Reservar
            </Button>
          </Box>
        </Box>

        <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1}>
          {property.name}
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon key={i} color={i < property.rating ? '#8C5931' : '#908d90'} />
            ))}
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
            {property.reviewCount} reviews
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BarberCard
