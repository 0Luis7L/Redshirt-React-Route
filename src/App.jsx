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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home img="../images/greenLogo.png" />}/>
      <Route path="upload" element={<LaptopDetails />} action={uploadAction}/>
    </Route>
  )
)

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
