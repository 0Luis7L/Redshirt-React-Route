import useAuth from '../hooks/useAuth'
import { useState} from 'react'
import { CallLogin } from './rs-api-endpoints'
import { Navigate, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUnlockKeyhole, faIdBadge } from '@fortawesome/free-solid-svg-icons'

// All this should be new!!!
export default function Login(){

    // for navigation post login
    const navigate = useNavigate();

    const { setAuth } = useAuth();
    // state variables for username , pwd
    const [ username,setUser] = useState('')
    const [ pwd, setPwd] = useState('')

    const  handlePwdChange=(e) =>{
        setPwd( e.target.value);

    }
    const handleUserChange = (e)=> {

        setUser(e.target.value);
    }


    const handleLogin = async ()=>{
      
        console.log("inside login");
        // get user name and password
        const creds = { username: username,
                        password: pwd

                        };
        
        console.log("creds:", JSON.stringify(creds));

        const result = await CallLogin(creds);
        
        console.log("result:", JSON.stringify(result));
        
        // check to see if valid user
        setAuth(result);
                        

        // to do:  set the  token in localstorage
        localStorage.setItem("rs-token", result.token);
        
        // now based on the role navigate to default page
        if( result.roles[0] == 2000)
                        navigate("/unlisted");
        if( result.roles[0] == 3000)
                        navigate("/refurbish");
        
        
    }
    // this just prevents the default behavior
    function formSubmit(e){
        e.preventDefault();

    }

    return ( 
        <div className="Login" alt="blue and green background image" href="https://www.vecteezy.com/free-vector/technology">
        <div className="login-card">
            <form onSubmit={ formSubmit }>
            <div className="login-heading">
                <h1 className="login-heading" style={{fontSize: 50 + 'px'}}>Welcome</h1>
                <h2 className="login-heading">Login</h2>
                <FontAwesomeIcon icon={faIdBadge} className="login-heading fa-4x" style={{marginTop: 10 + 'px'}} />
            </div>
            <div className="login-inputs">
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} className='login-icon' />
                    <input type="text" onChange={handleUserChange} placeholder="Email"/>
                </div>
                <div className="password">
                    <FontAwesomeIcon icon={faUnlockKeyhole} className='login-icon' />
                    <input type="password" onChange={ handlePwdChange } placeholder="Password" style={{marginLeft: 7 + 'px', borderColor: "white"}} />
                </div>
        
            </div>
            <div className="loginBTN">
                <button className="BTNlogin" onClick={handleLogin} type='submit'>Login</button>
            </div>
            </form>
        </div>
        </div>
    )
}
/*
<a href="https://www.vecteezy.com/free-vector/technology">Technology Vectors by Vecteezy</a>

*/