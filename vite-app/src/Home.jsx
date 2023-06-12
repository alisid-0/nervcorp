import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import nervDark from './assets/nervdark.png'

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
                    <Image src={nervDark} fluid className="align-self-start shadow-md"></Image>
                </Container>
            </Container>
    )
}

function Projects(){
    return(
        <Container className='text-light home-section'>
            <h1>Our Projects</h1>
        </Container>
    )
}

function Home() {
  return (
    <Container>
        <WhoWeAre className="my-30" spacing="300"/>
        <Projects className="my-30"/>
    </Container>
    
  );
}

export default Home;