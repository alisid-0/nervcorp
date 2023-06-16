import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Form, Button} from 'react-bootstrap'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'



function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_68f5b48', 'template_zyxyq9j', form.current, 'CKBKqKx59PeQYK9v6')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      });
      e.target.reset()
  }

  return (
    <Container className='home-content text-light'>
      <h1>Contact</h1>
      <Container className='contact-container'>
        <Form ref={form} onSubmit={sendEmail} className='contact-form'>
          <Form.Group controlId='user_email' >
            <Form.Label>Email Address</Form.Label>
            <Form.Control name='user_email' className='email-control'type='email' placeholder='Enter your preferred email address'/>
          </Form.Group> 
          <Form.Group className='contact-message' controlId='message' >
            <Form.Label>Leave us a message!</Form.Label>
            <Form.Control name='message' className='email-control contact-message' placeholder='Max characters: 300'/>
          </Form.Group>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    </Container>
  )
}

export default Contact