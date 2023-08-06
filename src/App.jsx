import { useState } from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import ServiceSection from './components/ServiceSection'
import Footer from './components/Footer'
import data from './data'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const serviceSections = data.map(section => {
    return (
      <ServiceSection key={section.header}
        header={section.header}
        description={section.description}
        cards={section.cards}
      />
    )
  })

  return (
    <>
      <div>
        <NavBar />
        <Main />
        {serviceSections}
        <Footer />
      </div>
    </>
  )
}

export default App
