import { useState } from 'react'
import './App.css'
import Google from './pages/Google';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Google />

    </>
  )
}

export default App
