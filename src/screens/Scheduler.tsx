import * as React from 'react'
import FullCalendar, { createDuration } from '@fullcalendar/react'
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
          hiddenDays={[0]}
          showNonCurrentDates={false}
          eventBorderColor={'rgb(142, 99, 58)'}
          eventBackgroundColor={'rgb(252, 143, 15)'}
          slotMinTime={{ hours: 10 }}
          slotMaxTime={{ hours: 20.5 }}
          aspectRatio={1.8}
          slotLabelInterval={createDuration({
            minutes: 15,
          })}
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
              start: '2022-09-08T16:30:00',
              backgroundColor: 'green',
              borderColor: 'green',
            },
          ]}
        />
      </Box>
    </Flex>
  )
}
