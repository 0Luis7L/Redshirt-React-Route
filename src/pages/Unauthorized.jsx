import React from 'react'
import { Link } from 'react-router-dom'

export default function Unauthorized() {
  return (
    <div>
        <h1>Unauthorized Page</h1>
        <br />
        <p>This app is not publically available.</p>
        <br/>
        <p>To access this app please login first.</p>
        <br />
        <Link to="/">
            <button>Return Login</button>
        </Link>
    </div>
  )
}
