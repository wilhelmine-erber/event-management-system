// file to communicate with backend, the connection to backend dont work 
// to mock data I implement functions in App.jsx to show the userInput data

const BASE_URL = 'http://localhost:8080/api/users'

// here are functions to fetch data from backend

// register
export async function regsiterUser(userData) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
    })
    return response.json()
}

// login
export async function loginUser(credentials) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
    })
    return response.json()
}