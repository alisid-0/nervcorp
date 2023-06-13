import {Container, Form, Button} from 'react-bootstrap'
import './App.css'
import LogIn from './LogIn'
// import LogOut from './LogOut'
// import {gapi} from 'gapi-script'
// import { useEffect } from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';


function LogInPage(){
    return(
        <Container className='text-light login-page'>
            <Header/>
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
                    </Form.Group>
                </Form>
                <Button>Sign In</Button>
                <p className="pt-5"><i>Don't have an account? <a href=''>Sign up.</a></i></p>
            </Container>
        </Container>
    )
}

export default LogInPage