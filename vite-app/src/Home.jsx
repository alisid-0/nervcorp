import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Image, Carousel } from 'react-bootstrap'
import nervDark from './assets/nervdark.png'
import lunarisGIF from './assets/lunaris.gif'
import introImg from './assets/3.PNG'
import introImg2 from './assets/2.png'
import shedImg from './assets/5.png'
import img13 from './assets/13.png'

const nervPara = `Welcome to Nerv, a small and passionate indie game development studio dedicated to creating unique and exciting games.

At Nerv, we believe in the power of games to inspire, entertain, and connect people. Our mission is to bring immersive and memorable experiences to players worldwide.

As a very tiny studio, we pride ourselves on our creativity, attention to detail, and love for the craft of game development. Every project we undertake is a labor of passion and a testament to our commitment to delivering high-quality games.

Join us on our journey as we explore new worlds, push boundaries, and challenge conventions. We strive to create games that captivate players, sparking their imagination and leaving a lasting impression.

Whether you're a fellow game enthusiast, a potential collaborator, or simply curious about our work, we invite you to be a part of our community. Together, let's embark on an incredible adventure and shape the future of gaming.

Thank you for joining us on this exciting ride!

- The Nerv Team`

function WhoWeAre() {
  return (
    <Container className="text-light home-section">
      <h1>Who We Are</h1>
      <Container className="text-start home-about">
        <Container>
          {nervPara.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}<br /></p>
          ))}
        </Container>
        <Image src={nervDark} fluid className="align-self-start shadow-md mx-auto d-block" style={{ maxWidth: '70%', borderRadius: '30px' }}></Image>
      </Container>
    </Container>
  );
}

function ProjectCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={introImg}
          alt="Lunaris Screenshot 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img13}
          alt="Lunaris Screenshot 2"
        />
      </Carousel.Item>
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
          src={introImg2}
          alt="Lunaris Screenshot 3"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={shedImg}
          alt="Lunaris Screenshot 4"
        />
      </Carousel.Item>
    </Carousel>
  );
}

function Projects() {
  return (
    <Container className='text-light home-section projects'>
      <h1>Explore Our Latest Game: Lunaris</h1>
      <Container>
        <p>Journey through a strange world on a mission to save a mysterious scientist and their dying world. Your goal? Stop the moon from falling into the planet. Unravel the circumstances behind the falling moon and fight to prevent its cataclysmic impact. Explore different landscapes, uncover dark secrets, and question your own reality as you embark on this thrilling adventure.</p>
        <ProjectCarousel />
        <p className='my-5'>Lunaris is a visually stunning game that showcases a unique art style, otherworldly level designs, and a captivating storyline. Immerse yourself in the rich and atmospheric environments as you navigate through the game world. With breathtaking visuals and engaging gameplay, Lunaris offers an unforgettable gaming experience.</p>
      </Container>
    </Container>
  )
}

function Home() {
  return (
    <Container fluid>
      <WhoWeAre />
      <Projects />
    </Container>
  )
}

export default Home
