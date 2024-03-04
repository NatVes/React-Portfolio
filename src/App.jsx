import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from './components/Grid';
import NavBar from './components/NavBar';
import About from './pages/About';
import ProjectGallery from './pages/Project-Gallery';
import ProjInfo from './components/ProjInfo';
// import './App.css'

function App() {

  return (
    <Router>
      <Container>
        <Row>
          <Col size="md-3">
            <NavBar />
          </Col>
          <Col size="md-9" display="d-flex" position="align-items-center">
            <Routes>
              <Route path="/" element={<About/>} />            
              <Route path="/project-gallery" element={<ProjectGallery/>} />
              <Route path="/project-gallery/:id" element={<ProjInfo/>} />
            </Routes>
          </Col>
        </Row>        
      </Container>
    </Router>
  )
}

export default App;
