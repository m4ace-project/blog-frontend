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
        <Route path="verify/" element={ <Verify /> } />
        <Route path="google/" element={ <Google /> } /> 
        <Route path="welcome/" element={ <Welcome /> } />
        <Route path="facebook/" element={ <Facebook /> } />
      </Routes>

     

    </>
  )
}

export default App
