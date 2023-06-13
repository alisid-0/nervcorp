import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import { React, useState } from 'react';
import { Container, Image, Carousel } from 'react-bootstrap';
import nervDark from './assets/nervdark.png'
import lunarisGif from './assets/lunaris.gif'

const nervPara = `Welcome to Nerv, a small and passionate indie game development studio dedicated to creating unique and exciting games.

At Nerv, we believe in the power of games to inspire, entertain, and connect people. Our mission is to bring immersive and memorable experiences to players worldwide.

As a very tiny studio, we pride ourselves on our creativity, attention to detail, and love for the craft of game development. Every project we undertake is a labor of passion and a testament to our commitment to delivering high-quality games.

Join us on our journey as we explore new worlds, push boundaries, and challenge conventions. We strive to create games that captivate players, sparking their imagination and leaving a lasting impression.

Whether you're a fellow game enthusiast, a potential collaborator, or simply curious about our work, we invite you to be a part of our community. Together, let's embark on an incredible adventure and shape the future of gaming.

Thank you for joining us on this exciting ride!

- The Nerv Team`;

function WhoWeAre(){
    return(
        <Container className="text-light home-section">
                <h1>Who We Are</h1>
                <Container className="text-start home-about">
                    <Container>
                        {nervPara.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}<br/></p>
                        ))}
                    </Container>
                    <Image src={nervDark} fluid className="align-self-start shadow-md" style={{maxWidth: '70%', borderRadius: '30px'}}></Image>
                </Container>
            </Container>
    )
}

function ProjectCarousel(){
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) =>{
        setIndex(selectedIndex)
    }

    return(
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image
                className="d-block w-100 c"
                src={lunarisGif}
                >
                </Image>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100 c"
                src={lunarisGif}
                >
                </Image>
            </Carousel.Item>
            <Carousel.Item>
                <Image
                className="d-block w-100 c"
                src={lunarisGif}
                >
                </Image>
            </Carousel.Item>

        </Carousel>
    )
}

function Projects(){
    return(
        <Container className='text-light home-section'>
            <h1>Our Projects</h1>
            <Container>
                <h2 className="pb-4">Lunaris</h2>
                <ProjectCarousel/>
                <h4 className="py-3">The moon is falling. Team up with an ally scientist to stop it.</h4>
            </Container>
        </Container>
    )
}

function Home() {
  return (
    <Container>
        <WhoWeAre className="my-5 mx-5 py-5"/>
        <Projects className="my-5 mx-5 py-5"/>
    </Container>
  );
}

export default Home;