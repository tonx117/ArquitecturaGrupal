import { useState } from 'react';
import { Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import "@public/css/LoginForm.css"; // Asegúrate de que la ruta sea correcta

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementa la lógica de inicio de sesión aquí, por ejemplo, llamada a la API
    // Maneja errores y actualiza el estado `error` si es necesario
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirige a la ruta /register
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <Globe className="text-blue-600 w-16 h-16" />
        </div>
        <h2 className="title">¡Bienvenido de nuevo!</h2>
        {error && <p className="error-message">{error}</p>} {/* Mostrar mensajes de error */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="label">Correo electrónico</label>
            <input
              id="email"
              type="email"
              required
              className="input"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="label">Contraseña</label>
            <input
              id="password"
              type="password"
              required
              className="input"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">
            Iniciar sesión {/* Añadir texto para el botón de envío */}
          </button>
        </form>
        <div className="register-container mt-5"> {/* Añadido un margen superior */}
          <p className="register-text">¿No tienes una cuenta?</p>
          <button 
            type="button" 
            className="register-button"
            onClick={handleRegisterRedirect} // Añadir el manejador de clics
          >
            Regístrate aquí
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm; // Asegúrate de exportar el componente
