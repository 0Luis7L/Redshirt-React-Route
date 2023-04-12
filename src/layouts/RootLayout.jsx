import { NavLink, Outlet } from "react-router-dom";


export default function RootLayout() {
  return (
    <div>
        <header>
          <nav>
            <h1>Project Redshirt</h1>
            <NavLink to="/">Total Lists</NavLink>
            <NavLink to="upload">Upload Post</NavLink>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>
    </div>
  )
}
