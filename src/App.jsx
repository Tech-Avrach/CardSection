import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import VideoComponent from './component/videoShowcase/VideoComponent'
import Testimonials from './component/videoShowcase/testimonials/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <VideoComponent />
    <Testimonials />
    </>
  )
}

export default App
