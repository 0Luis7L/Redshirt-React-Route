

// All this should be new!!!
export default function Login(){

    return ( 
        <div className="login-card">
        <form>
            <div>
                <h1 className="login-heading">Welcome</h1>
                <h2 className="login-heading">Login</h2>
            </div>
            <div className="login-inputs">
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password" />
            </div>
            <div className="loginBTN">
                <button className="BTNlogin" type='submit'>Login</button>
            </div>
        </form>
    </div>
    )
}