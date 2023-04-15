import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
}
from 'react-router-dom'
// Pages
import LaptopDetails from './pages/LaptopDetails'
import RefurbisherUpload from './pages/RefurbisherUpload'
import LaptopsList from './pages/LaptopList'
import Login from './pages/Login'
import Error from './pages/Error'
import Unauthorized from './pages/Unauthorized'
// Layouts
import RootLayout from './layouts/RootLayout'


// Update //
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Login />} />
      <Route path="/unlisted" element={<LaptopsList/>} /> 
      <Route path="/upload/:idx" element={<LaptopDetails />} />
      <Route path="/refurbish" element={<RefurbisherUpload />} />
      <Route path="/unauthorized" element={<Unauthorized />}/>
      <Route path="*" element={<Error />} />
    </Route>
  )
)

function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App
