import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import './App.css'

function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<About/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
