import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from './components/Grid';
import NavBar from './components/NavBar';
import About from './pages/About';
import ProjectGallery from './pages/Project-Gallery';
import ProjInfo from './components/ProjInfo';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col size="lg-3">
            <NavBar />
          </Col>
          <Col size="lg-9" display="d-flex flex-column" position="justify-content-lg-center">
            <Routes>
              <Route path="/" element={<About/>} />            
              <Route path="/project-gallery" element={<ProjectGallery/>} />
              <Route path="/project-gallery/:id" element={<ProjInfo/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </Col>
        </Row>        
      </Container>
    </BrowserRouter>
  )
}

export default App;
