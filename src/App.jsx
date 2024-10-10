import { useState } from 'react'
import './App.css'
import Google from './pages/Google';
import Facebook from './pages/Facebook';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Facebook />

    </>
  )
}

export default App
