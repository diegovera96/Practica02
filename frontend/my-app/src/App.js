import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, CardTitle, CardText, Row, Col, Header, Container, Carousel, Accordion } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [profile, setProfile] = useState();
  const [hobby, setHobby] = useState();
  const [framework, setFramework] = useState();
  const publicIp = process.env.REACT_APP_PUBLIC_IP;

  const getProfile = async () => {
    const response = await axios.get(`http://${publicIp}:8000/api/profile`);
    setProfile(response.data.profile);
    setHobby(response.data.hobby);
    setFramework(response.data.framework);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const appBar = {
    backgroundColor: '#98A1AA',
    padding: '10px',
    height: '100%',
  }

  const titleBar = {
    padding: '10px',
    backgroundColor: '#8D9BA4',
    border: '1px solid black',
  }

  const bodyBar = {
    padding: '10px',
    backgroundColor: '#C4C9CD',
    border: '1px solid black',
    width: '100%',
    wordWrap: 'break-word',
  }

  const profileImage = {
    height: '150px',
    width: '150px',
    objectFit: 'cover',
    border: '2px solid white',
  }

  const slicesImage = {
    maxHeight: '400px',
    width: 'auto',
    objectFit: 'scale-down', 
    marginTop: '300px',
  };

  const images = require.context('./components', true, /\.(png|webp)$/);
  const modeladoPNG = images('./modelado.png');
  const futbolPNG = images('./futbol.png');
  const tecnologiaPNG = images('./tecnologia.png');
  const ExampleCarouselImageWEBP = images('./ExampleCarouselImage.webp');

  return (
    <div style={appBar} className="App">

    <style>
        {`
          h3, h1, .accordion-header, acordion-body {
            color: #424953;
            font-family: 'Times New Roman'
          }

          h4 {
            font-family: 'Times New Roman';
            color: #4A4A4A;
          }

          h1 {
            text-decoration: underline;
          }

          .accordion-button {
            background-color: #c5c5c5;
          }

          .carousel-caption-name {
            margin-bottom: 600px;
          }

          .carousel-caption-description {
            margin-bottom: 400px;
            color: #c5c5c5;
          }
        `}
      </style>


    <Container>
      <Row>
        <Col style={titleBar}>
          <Row className="d-flex align-items-center justify-content-center">
            <Col sm={1}>
              <img src={ExampleCarouselImageWEBP} alt="Avatar" style={profileImage}/>
            </Col>
            <Col sm={11}>
            <Row>
              <h1>Perfil</h1>
            </Row>
            <Row>
              <h3>
                Nombre: {profile ? (profile.name + " " + profile.lastname) : 'Cargando...'}
              </h3>
            </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col style={bodyBar} sm={4}>
          <Row className="d-flex align-items-center justify-content-center">
            <h1>Información</h1>
          </Row>
          <h3>
            {profile ? (profile.city + ", " + profile.country) : 'Cargando...'}
          </h3>
          <h3>
            {profile ? profile.email : 'Cargando...'}
          </h3>
          <h3>
            {profile ? profile.summary : 'Cargando...'}
          </h3>
        </Col>
        <Col style={bodyBar} sm={8}>
          <Row className="d-flex align-items-center justify-content-center">
            <h1>Hobbies</h1>
          </Row>
          <Carousel>
            {hobby ? hobby.map((h, index) => (
              <Carousel.Item key={index}>
                <Carousel.Caption className="carousel-caption-name">
                  <h3>{h.name}</h3>
                </Carousel.Caption>
                <img
                  className="d-block w-100"
                  src={futbolPNG} // Aquí necesitarás determinar qué imagen usar basado en el hobby
                  alt={`Slide ${index + 1}`}
                  style={slicesImage}/>
                <Carousel.Caption className='carousel-caption-description'>
                  <h4>{h.description}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            )) : (
              <Carousel.Item>
                <Carousel.Caption className="carousel-caption-name">
                  <h3>Cargando...</h3>
                </Carousel.Caption>
                <img
                  className="d-block w-100"
                  src={futbolPNG} // Aquí necesitarás determinar qué imagen usar basado en el hobby
                  alt="Cargando"
                  style={slicesImage}/>
                <Carousel.Caption className='carousel-caption-description'>
                  <h4>Cargando...</h4>
                </Carousel.Caption>
              </Carousel.Item>
            )}
          </Carousel>
        </Col>
      </Row>
      
      <Row>
        <Col style={bodyBar} sm={12}>
          <Accordion defaultActiveKey="0">
            {framework ? framework.map((f, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>{f.name}</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum1.
                  </Accordion.Body>
              </Accordion.Item>
                )) : (
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Cargando...</Accordion.Header>
                  <Accordion.Body>
                    Cargando...
                  </Accordion.Body>
                </Accordion.Item>
                  )}
          </Accordion>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
