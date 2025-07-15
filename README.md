# event-management-challenge
- react web app (frontend)
- spring boot (backend)

- user can create events
- user can log in
- user can join events

## technology-stack
- frontend - react
- backend - spring boot (REST API)
- UI-Framework - Tailwind CSS
- Database

### Phase 1 - Database


### Phase 2 - React web app
- user can login with test data
- user can create new event in sidebar and main content
- all createtd events lsit on sidbar and are clickable
- click on event from sidebar, user can see details to the event
- used time: 5h

> what is still missing:
- api integration
- state management

### Phase 3 - Integration & Testing


### Phase 4 - Documentation


#### setup frontend

- a stupid error in nodeModules/vite/dist/node/chunks/dep-DZ2tZksn.js (replace `const hash = crypto.hash('sha256', 'test', 'hex');` with this: `const h$2 = crypto.createHash('sha256').update('test').digest('hex');`)
- I found this solution here: https://blog.ni18.in/crypto-hash-is-not-a-function-error-in-javascript/

- go to frontend `cd frontend`
- start frontend `npm run dev`


#### setup backend
- mit ChatGPT Schritt-fürSchritt Anleitung

APIs
- alle Benutzer abrufen 
`GET http://localhost:8080/api/users`

- neuen Benutzer erstellen (username, email, role)
`POST http://localhost:8080/api/users`

- alle events abrufen
`GET http://localhost:8080/api/events`

- neue events erstelen (title, description, date, location, maxParticipants, organizer)
`POST http://localhost:8080/api/events`