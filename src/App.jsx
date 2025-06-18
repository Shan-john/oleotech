import { useState } from 'react'
 
import './App.css'
 
import Headersection from './Components/Headersection'
import CarouselSlider from './Components/CarouselSlider'
import BodySection from './Components/BodySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div   className=' w-full'>
        <Headersection/>
        <CarouselSlider/>
        <BodySection/>
        </div>
    </>
  )
}

export default App
