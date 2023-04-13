

// All this should be new!!!
export default function Login(){

    return ( 
        <div className="login-card">
        <form>
            <div className='login-heading'>
                <h1 className="login">Welcome</h1>
                <h2 className="login">Login</h2>
            </div>
            <div className="login-inputs">
                <input className="login--input" type="email" placeholder="email"/>
                <input className="login--input" type="text" placeholder="password" />
            </div>
            <button className='loginBTN' type='submit'>Login</button>
        </form>
    </div>
    )
}