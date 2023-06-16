import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel, Card } from 'react-bootstrap';

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
                <img className="d-block w-100" src={image} alt={`Slide ${i + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
      <p>{post.post}</p>
    </Container>
  );
};

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const postsAPI = await axios.get(`http://localhost:3001/api/blogposts`);
        setPosts(postsAPI.data.reverse());
        console.log(postsAPI.data);
      } catch (err) {
        console.error(err);
      }
    };

    getPosts();
  }, []);

  const handleSelectPost = (post) => {
    setSelectedPost(post);
  };

  return (
    <Container className="home-content text-light">
      <h1>Blog</h1>
      <div className="blog-container">
        <div className="blog-post-list-container">
          <BlogPostList posts={posts} onSelectPost={handleSelectPost} />
        </div>
        <div className="blog-post-view-container">
          {selectedPost ? <BlogPostView post={selectedPost} /> : <p>Select a blog post to view</p>}
        </div>
      </div>
    </Container>
  );
};

export default Blog;
