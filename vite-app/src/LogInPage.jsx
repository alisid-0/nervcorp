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
    const signedIn = contextValue.signedIn
    const setSignedIn = contextValue.setSignedIn
    
    function handleCallbackResponse(response){
        let userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject)
        setSignedIn(true)
        document.getElementById('log-in-div').hidden = true
    }

    function handleSignOut(event){
        setUser({})
        setSignedIn(false)
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
             { (signedIn == true) ? (  
                <>
                <div className='py-5'>
                    <h3 className='text-light'>Welcome, {user.name}!</h3>
                    <img className='py-4' src={user.picture}></img>
                </div>
                <Button className='mb-5' onClick= {(e)=> handleSignOut(e)}>Sign Out</Button> 
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
    const contextValue = useContext(LoginContext)
    const user = contextValue.user
    const setUser = contextValue.setUser
    const signedIn = contextValue.signedIn
    const setSignedIn = contextValue.setSignedIn
    const signInHandler = async()=>{
        const email = document.getElementById(`formBasicEmail`).value
        const password = document.getElementById(`formBasicPassword`).value
        console.log(email,password)
        const users = await axios.get(`http://localhost:3001/api/users`)
        console.log(users.data)
        for(let i of users.data){
            console.log(i)
            if (email == i.email){
                console.log(`Signed in!`)
                console.log(i.name, i.email)
                let userObject = {
                    email: i.email,
                    name: i.name
                }
                console.log(userObject)
                setSignedIn(true)
                setUser(userObject)
            } else {
                console.log(`Account not found. Please try again.`)
                setSignedIn(false)
                setUser({})
            }
        }
    }
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
                <Button onClick={signInHandler}>Sign In</Button>
                <p className="pt-5"><i>Don't have an account? <a href=''>Sign up.</a></i></p>
            </Container>
        </Container>
    )
}



export default LogInPage