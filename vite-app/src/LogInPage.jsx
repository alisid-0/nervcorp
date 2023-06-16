import {Container, Form, Button, Card} from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useContext } from 'react'
import jwt_decode from 'jwt-decode'
import './App.css'
import { LoginContext } from './App'
import { Link } from 'react-router-dom'




const LogInPage=()=>{
    const contextValue = useContext(LoginContext)
    const user = contextValue.user
    const setUser = contextValue.setUser
    const signedIn = contextValue.signedIn
    const setSignedIn = contextValue.setSignedIn

    const [showLoginButton, setShowLoginButton] = useState(true)
    const [showCreateBlogs, setShowCreateBlogs] = useState(false)
    const [showDeleteBlogs, setShowDeleteBlogs] = useState(false)
    
    function handleCallbackResponse(response){
        let userObject = jwt_decode(response.credential)
        setUser(userObject)
        setSignedIn(true)
        setShowLoginButton(false)
    }

    function handleSignOut(event){
        setUser({})
        setSignedIn(false)
        setShowLoginButton(true)
    }

    useEffect(()=>{
        /* global google */
        if (showLoginButton) {
            google.accounts.id.initialize({
                client_id: '1028178874548-g3pckk027hfj75stjjqankbv4n4djpaf.apps.googleusercontent.com',
                callback: handleCallbackResponse
            })

            google.accounts.id.renderButton(
                document.getElementById("log-in-div"),
                {theme: 'outline', size: 'large'}
            )
        }
    }, [showLoginButton])


    function LoginForms({ setShowLoginButton }){
        const contextValue = useContext(LoginContext)
        const user = contextValue.user
        const setUser = contextValue.setUser
        const signedIn = contextValue.signedIn
        const setSignedIn = contextValue.setSignedIn
        const signInHandler = async()=>{
            const email = document.getElementById(`formBasicEmail`).value
            const password = document.getElementById(`formBasicPassword`).value
            console.log(email,password)
            const users = await axios.get(`http://localhost:3001/api/users`)
            console.log(users.data)
        
            let userFound = false
            for(let i of users.data){
                console.log(i)
                if (email == i.email){
                    console.log(`Signed in!`)
                    console.log(i.name, i.email)
                    let userObject = {
                        email: i.email,
                        name: i.name
                    }
                    console.log(userObject)
                    setUser(userObject)
                    userFound = true
                    break; 
                } 
            }
            if (userFound) {
                setSignedIn(true)
                setShowLoginButton(false)
            } else {
                console.log(`Account not found. Please try again.`)
                setSignedIn(false)
                setUser({})
            }
        }
        
    
        return(
            <Container className='text-light login-page'>
                <h1 className="pt-5 pb-5">Login Page</h1>
                <Container className='login-container'>
                    <Form>
                        <Form.Group className="mb-3" controlId='formBasicEmail'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter Email'/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Enter Password'/>
                            <Form.Text className='text-light'>We'll never share your password with anyone else.</Form.Text>
                        </Form.Group>
                    </Form>
                    <Button onClick={signInHandler}>Sign In</Button>
                    <p className="pt-5"><i>Don't have an account? <a href='/SignUp'as={Link} to='/SignUp'>Sign up.</a></i></p>
                </Container>
            </Container>
        )
    }
    
    function AdminPanel() {
    
        return(
            <Container className='text-light bg-dark p-5 rounded'>
                <h1 className="text-center">Admin Panel</h1>
                <Button className='mx-2 my-2' onClick={()=>setShowCreateBlogs(true)}>Create Blog</Button>
                <Button className='mx-2 my-2'>Update Blogs</Button>
                <Button className='mx-2 my-2' as={Link} to='/blog'>View Blogs</Button>
                <Button className='mx-2 my-2'onClick={()=>setShowDeleteBlogs(true)}>Delete Blogs</Button>

                {showCreateBlogs ? (<CreateBlog/>): null}
                {showDeleteBlogs && <DeleteBlog/>}
            </Container>
        )
    
      }
    
    function CreateBlog() {
      const [title, setTitle] = useState("")
      const [content, setContent] = useState("")
      const [images, setImages] = useState([])

      const submitPost = async () => {
        const date = new Date()
        date.setHours(date.getHours() - 5)
          try {
            const newPost = await axios.post("http://localhost:3001/api/blogposts", {
              post_title: title,
              post_date: date,
              post: content,
              images: images,
          });
          console.log(newPost)
          } catch (err) {
               console.log(err)
          }
      };

      const handleImageChange = (e) => {
        const fileList = e.target.files
        const imageArray = Array.from(fileList).map((file) => URL.createObjectURL(file))
        setImages(imageArray)
      };

  return (
    <Container>
      <h2>Blogs</h2>
      <Form onSubmit={(e) => { e.preventDefault(); submitPost(); }} className="mx-auto my-5" style={{ maxWidth: '500px' }}>
        <Form.Group>
          <Form.Label className="text-light">Title:</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-light">Content:</Form.Label>
          <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
        </Form.Group>
        {/* <Form.Group>
          <Form.Label className="text-light">Images:</Form.Label>
          <Form.Control type="file" multiple onChange={handleImageChange} />
        </Form.Group> */}
        <Button type="submit" value="Submit" block>Post</Button>
      </Form>
      {/* {images.length > 0 && (
        <div>
          <h3>Uploaded Images:</h3>
          {images.map((image, index) => (
            <img src={image} alt={`Image ${index}`} key={index} />
          ))}
        </div>
      )} */}
    </Container>
  );
}

    function DeleteBlog(){

        const [posts, setPosts] = useState([])

        useEffect(() => {
            const getPosts = async () => {
              try {
                const postsAPI = await axios.get(`http://localhost:3001/api/blogposts`)
                setPosts(postsAPI.data.reverse())
                console.log(postsAPI.data)
              } catch (err) {
                console.error(err)
              }
            }
            
            getPosts()
          }, [])

          const deleteBlogById = async (id) => {
            try {
              await axios.delete(`http://localhost:3001/api/blogposts/delete/${id}`)
              setPosts(posts.filter((post) => post._id !== id))
              console.log('Blog post deleted successfully.')
            } catch (error) {
              console.error('Error deleting blog post:', error)
            }
          };
        
          return (
            <>
              {posts.map((post, index) => (
                <Container
                  className='bg-light rounded text-dark my-5 py-2'
                  style={{ boxShadow: '5px 5px 5px 5px rgba(0,0,0,1)' }}
                  key={index}
                >
                  <h1>{post.post_title}</h1>
                  <p>{new Date(post.post_date).toLocaleDateString()}</p>
                  <Button onClick={() => deleteBlogById(post._id)}>Delete</Button>
                </Container>
              ))}
            </>
          );
        }

    return(
        <Container>
             { (signedIn == true) ? (  
                <>
                <div className='py-5'>
                    <Card style={{maxWidth: '30rem', color: '#000', backgroundColor: '#f5f5f5', margin: '0 auto'}}>
                        <Card.Body>
                            <Card.Title><h1>Welcome, {user.name}!</h1></Card.Title>
                            <Card.Text>
                                Email: {user.email}
                            </Card.Text>
                            <Button variant="primary" onClick= {(e)=> handleSignOut(e)}>Sign Out</Button> 
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    {user.email === "nervcorphq@gmail.com" && <AdminPanel />}

                </div>
                </>
             
             ): 
             <>
             <LoginForms setShowLoginButton={setShowLoginButton}/>
             {showLoginButton && <Container id="log-in-div"></Container>}
             </>
             }
        </Container>
    )
}


  


export default LogInPage