import React, { useState }from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../services/auth'
import { Button } from 'react-bootstrap'
import "./scss/login.scss"


const defaultValues = {
    username: '',
    password: ''
}

const Login = () => {

    const [user, setUser] = useState(defaultValues)

    const handleUpdate = event => {
        setUser(prevuser => ({
            ...prevuser,
            [event.target.name] : event.target.value,
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        handleLogin(user)
        navigate(`/app/profile`)
    }

    if( isLoggedIn() ){
        navigate(`/app/profile`)
    }
    
    return ( 
        <>
            <h1> Log in </h1>
    
            <form
                method="post"
                onSubmit={handleSubmit}
            >  
            <div className="loginbox">
                <label>
                    Username
                </label>
                <input type="text" name="username" onChange={handleUpdate} />
                
                <label>
                    Password
                </label>
                <input
                    type="password" 
                    name="password" 
                    onChange={handleUpdate} 
                />
 
                <br />
                <Button primary className="logbutton" type="submit"> Log In </Button>
            </div>
                
            </form>
        </>
    );
}
 
export default Login;
