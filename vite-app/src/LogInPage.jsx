import {Container, Form, Button} from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import React, { useEffect, useState, useContext } from 'react'
import jwt_decode from 'jwt-decode'
import './App.css'
import { LoginContext } from './App';




const LogInPage=()=>{
    const contextValue = useContext(LoginContext)
    const user = contextValue.user
    const setUser = contextValue.setUser
    // const [user, setUser] = useState({})
    
    function handleCallbackResponse(response){
        let userObject = jwt_decode(response.credential)
        setUser(userObject)
        document.getElementById('log-in-div').hidden = true
    }

    function handleSignOut(event){
        setUser({})
        document.getElementById('log-in-div').hidden = false
    }

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: '1028178874548-g3pckk027hfj75stjjqankbv4n4djpaf.apps.googleusercontent.com',
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("log-in-div"),
            {theme: 'outline', size: 'large'}
        )
    }, [])


    return(
        <Container>
             { Object.keys(user).length != 0 ? (  
                <>
                <div>
                    <img src={user.picture}></img>
                    <h3 className='text-light'>Welcome, {user.name}!</h3>
                </div>
                <Button onClick= {(e)=> handleSignOut(e)}>Sign Out</Button> 
                </>
             
             ): 
             <>
             <LoginForms/>
             <Container id="log-in-div"></Container>
             </>
             }
        </Container>
       
    )
    
}

function LoginForms(){
    return(
        <Container className='text-light login-page'>
            
            <h1 className="pt-5 pb-5">Login Page</h1>
            <Container className='login-container'>
                <Form>
                    <Form.Group className="mb-3" controlId='formBasicEmail'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter Email'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='Enter Password'/>
                        <Form.Text className='text-light'>We'll never share your password with anyone else.</Form.Text>
                    </Form.Group>
                </Form>
                <Button>Sign In</Button>
                <p className="pt-5"><i>Don't have an account? <a href=''>Sign up.</a></i></p>
            </Container>
        </Container>
    )
}

const signInHandler = async()=>{

}

export default LogInPage