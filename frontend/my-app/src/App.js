import logo from './logo.svg';
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

  const getProfile = async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/profile');
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
    height: '100vh',
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
            <Carousel.Item>
              <Carousel.Caption className="carousel-caption-name">
                <h3>{hobby ? hobby[0].name : 'Cargando...'}</h3>
              </Carousel.Caption>
              <img
                className="d-block w-100"
                src={futbolPNG}
                alt="First slide"
                style={slicesImage}/>
              <Carousel.Caption className='carousel-caption-description'>
                <h4>{hobby ? hobby[0].description : 'Cargando...'}</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption className="carousel-caption-name">
                <h3>{hobby ? hobby[1].name : 'Cargando...'}</h3>
              </Carousel.Caption>
              <img
                className="d-block w-100"
                src={modeladoPNG}
                alt="Second slide"
                style={slicesImage}
                />
              <Carousel.Caption className='carousel-caption-description'>
                <h4>{hobby ? hobby[1].description : 'Cargando...'}</h4>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Carousel.Caption className="carousel-caption-name">
                <h3>{hobby ? hobby[2].name : 'Cargando...'}</h3>
              </Carousel.Caption>
              <img
                className="d-block w-100"
                src={tecnologiaPNG}
                alt="Third slide"
                style={slicesImage}
                />
              <Carousel.Caption className='carousel-caption-description'>
                <h4>{hobby ? hobby[2].description : 'Cargando...'}</h4>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      
      <Row>
        <Col style={bodyBar} sm={12}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{framework ? framework[0].name : 'Cargando...'}</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{framework ? framework[1].name : 'Cargando...'}</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>













      



















      {/**<div className="row g-0">
        <div className="col-md-4 text-center text-white" style={{background: 'linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)', borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem'}}>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="Avatar" className="my-5" style={{width: '80px'}} />
          <h5>Marie Horwitz</h5>
          <p>Web Designer</p>
          <i className="far fa-edit mb-5"></i>
        </div>
        <div className="col-md-8">
          <div className="card-body p-4">
            <h6>Information</h6>
            <hr className="mt-0 mb-4" />
            <div className="row pt-1">
              <div className="col-6 mb-3">
                <h6>Email</h6>
                <p className="text-muted">info@example.com</p>
              </div>
              <div className="col-6 mb-3">
                <h6>Phone</h6>
                <p className="text-muted">123 456 789</p>
              </div>
            </div>

            <h6>Information</h6>
            <hr className="mt-0 mb-4" />
            <div className="row pt-1">
              <div className="col-6 mb-3">
                <h6>Email</h6>
                <p className="text-muted">info@example.com</p>
              </div>
              <div className="col-6 mb-3">
                <h6>Phone</h6>
                <p className="text-muted">123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    

        <div className="row mt-10" style={{marginLeft: 300, marginRight: 300, marginTop: 50, backgroundColor: 'rgba(255, 100, 50, 0.2)', borderRadius: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>                  
          
          <div style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <div style={{maxWidth: '30%'}} className="col-md-4 text-center">
              <div>
                <h3 style={{textAlign: 'center'}}>Datos personales</h3>
              </div>
              <div className="row mt-2" >
                <table className="table" >
                  <thead>
                    <tr style={{backgroundColor: 'transparent'}}>
                      <th scope="col" style={{backgroundColor: 'transparent'}}>Nombre</th>
                      <th scope="col" style={{backgroundColor: 'transparent'}}>Ubicación</th>
                      <th scope="col" style={{backgroundColor: 'transparent'}}>Correo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{backgroundColor: 'transparent'}}>
                      <td style={{backgroundColor: 'transparent'}}>{profile ? (profile.name + " " + profile.lastname) : 'Cargando...'}</td>
                      <td style={{backgroundColor: 'transparent'}}>{profile ? (profile.city + ", " + profile.country) : 'Cargando...'}</td>
                      <td style={{backgroundColor: 'transparent'}}>{profile ? profile.email : 'Cargando...'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div style={{maxWidth: '70%'}} className="col-md-8">
              <div>
                <h3 style={{textAlign: 'center'}}>Intereses</h3>
              </div>
              <div className="row mt-2">
                <div className="row">
                  <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                          Tecnología
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
                        <div className="accordion-body">
                          Siempre me ha gustado temas tecnológicos en especial en las computadoras, lo que tiene que ver con hardware, modding, programas y videojuegos.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                          Animales
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body">
                          Gran parte influenciado por el contenido que veía desde pequeño en la televisión como lo son los canales de Discovery Channel o Animal Planet me hizo tener un interés en la naturaleza y los animales.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                          Modelado
                        </button>
                      </h2>
                      <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body">
                          Este es un interés que surgió hace muy poco y que sin embargo me dio bastante satisfacción al hacer modelado 3D, con la ayuda de mi tablet me he estado familiarizando con este mundo y espero complementarlo con software de computadora.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
              <h3>Herramientas tecnológicas</h3>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Tipo de tecnología</th>
                      <th scope="col">Nivel</th>
                      <th scope="col">Finalidad</th>
                    </tr>
                  </thead>
                  <tbody className="table-group-divider">
                    <tr>
                      <th scope="row">1</th>
                      <td>Laravel</td>
                      <td>Framework</td>
                      <td>Medio</td>
                      <td>Desarrollo web</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>GitHub</td>
                      <td>Alojamiento de proyectos</td>
                      <td>Medio</td>
                      <td>Plataforma para construir, escalar y desplegar software de forma segura</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Vue.js</td>
                      <td>Framework</td>
                      <td>Bajo</td>
                      <td>FrontEnd</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Express.js</td>
                      <td>Framework</td>
                      <td>Bajo</td>
                      <td>BackEnd</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Ionics</td>
                      <td>Framework</td>
                      <td>Bajo</td>
                      <td>Aplicación Móvil</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>PowerBi</td>
                      <td>Software</td>
                      <td>Medio</td>
                      <td>Análisis de datos</td>
                    </tr>
                  </tbody>
                </table>
          </div>
        </div>
  </div>*/}

    </div>
  );
}
  /*return (



    <div classNameName="App">
      <header classNameName="App-header">
        <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/


export default App;
