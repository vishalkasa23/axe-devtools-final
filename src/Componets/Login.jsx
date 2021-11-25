import React from 'react';
import '../App.css'
const Login =(props) =>{
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,

    } =props;
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autofocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <div className="btnContainer">
                <button type="submit" onClick={handleLogin}>Sign In</button>
                </div>
            </div>
             
        </section>
    );
};

export default Login;