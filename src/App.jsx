import { useState } from 'react'
import './App.css'
import Google from './pages/Google';
import Verify from './pages/Verify';
import Facebook from './pages/Facebook';
import Welcome from './pages/Welcome';
import { Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={ <Verify /> } />
        <Route path="/" element={ <Google /> } /> 
        <Route path="/" element={ <Welcome /> } />
        <Route path="/" element={ <Facebook /> } />
      </Routes>

     

    </>
  )
}

export default App
