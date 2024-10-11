import { useState } from 'react'
import './App.css'
import Google from './pages/Google';
import Facebook from './pages/Facebook';
import Welcome from './pages/Welcome';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <Welcome />

    </>
  )
}

export default App
