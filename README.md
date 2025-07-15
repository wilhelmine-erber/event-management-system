# event-management-challenge
- react web app (frontend)
- spring boot (backend)

- user can log in with test data
- user can create events
- user can see a list of all events
- user can click on a event display details 

## technology-stack
- frontend - react, react-router-dom
- backend - spring boot (REST API)
- UI-Framework - Tailwind CSS
- Database

### Phase 1 - Database
- with chatGPT I have created a java spring-boot backend with 
    controller, model and repository
- my problem was reading in the code in the short time, so I could not 
    customize the routes, which is most important for the connection


### Phase 2 - React web app
- user can login with test data
- user can create new event in sidebar and main content
- all createtd events lsit on sidbar and are clickable
- click on event from sidebar, user can see details to the event


> what is still missing:
- api integration
- state management, i would use useContext because I have already used it 
    (this ist the next step so that the connection to the backend can be 
    established and the data can be collected cleanly)

### Phase 3 - Integration & Testing


### Phase 4 - Documentation


#### setup frontend

- a stupid error in nodeModules/vite/dist/node/chunks/dep-DZ2tZksn.js (replace `const hash = crypto.hash('sha256', 'test', 'hex');` with this: `const h$2 = crypto.createHash('sha256').update('test').digest('hex');`)
- I found this solution here: https://blog.ni18.in/crypto-hash-is-not-a-function-error-in-javascript/

- go to frontend `cd frontend`
- start frontend `npm run dev`


#### setup backend
- mit ChatGPT Schritt-fürSchritt Anleitung

- to run backend, go to `cd backend && mvn spring-boot:run`

- I have checked api-endpoints with postman, it works but unfortunately I had not completely 
    concentrated on the connection of frontend and backend, which is why this is still missing, 
    I will definitely continue to work on it even if the 24 hour challenge is then over

APIs
- alle Benutzer abrufen 
`GET http://localhost:8080/api/users`

- neuen Benutzer erstellen (username, email, role)
`POST http://localhost:8080/api/users`

- alle events abrufen
`GET http://localhost:8080/api/events`

- neue events erstelen (title, description, date, location, maxParticipants, organizer)
`POST http://localhost:8080/api/events`