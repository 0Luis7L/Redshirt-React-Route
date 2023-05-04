import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {AuthProvider} from './context/AuthProvider'
import { LaptopsProvider } from './context/LaptopProvider'


ReactDOM.createRoot(document.getElementById('root')).render(

  
    <AuthProvider>
     <LaptopsProvider>
      <App/>
     </LaptopsProvider>
    </AuthProvider>
  

)
