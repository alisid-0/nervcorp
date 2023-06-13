import './App.css'
import Header from "./Header";
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'



function Forum() {
  return (
    <Container className='home-content text-light'>
      <Header />
      <h1>Forum</h1>
      <Footer/>
    </Container>
  )
}

export default Forum