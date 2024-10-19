import { useState } from 'react'
import './App.css'
import Google from './pages/Google';
import Verify from './pages/Verify';
import Facebook from './pages/Facebook';
import Welcome from './pages/Welcome';
import Account from './pages/Account';
import Check from './pages/Check';
import Whatsapp from './pages/Whatsapp';
import Login from './pages/Login';
import Find from './pages/Find';
import { Routes, Route } from 'react-router-dom';



 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/verify" element={ <Verify /> } />
        <Route path="/facebook" element={ <Facebook /> } /> 
        <Route path="/google" element={ <Google /> } /> 
        <Route path="/" element={ <Welcome /> } />
        <Route path="/account" element={ <Account /> } />
        <Route path="/check" element={ <Check /> } />
        <Route path="/whatsapp" element={ <Whatsapp /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/find" element={ <Find /> } />
      </Routes>

     

    </>
  )
}

export default App
