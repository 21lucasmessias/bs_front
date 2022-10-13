import {
  CheckboxGroup,
  Stack,
  Checkbox,
  Text,
  Button,
  ButtonGroup,
  CloseButton,
  Box,
} from '@chakra-ui/react'

import { useNavigate } from 'react-router'
import { useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { cutData } from '../utils/price'

const getFormattedPrice = (price) => `$${price.toFixed(2)}`

export default function Serviços() {
  const navigate = useNavigate()
  const [checkedState, setCheckedState] = useState(new Array(cutData.length).fill(false))
  const [total, setTotal] = useState(0)
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    )
    setCheckedState(updatedCheckedState)

    const totalPrice = updatedCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + cutData[index].price
      }
      return sum
    }, 0)

    setTotal(totalPrice)
  }

  return (
    <Box h='50%' w='100%'>
      <CloseButton onClick={() => navigate('/mobile')} />
      <CheckboxGroup colorScheme='green'>
        <Stack display='flex' bottom='0' w='100%'>
          {cutData.map(({ name, price }, index) => {
            return (
              <>
                <Checkbox
                  id={`custom-checkbox-${index}`}
                  name={name}
                  value={name}
                  checked={checkedState[index]}
                  onChange={() => handleOnChange(index)}
                >
                  <Text>{getFormattedPrice(price)}</Text>
                  {name}
                </Checkbox>
              </>
            )
          })}
          <ButtonGroup>
            <Button
              bg='#4d4d4d'
              color='white'
              _hover={{
                bg: '#97632B',
                color: 'white',
              }}
            >
              <IoIosArrowBack onClick={() => navigate('/agenda/unidade')}></IoIosArrowBack>
            </Button>
            <Button
              bg='#313131'
              color='white'
              _hover={{
                bg: '#97632B',
                color: 'white',
              }}
              onClick={() => navigate('/agenda/unidade/service/barber')}
            >
              <Text>Total: {getFormattedPrice(total)}</Text>
              <Text marginLeft={2}>Confirmar</Text>
              <IoIosArrowForward></IoIosArrowForward>
            </Button>
          </ButtonGroup>
        </Stack>
      </CheckboxGroup>
    </Box>
  )
}
