import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
import { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import './App.css'

const clientId = '1028178874548-g3pckk027hfj75stjjqankbv4n4djpaf.apps.googleusercontent.com'

function LogIn(){

    const [user, setUser] = useState({})
    let isLoggedIn = false

    function handleCallbackResponse(response){
        console.log('Encoded JWT ID token: ' + response.credential)
        let userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject)
        document.getElementById('signInDiv').hidden = true
        isLoggedIn = true
    }

    function handleSignOut(event){
        setUser({})
        document.getElementById('signInDiv').hidden = false
        isLoggedIn= false
    }

    useEffect(()=>{
        /* global google */
        google.accounts.id.initialize({
            client_id: '1028178874548-g3pckk027hfj75stjjqankbv4n4djpaf.apps.googleusercontent.com',
            callback: handleCallbackResponse
        })

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: 'outline', size: 'large'}
        )
    }, [])


    return(
        <Container>
             <Container id="signInDiv"></Container>
             { Object.keys(user).length != 0 ? (  
                <>
                <Button onClick= {(e)=> handleSignOut(e)}>Sign Out</Button> 
             <div>
                <img src={user.picture}></img>
                <h3>Welcome, {user.name}!</h3>
             </div>
                </>
             
             ): null}
             {/* { Object.keys(user).length != 0 ? (
                <div>
                <img src={user.picture}></img>
                <h3>Welcome, {user.name}!</h3>
             </div>
             ): null} */}
        </Container>
       
    )
}

export default LogIn


// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google'
// import { useEffect } from 'react'
// import { Container } from 'react-bootstrap'

// const clientId = '1028178874548-g3pckk027hfj75stjjqankbv4n4djpaf.apps.googleusercontent.com'

// function LogIn(){

//     // useEffect(()=>{
//     //     /* global google */
//     //     google.accounts.id.initialize
//     // }, [])

//     const onSuccess = (res)=>{
//         console.log("LOGIN SUCCESS! ", res.profileObj)
//     }

//     const onFailure = (res)=>{
//         console.log('LOGIN FAILURE! ', res)
//     }


//     return(
//         <Container id="signInButton">
//             <GoogleOAuthProvider clientId='1028178874548-g3pckk027hfj75stjjqankbv4n4djpaf.apps.googleusercontent.com'>
//             <GoogleLogin
//                 clientId={clientId}
//                 buttonText="Login"
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}
//                 cookiePolicy={'single_host_origin'}
//                 isSignedIn={true}
//             />
//             </GoogleOAuthProvider>
            
//         </Container>
//     )
// }

// export default LogIn