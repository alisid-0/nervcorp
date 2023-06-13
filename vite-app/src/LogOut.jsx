import { GoogleLogout } from '@react-oauth/google'
import { Container } from 'react-bootstrap'

const clientId = '1028178874548-g3pckk027hfj75stjjqankbv4n4djpaf.apps.googleusercontent.com'

function LogOut(){

    const onSuccess= ()=>{
        console.log('Log out successful')
    }

    return(
        <Container id='signOutButton'>
            <GoogleLogout
                clientId={clientId}
                buttonText={'Logout'}
                onLogoutSuccess={onSuccess}
            />
        </Container>
    )
}

export default LogOut