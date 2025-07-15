// file to communicate with backend, the connection to backend dont work 
// to mock data I implement functions in App.jsx to show the userInput data

const BASE_URL = 'http://localhost:8080/api'

// GET all events
export async function fetchAllEvents() {
  const response = await fetch(`${BASE_URL}/events`)
  return response.json()
}

// GET Event with ID
export async function fetchEventById(id) {
  const response = await fetch(`${BASE_URL}/events/${id}`)
  return response.json()
}

// POST event
export async function createEvent(eventData) {
  const response = await fetch(`${BASE_URL}/events`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventData)
  })
  return response.json()
}