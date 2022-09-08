import * as React from 'react'
import FullCalendar, { formatRange } from '@fullcalendar/react'
import { Box, Flex } from '@chakra-ui/react'
import timeGridPlugin from '@fullcalendar/timegrid'

export const Scheduler = () => {
  return (
    <Flex flex={1} justifyContent='center' alignItems={'center'}>
      <Box minW={'1000px'}>
        <FullCalendar
          plugins={[timeGridPlugin]}
          initialView='timeGridWeek'
          locale={'pt'}
          allDaySlot={false}
          slotLabelFormat={{
            hour: '2-digit',
            minute: '2-digit',
          }}
          events={[
            {
              title: 'Meeting',
              start: '2022-09-07T14:30:00',
              extendedProps: {
                status: 'done',
              },
            },
            {
              title: 'Birthday Party',
              start: '2022-09-08T07:00:00',
              backgroundColor: 'green',
              borderColor: 'green',
            },
          ]}
        />
      </Box>
    </Flex>
  )
}
