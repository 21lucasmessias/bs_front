import { Avatar, Box, Stack, Text, Grid, CloseButton } from '@chakra-ui/react'
import { useNavigate } from 'react-router'
import { cardData } from '../utils/card'

export default function SocialProfileWithImage() {
  const navigate = useNavigate()
  return (
    <Stack w='100%'>
      <CloseButton onClick={() => navigate('/mobile')} />
      <Text>Selecione seu Barbeiro</Text>
      <Grid templateColumns='repeat(3, 1fr)' gap={3} alignContent='center' justifyItems='center'>
        {cardData.map(({ name, image }) => {
          return (
            <>
              <Box display='grid' w='30%' h='20%'>
                <Avatar size='lg' name={name} src={image} />
                <Text w='100%'>{name}</Text>
              </Box>
            </>
          )
        })}
      </Grid>
    </Stack>
  )
}
