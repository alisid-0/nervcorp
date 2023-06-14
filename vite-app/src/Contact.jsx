import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button} from 'react-bootstrap'



function Contact() {
  return (
    <Container className='home-content text-light'>
      <h1>Contact</h1>
      <Container className='contact-container'>
        <Form className='contact-form'>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control className='email-control'type='email' placeholder='Enter your preferred email address'/>
          </Form.Group>
          <Form.Group className='contact-message'>
            <Form.Label>Leave us a message!</Form.Label>
            <Form.Control className='email-control contact-message' placeholder='Max characters: 300'/>
          </Form.Group>
          <Button>Submit</Button>
        </Form>
      </Container>
    </Container>
  )
}

export default Contact