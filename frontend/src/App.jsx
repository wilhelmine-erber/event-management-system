import { useState } from 'react'
import './App.css'
import EventList from './components/EventList'
import Header from './components/Header'
import CreateEvent from './components/CreateEvent'
import NoEventListed from './components/NoEventListed'

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
        id: eventId
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



  let content;

  if (eventState.slectedEventId === null) {
    content = <CreateEvent onAdd={handleAddEvent} onCancel={onCancelAddEvent} />
  } else if (eventState.slectedEventId === undefined) {
    content = <NoEventListed onStartAddEvent={handleStartAddEvent} />
  }


  return (
    <>

      <Header />

      <main className='h-screen my-8 flex gap-8'>
        <EventList events={eventState.events} />
        {content}
      </main>

    </>
  )
}

export default App
