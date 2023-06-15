import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home'
import Games from './Games';
import Blog from './Blog';
import About from './About';
import Contact from './Contact';
import LogInPage from './LogInPage';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import SignUp from './SignUp'
import { useState, createContext, useEffect } from 'react';



export const LoginContext = createContext(null)


function App() {

  const [user, setUser] = useState({})
  const [signedIn, setSignedIn] = useState(false)

  useEffect(()=>{
    console.log(user)
  })

  return (
    <LoginContext.Provider value={{user,setUser,signedIn,setSignedIn}}>
    <Container className='home-content'>
      <Router>
        <Header />
          <Routes>
            <Route path='/games' element={<Games/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<LogInPage/>} />
            <Route path='/home' exact element={<Home/>} />
            <Route path='/' exact element={<Home/>} />  
            <Route path='/signup' element={<SignUp/>}/>      
            <Route element={<ErrorPage/>} />
          </Routes> 
        <Footer />
      </Router>
    </Container>
    </LoginContext.Provider>
  );
}

export default App;
