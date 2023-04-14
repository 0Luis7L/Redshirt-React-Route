import useAuth from '../hooks/useAuth'
import { useState} from 'react'
import { CallLogin } from './UploadComponents/rs-api-mocks'

// All this should be new!!!
export default function Login(){

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
        
    }

    return ( 
        <div className="login-card">
   {/*    <form>  */}
            <div className='login-heading'>
                <h1 className="login">Welcome</h1>
                <h2 className="login">Login</h2>
            </div>
            <div className="login-inputs">
                <input className="login--input" type="text" placeholder="email" onChange={handleUserChange}/>
                <input className="login--input" type="text" placeholder="password"  onChange={handlePwdChange} />
            </div>
            <button className='loginBTN'  onClick={handleLogin}>Login</button>
 {/*       </form>          */}
    </div>
    )
}