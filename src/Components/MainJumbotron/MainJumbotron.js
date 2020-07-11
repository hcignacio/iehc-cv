import React from 'react'
import { Jumbotron, Container, Image, Row, Col } from 'react-bootstrap'
import profilePicture from 'module../../../public/profile.JPG'
import './MainJumbotron.css'

export const MainJumbotron = () => {
  return (
    <Jumbotron fluid className="py-3">
      <Container fluid>
        <Row>
          <Col xs={6} md={3} className="imageContainer">
            <Image
              alt="profile picture"
              src={profilePicture}
              style={{ objectFit: 'cover', width: '250px', height: '250px' }}
              roundedCircle
            />
          </Col>
          <Col xs={6} md={9} className="sideTextContainer">
            <h1 className="title">Ignacio Henin Coldorf</h1>
            <h3 className="subtitle">
              Developer & Sound Engineer
            </h3>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
