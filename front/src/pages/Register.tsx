import { Globe } from 'lucide-react';
import "@public/css/RegisterForm.css"; // Importa el archivo CSS
import { Link } from "react-router-dom";

export const RegisterForm = () => {

  return (
    <div className="login-container">
      <div className="login-box">
        <Link to="/">
          <div className="logo-container">
            <Globe className="text-blue-600 w-16 h-16" />
          </div>
        </Link>
        <h2 className="title">¡Regístrate y habla el mundo!</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="firstName" className="label">
              Nombre
            </label>
            <input
              id="firstName"
              type="text"
              required
              className="input"
              placeholder="Tu nombre"
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
            {" "}
            Regístrate
          </button>
        </form>
        <div className=".login-button-link ">
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
}
