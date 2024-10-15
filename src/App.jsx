// import { useState } from 'react'
import './App.css'
import Banner from './Component/Banner'
import About_sig  from './Component/About_sig'

// eslint-disable-next-line react/prop-types
function App({ Sig, events }) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Banner Sig={Sig}/>
      <About_sig events={events} Sig={Sig}/>
    </>
  )
}

export default App
