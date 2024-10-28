import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/LoginForm'; 
import RegistroForm from './pages/Register'; 
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/registro" element={<RegistroForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
