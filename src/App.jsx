import { useState } from 'react'
import './App.css'
import Google from './pages/Google';
import Verify from './pages/Verify';
import Facebook from './pages/Facebook';
import Welcome from './pages/Welcome';
import Confirm from './pages/Confirm';
import Account from './pages/Account';
import Check from './pages/Check';
import Whatsapp from './pages/Whatsapp';
import Login from './pages/Login';
import Find from './pages/Find';
import Travel from './pages/Travel';
import HomeDiy from './pages/HomeDiy';
import Tech from './pages/Tech';
import Personalfinance from './pages/Personalfinance';
import Parenting from './pages/Parenting';
import Personalization from './pages/Personalization';
import Fashion from './pages/Fashion';
import Arts from './pages/Arts';
import Food from './pages/Food';
import Games from './pages/Games';
import Fitness from './pages/Fitness';
import { Routes, Route } from 'react-router-dom';



 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/verify" element={ <Verify /> } />
        <Route path="/facebook" element={ <Facebook /> } /> 
        <Route path="/google" element={ <Google /> } /> 
        <Route path="/confirm" element={ <Confirm /> } /> 
        <Route path="/" element={ <Welcome /> } />
        <Route path="/account" element={ <Account /> } />
        <Route path="/check" element={ <Check /> } />
        <Route path="/whatsapp" element={ <Whatsapp /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/find" element={ <Find /> } />
        <Route path="/travel" element={ <Find /> } />
        <Route path="/games" element={ <Games /> } />
        <Route path="/food" element={ <Food /> } />
        <Route path="/fitness" element={ <Fitness /> } />
        <Route path="/tech" element={ <Tech /> } />
        <Route path="/homediy" element={ <HomeDiy /> } />
        <Route path="/personalization" element={ <Personalization /> } />
        <Route path="/personalfinance" element={ <Personalfinance /> } />
        <Route path="/parenting" element={ <Parenting /> } />
        <Route path="/arts" element={ <Arts /> } />
        <Route path="/fashion" element={ <Fashion /> } />
      </Routes>

     

    </>
  )
}

export default App
