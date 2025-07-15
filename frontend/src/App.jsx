import { useState } from 'react'
import './App.css'
import EventList from './components/EventList'
import Header from './components/Header'
import CreateEvent from './components/CreateEvent'
import NoEventListed from './components/NoEventListed'
import EventDetail from './components/EventDetail'

function App() {

  const [eventState, setEventState] = useState({
    slectedEventId: undefined,
    events: []
  })

  // show form to create new event
  function handleStartAddEvent() {
    setEventState(prevState => {
      return {
        ...prevState,
        slectedEventId: null
      }
    })
  }

  // create new event
  function handleAddEvent(eventData) {
    setEventState(prevState => {
      const eventId = Math.random()
      const newEvent = {
        id: eventId,
        ...eventData
      }

      return {
        ...prevState,
        slectedEventId: undefined,
        events: [...prevState.events, newEvent]
      }
    })
  }

  // cancel create new event
  function onCancelAddEvent() {
    setEventState(prevState => {
      return {
        ...prevState,
        slectedEventId: undefined
      }
    })
  }

  // select one Event to show details
  function handleSelectEvent(id) {
    setEventState(prevState => {
      return {
        ...prevState,
        slectedEventId: id
      }
    })
  }

  const selectedEvent = eventState.events.find(eventItem => eventItem.id === eventState.slectedEventId)

  let content = <EventDetail eventItem={selectedEvent} />

  if (eventState.slectedEventId === null) {
    content = <CreateEvent onAdd={handleAddEvent} onCancel={onCancelAddEvent} />
  } else if (eventState.slectedEventId === undefined) {
    content = <NoEventListed onStartAddEvent={handleStartAddEvent} />
  }


  return (
    <>

      <Header />

      <main className='h-screen my-8 flex gap-8'>
        <EventList
          events={eventState.events}
          onSelectedEvent={handleSelectEvent}
          onStartAddEvent={handleStartAddEvent} />
        {content}
      </main>

    </>
  )
}

export default App
