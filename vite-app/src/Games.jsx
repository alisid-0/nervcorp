import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel } from 'react-bootstrap';
import lunarisGIF from './assets/lunaris.gif'

function Games() {
  return (
    <>
    <h1 className='text-light'>Games</h1>
    <Container className="home-content text-dark bg-light rounded py-1">
      
      <Container className="mt-5">
        <h2>Lunaris</h2>
        <p>Lunaris is an immersive space-themed adventure game where you embark on a mission to save the moon from destruction. Join forces with a team of scientists, explore captivating environments, and uncover the secrets of the lunar world.</p>
      
        <h4>Screenshots:</h4>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={lunarisGIF}
              alt="Lunaris Screenshot 1"
              />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={lunarisGIF}
              alt="Lunaris Screenshot 2"
              />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={lunarisGIF}
              alt="Lunaris Screenshot 3"
              />
          </Carousel.Item>
        </Carousel>
      </Container>
      <p className='py-3'>For updates on this project, <a href='/blog'><i>Click Here!</i></a></p>
    </Container>
  </>
  );
}

export default Games;
