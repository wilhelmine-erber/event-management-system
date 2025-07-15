
import './App.css'
import EventList from './components/EventList'
import Header from './components/Header'

function App() {


  return (
    <>
     
      <Header />

      <main className='h-screen my-8 flex gap-8'>
        <EventList />
      </main>
    </>
  )
}

export default App
