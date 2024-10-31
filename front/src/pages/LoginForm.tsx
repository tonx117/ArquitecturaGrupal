import { Globe } from 'lucide-react';
import "@public/css/LoginForm.css"; // Importa el archivo CSS
import { Link } from "react-router-dom";

export const LoginForm = () => {

  return (
    <div className="login-container">
      <div className="login-box">
        <Link to="/">
          <div className="logo-container">
            <Globe className="text-blue-600 w-16 h-16" />
          </div>
        </Link>
        <h2 className="title">¡Bienvenido de nuevo!</h2>
        <form className="space-y-5">
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
            />
          </div>
          <button type="submit" className="submit-button">
            Iniciar sesión
          </button>
        </form>
        <div className=".register-button-link ">
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
}
