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
import Upload, { uploadAction } from './pages/Upload'
import LaptopsList from './pages/LaptopList'
import Login from '../../../Login/Login-app/src/Login'
// Layouts
import RootLayout from './layouts/RootLayout'

// Update //
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Login />}/>
      <Route path="upload/:idx" element={<LaptopDetails />} action={uploadAction}/>
      <Route path="unlisted" element={<LaptopsList/>} /> 
    </Route>
  )
)

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
