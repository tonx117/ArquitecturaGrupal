import React from 'react';
import LanguageSelector from './components/LanguageSelector'; // Importa el componente LanguageSelector
import UserProfile from './components/UserProfile'; // Importa el componente UserProfile
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'; // Asegúrate de importar useNavigate
import LoginForm from './components/LoginForm';
import RegistroForm from './components/Register';
import LandingPage from './components/LandingPage'; // Importa el componente de la landing page

function App() {
  const navigate = useNavigate(); // Hook para la navegación

  // Función para manejar el clic en el botón de registro
  const handleRegisterClick = () => {
    navigate('/registro'); // Navegar a la página de registro
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} /> {/* Ruta de la landing page */}
        <Route path="/login" element={<LoginForm onRegisterClick={handleRegisterClick} />} /> {/* Pasa la función al LoginForm */}
        <Route path="/registro" element={<RegistroForm />} />
        <Route path="/language-selector" element={<LanguageSelector />} /> {/* Ruta para el LanguageSelector */}
        <Route path="/user-profile" element={<UserProfile />} /> {/* Ruta para UserProfile */}
      </Routes>
    </div>
  );
}

// Envolver App con Router
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
