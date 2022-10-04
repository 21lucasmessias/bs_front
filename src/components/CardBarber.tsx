import { Avatar, Box, Stack, Text } from '@chakra-ui/react'
import { cardData } from '../utils/card'

export default function SocialProfileWithImage() {
  return (
    <Stack w='100%' h='50%'>
      {cardData.map(({ name, image }) => {
        return (
          <>
            <Box display='flex'>
              <Avatar size='lg' name={name} src={image} />
              <Text>{name}</Text>
            </Box>
          </>
        )
      })}
    </Stack>
  )
}
