import { Globe } from 'lucide-react';
import "@public/css/LoginForm.css";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) return;

    const authenticateUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/user/');
        
        if (!response.ok) {
          throw new Error('Error al conectar con el servidor');
        }

        const users = await response.json();
        const userFound = users.find(user => 
          user.email === formData.email && 
          user.password === formData.password
        );

        if (userFound) {
          localStorage.setItem('user', JSON.stringify(userFound));
          navigate('/languageselect');
        } else {
          setError('Email o contraseña incorrectos');
        }
      } catch (err) {
        setError('Error al intentar iniciar sesión');
        console.error('Error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    authenticateUser();
  }, [isLoading, formData, navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <Link to="/">
          <div className="logo-container">
            <Globe className="text-blue-600 w-16 h-16" />
          </div>
        </Link>
        <h2 className="title">¡Bienvenido de nuevo!</h2>
        
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="label">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              required
              className="input"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              required
              className="input"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="submit-button">
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>

        <div className=".register-button-link">
          <p className="register-text">¿No tienes una cuenta?</p>
          <Link to="/Register">
            <button type="button" className="register-button text-blue-500">
              Regístrate aquí
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
