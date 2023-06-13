import './App.css'
import Header from "./Header";
import Home from './Home'
import Footer from './Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'



function App() {
  return (
    <Container className='home-content'>
      <Header />
      <Home />
      <Footer/>
    </Container>
  )
}

export default App
