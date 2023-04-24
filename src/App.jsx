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
import RequireAuth from './components/RequireAuth'
import RootLayout from './layouts/RootLayout'



const ROLES = {
    'poster': 2000,
    'refurbisher': 3000

}
/* 



const ROLES = {
    'poster': 2000,
    'refurbisher': 3000

}



const ROLES = {
    'poster': 2000,
    'refurbisher': 3000

}
*/



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} error={<Error/>}>
      {/* these are public routes */ }
      <Route path="/" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />}/>
      <Route path="*" element={<Error />} />
      { /*  these are protected routes */}
      { /*  poster role only */}
      <Route element={<RequireAuth allowedRoles={[ROLES.poster]} />}>
      <Route path="/unlisted" element={<LaptopsList/>} /> 
      <Route path="/upload/:idx" element={<LaptopDetails />} />
      </Route>
      <Route element={<RequireAuth allowedRoles={[ROLES.refurbisher]} />}>
      <Route path="/refurbish" element={<RefurbisherUpload />} />
    
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
