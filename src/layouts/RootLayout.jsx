import { NavLink, Outlet } from "react-router-dom";


export default function RootLayout() {
  return (
    <div>
        <header>
          <nav>
            <h1>Project Redshirt</h1>
            <NavLink to="/">Login</NavLink>
            <NavLink to="/unlisted">Unlisted</NavLink>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>
    </div>
  )
}
