import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home'
import Games from './Games';
import Forum from './Forum';
import About from './About';
import Contact from './Contact';
import LogInPage from './LogInPage';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import { useState, createContext, useEffect } from 'react';



export const LoginContext = createContext(null)


function App() {

  const [user, setUser] = useState({})

  useEffect(()=>{
    console.log(user)
  })

  return (
    <LoginContext.Provider value={{user,setUser}}>
    <Container className='home-content'>
      <Router>
        <Header />
          <Routes>
            <Route path='/games' element={<Games/>} />
            <Route path='/forum' element={<Forum/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<LogInPage/>} />
            <Route path='/home' exact element={<Home/>} />
            <Route path='/' exact element={<Home/>} />          
            <Route element={<ErrorPage/>} />
          </Routes> 
        <Footer />
      </Router>
    </Container>
    </LoginContext.Provider>
  );
}

export default App;
