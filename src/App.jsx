import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from './components/Grid';
import NavBar from './components/NavBar';
import About from './pages/About';
import './App.css'

function App() {

  return (
    <Router>
      <Container>
        <Row>
          <Col size="md-3">
            <NavBar />
          </Col>
          <Col size="md-9">
            <Routes>
              <Route path="/" element={<About/>} />
            </Routes>
          </Col>
        </Row>        
      </Container>
    </Router>
  )
}

export default App;
