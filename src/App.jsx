//import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
}
from 'react-router-dom'
// Pages
import LaptopDetails from './pages/LaptopDetails'

import LaptopsList from './pages/LaptopList'
import Login from './pages/Login'
// Layouts
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'

// Update //
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Login />} />
      <Route path="/unlisted" element={<LaptopsList/>} /> 
      <Route path="/upload/:idx" element={<LaptopDetails />} />
      
    </Route>
  )
)

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
