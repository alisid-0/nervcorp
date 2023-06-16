import React, { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Carousel, Card, Dropdown, DropdownButton } from 'react-bootstrap'

const BlogPostList = ({ posts, onSelectPost }) => {
  return (
    <div className="blog-post-list">
      {posts.map((post, index) => (
        <Card key={index} className="mb-3" onClick={() => onSelectPost(post)}>
          <Card.Body>
            <Card.Title>{post.post_title}</Card.Title>
            <Card.Text>{new Date(post.post_date).toLocaleDateString()}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

const BlogPostView = ({ post }) => {
  return (
    <Container className="bg-light rounded text-dark py-4 px-4" style={{ boxShadow: '5px 5px 5px 5px rgba(0,0,0,1)' }}>
      <h1 className='pb-4'>{post.post_title}</h1>
      <p>{new Date(post.post_date).toLocaleDateString()}</p>
      {post.images && post.images.length > 0 && (
        <div>
          <Carousel>
            {post.images.map((image, i) => (
              <Carousel.Item key={i}>
                <img className="d-block w-100" src={image} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
      <p className='post'>{post.post}</p>
    </Container>
  )
}

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [selectedPost, setSelectedPost] = useState(null)

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsAPI = await axios.get(`http://localhost:3001/api/blogposts`)
        setPosts(postsAPI.data.reverse())
        setSelectedPost(postsAPI.data[0])
        console.log(postsAPI.data)
      } catch (err) {
        console.error(err)
      }
    }

    getPosts()
  }, [])

  const handleSelectPost = (post) => {
    setSelectedPost(post)
  }

  return (
    <Container className="home-content text-light">
      <h1>Blog</h1>
      <Container className='blog-page-wrapper'>
        <div className="blog-container">
          <div className="blog-post-list-container">
            <BlogPostList posts={posts} onSelectPost={handleSelectPost} />
          </div>
          <div className="blog-post-view-container">
            {selectedPost ? (
              <BlogPostView post={selectedPost} />
            ) : (
              <p className="select-post-text">Select a blog post to view</p>
            )}
          </div>
        </div>
        <div className="dropdown-blog-post-list-container">
          <DropdownButton title="Select a blog post">
            {posts.map((post, index) => (
              <Dropdown.Item key={index} onClick={() => handleSelectPost(post)}>
                {post.post_title}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </div>
      </Container>
    </Container>
  )
}

export default Blog
