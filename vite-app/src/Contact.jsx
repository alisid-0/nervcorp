import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form} from 'react-bootstrap'



function Contact() {
  return (
    <Container className='home-content text-light'>
      <h1>Contact</h1>
      <Container className='contact-container'>
        <Form className='contact-form'>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control type='email' placeholder='Enter your preferred email address'/>
          </Form.Group>
          <Form.Group className='contact-message'>
            <Form.Label>Leave us a message!</Form.Label>
            <Form.Control className='contact-message' placeholder='Max characters: 300'/>
          </Form.Group>
        </Form>
      </Container>
    </Container>
  )
}

export default Contact