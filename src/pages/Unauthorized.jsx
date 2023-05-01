import Lock from "../images/qwrttt.jpg"
import { Link } from 'react-router-dom'

export default function Unauthorized() {
  return (
    <div>
        <h1>Unauthorized Page</h1>
        <div className="card-401">
          <div className="message-401">
            <p>This app is not publically available.</p>
            <br/>
            <p>To access this app please login first.</p>
          </div>
          <br />
          <div className="message-401">
            <Link to="/">
                <button className="submit">Return Login</button>
            </Link>
          </div>
        </div>      
    </div>
  )
}
/*alt="lock image for security purposes"
href='https://www.vecteezy.com/vector-art/696497-wire-low-poly-cyber-lock-security-padlock'
*/