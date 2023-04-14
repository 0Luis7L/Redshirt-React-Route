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
import RequireAuth from './components/RequireAuth'



const ROLES = {
    'poster': 2000,
    'refurbisher': 3000

}

// Update //
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Login />} />
      { /*  these are protected routes */}
      { /*  poster role only */}
      <Route element={<RequireAuth allowedRoles={[ROLES.poster]} />}>
      <Route path="/unlisted" element={<LaptopsList/>} /> 
      <Route path="/upload/:idx" element={<LaptopDetails />} />
      </Route>

      

      
    </Route>
  )
)

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
