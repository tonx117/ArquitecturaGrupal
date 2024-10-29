import { Globe } from 'lucide-react';
import "@public/css/LoginForm.css"; // Importa el archivo CSS

export const LoginForm = () => {

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <Globe className="text-blue-600 w-16 h-16" />
        </div>
        <h2 className="title">¡Bienvenido de nuevo!</h2>
        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="label">Correo electrónico</label>
            <input
              id="email"
              type="email"
              required
              className="input"
              placeholder="tu@email.com"
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
            />
          </div>
          <button type="submit"  className="submit-button">
          </button>
        </form>
        <div className="register-container">
          <p className="register-text">¿No tienes una cuenta?</p>
          <button type="button" className="register-button">
            Regístrate aquí
          </button>
        </div>
      </div>
    </div>
  );
}
