import { Globe } from 'lucide-react';
import "@public/css/RegisterForm.css";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [shouldSubmit, setShouldSubmit] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };
  console.log(formData);
  useEffect(() => {
    const registerUser = async () => {
      if (!shouldSubmit) return;

      try {
        const response = await fetch('http://localhost:5000/user/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Error al registrar usuario');
        }

        await response.json();
        navigate('/login');
      } catch (err) {
        setError(err.message || 'Error al conectar con el servidor');
      } finally {
        setIsLoading(false);
        setShouldSubmit(false);
      }
    };

    registerUser();
  }, [shouldSubmit, formData, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    setShouldSubmit(true);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <Link to="/">
          <div className="logo-container">
            <Globe className="text-blue-600 w-16 h-16" />
          </div>
        </Link>
        <h2 className="title">¡Regístrate y habla el mundo!</h2>
        {error && (
          <div className="text-red-500 text-sm mb-4 text-center">
            {error}
          </div>
        )}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="label">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              required
              className="input"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
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
            {isLoading ? 'Registrando...' : 'Regístrate'}
          </button>
        </form>
        <div className=".login-button-link">
          <p className="login-text">¿Ya tienes una cuenta?</p>
          <Link to="/Login">
            <button type="button" className="login-button text-blue-500">
              Ingresa aquí
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};