import useAuth from '../hooks/useAuth'
import { useState} from 'react'
import { CallLogin } from './UploadComponents/rs-api-mocks'
import { Navigate, useNavigate } from 'react-router-dom';

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
        const creds = { user: username,
                        pwd: pwd

                        };
        
        console.log("creds:", JSON.stringify(creds));

        const result = await CallLogin(creds);
        
        console.log("result:", JSON.stringify(result));
        
        // check to see if valid user
        setAuth(result);
                        

        // to do:  set the  token in localstorage

        
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
        <div className="login-card">
      <form onSubmit={ formSubmit }>
      <div>
          <h1 className="login-heading">Welcome</h1>
          <h2 className="login-heading">Login</h2>
      </div>
      <div className="login-inputs">
          <input type="text" onChange={handleUserChange} placeholder="Email"/>
          <input type="password" onChange={ handlePwdChange } placeholder="Password" />
      </div>
      <div className="loginBTN">
          <button className="BTNlogin" onClick={handleLogin} type='submit'>Login</button>
      </div>
  </form>

    
    </div>
    )
}