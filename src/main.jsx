import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    
       <App />
=======
     <BrowserRouter>
         <App />
      </BrowserRouter>
>>>>>>> 35fa432 (Added Inbox, ProfileInfo, and Chat Pages)
       
  </StrictMode>,
)
