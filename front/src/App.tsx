import React from 'react';
import LanguageSelector from './components/LanguageSelector'; // Importa el componente LanguageSelector
import UserProfile from './components/UserProfile'; // Importa el componente UserProfile
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegistroForm from './components/Register';
import LandingPage from './components/LandingPage'; // Importa el componente de la landing page

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Ruta de la landing page */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/registro" element={<RegistroForm />} />
          <Route path="/language-selector" element={<LanguageSelector />} /> {/* Ruta para el LanguageSelector */}
          <Route path="/user-profile" element={<UserProfile />} /> {/* Ruta para UserProfile */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
