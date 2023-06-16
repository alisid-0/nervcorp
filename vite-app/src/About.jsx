import React from 'react'
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap'
import './App'
import logo from './assets/nervlight.png'
import lunarisGif from './assets/lunaris.gif'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Container className="about-page">
      <Row className="mt-5">
        <Col>
          <h2 className="text-light pb-5 fs-1">The Epic Saga of Nerv Corporation</h2>
          <p className="text-light">
            What started as the ambitious dream of an 8-year-old kid has today blossomed into Nerv Corporation. A one-man powerhouse, the studio symbolizes a decade-long commitment to crafting unique, immersive gaming experiences, leveraging the power of Unreal Engine.
          </p>
          <Image src={logo} rounded className='img-fluid' /> 
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="text-light pb-5 fs-1">Our Adventure in Game Development</h2>
          <p className="text-light">
            Over the years, we have embarked on various daring ventures, exploring multiple game engines and tackling challenges head-on. Our adventure has taught us the value of achievable goals, which led us to shift our focus on a one-man project. The fruit of this new vision is "Lunaris," the next big revelation in the indie gaming universe.
          </p>
          <a href='/games'><Image src={lunarisGif} rounded className='img-fluid'/></a>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <h2 className="text-light">Awards & Acclaim</h2>
          <Card className="award-card mb-3">
            <Card.Body>
              <Card.Title>2023: "Indie Dev Genius"</Card.Title>
              <Card.Text>
                Awarded at the Global Game Developers Conference.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="award-card mb-3">
            <Card.Body>
              <Card.Title>2022: "Innovative Gameplay"</Card.Title>
              <Card.Text>
                Received at the Indie Game Awards.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="award-card">
            <Card.Body>
              <Card.Title>2021: "Rising Star Developer"</Card.Title>
              <Card.Text>
                Recognition from GameDev Magazine.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h2 className="text-light">Words of Praise</h2>
          <Card className="testimonial-card mb-4">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  "Nerv Corporation is pushing the boundaries of indie gaming. The passion and dedication are evident in every game. Can't wait for Lunaris!"
                </p>
                <footer className="blockquote-footer">John Doe, <cite title="Source Title">Indie Game Enthusiast</cite></footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="testimonial-card">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  "A testament to what a one-man team can accomplish. Nerv Corporation is truly a gem in the gaming industry."
                </p>
                <footer className="blockquote-footer">Jane Doe, <cite title="Source Title">Gaming Journalist</cite></footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 className="text-light">Ready to Connect?</h2>
          <p className="text-light">
            Feel free to reach out at nervcorphq@gmail.com
          </p>
          <p>OR</p>
          <Button variant="light" href="/contact">Send an Email</Button>
        </Col>
        </Row>
      </Container>
    </div>
    
  )
}

export default About
