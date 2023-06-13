import { GoogleLogin } from '@react-oauth/google'
import { Container } from 'react-bootstrap'

const clientId = '1028178874548-g3pckk027hfj75stjjqankbv4n4djpaf.apps.googleusercontent.com'

function LogIn(){

    const onSuccess = (res)=>{
        console.log("LOGIN SUCCESS! ", res.profileObj)
    }

    const onFailure = (res)=>{
        console.log('LOGIN FAILURE! ', res)
    }


    return(
        <Container id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </Container>
    )
}

export default LogIn