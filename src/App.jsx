//import './App.css'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
}
from 'react-router-dom'
// Pages
import Home from './pages/Home'
import Upload, { uploadAction } from './pages/Upload'
// Layouts
import RootLayout from './layouts/RootLayout'
import data from './data'
import LaptopDetails from './pages/LaptopDetails'
import LaptopsList from './pages/LaptopList'
import Login from '../../../Login/Login-app/src/Login'

// Update //
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />}/>
      <Route path="upload/:idx" element={<LaptopDetails />} action={uploadAction}/>
      <Route path="/unlisted" element={<LaptopsList/>} /> 
    </Route>
  )
)

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
