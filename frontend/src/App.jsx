import { useState, useEffect } from 'react'
import './App.css'
import EventList from './components/EventList'
import Header from './components/Header'
import CreateEvent from './components/CreateEvent'
import NoEventListed from './components/NoEventListed'
import EventDetail from './components/EventDetail'
import { fetchAllEvents, createEvent } from './services/event'

function App() {

  const [eventState, setEventState] = useState({
    slectedEventId: undefined,
    events: []
  })

  // Data fetch from backend
  useEffect(() => {
    async function loadEvents() {
      try {
        const eventsFromServer = await fetchAllEvents()
        setEventState(prev => ({
          ...prev,
          events: eventsFromServer
        }))
      } catch (error) {
        console.error('Error by loading events:', error)
      }
    }
    loadEvents()
  }, [])

  // show form to create new event
  function handleStartAddEvent() {
    setEventState(prevState => {
      return {
        ...prevState,
        slectedEventId: null
      }
    })
  }

  // create new event only local
  // function handleAddEvent(eventData) {
  //   setEventState(prevState => {
  //     const eventId = Math.random()
  //     const newEvent = {
  //       id: eventId,
  //       ...eventData
  //     }

  //     return {
  //       ...prevState,
  //       slectedEventId: undefined,
  //       events: [...prevState.events, newEvent]
  //     }
  //   })
  // }

  // create new event fetch backend (POST)
  async function handleAddEvent(eventData) {
    try {
      const newEvent = await createEvent(eventData)

      setEventState(prev => ({
        ...prev,
        slectedEventId: undefined,
        events: [...prev.events, newEvent]
      }))
    } catch (error) {
      console.error('Error by creating new Event:', error)
    }
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
