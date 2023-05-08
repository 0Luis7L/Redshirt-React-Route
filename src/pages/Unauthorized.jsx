import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge, faUserLock } from '@fortawesome/free-solid-svg-icons'

export default function Unauthorized() {
  return (
    <div>
        <h1>Unauthorized Page <FontAwesomeIcon icon={faUserLock} size='xs'/></h1>
        <div className="card-401" alt="lock image for security purposes" href='https://www.vecteezy.com/vector-art/696497-wire-low-poly-cyber-lock-security-padlock'>
          <div className="message-401">
            <p>This app is not publically available.</p>
            <br/>
            <p>To access this app please login first.</p>
          </div>
          <br />
          <div className="message-401">
            <Link to="/" style={{display: "flex", flexDirection: "row", textDecoration: "none"}}>
                <button className="submit">Return Login </button>
                <FontAwesomeIcon icon={faIdBadge} className="login-heading fa-2x" style={{marginTop: 7 + 'px'}} />
            </Link>
          </div>
        </div>      
    </div>
  )
}
/*alt="lock image for security purposes"
href='https://www.vecteezy.com/vector-art/696497-wire-low-poly-cyber-lock-security-padlock'
*/