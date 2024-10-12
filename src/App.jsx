import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Component/Banner'
import About_sig  from './Component/About_sig'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner/>
      <About_sig/>
    </>
  )
}

export default App
