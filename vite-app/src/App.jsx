import './App.css'
import Header from "./Header";
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/nervlogo.png';
import { Container } from 'react-bootstrap'



function App() {
  return (
    <Container className='home-content'>
      <Header />
      <Home />
    </Container>
  )
}

export default App
