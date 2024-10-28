import { useState } from 'react';
import { Globe } from 'lucide-react';
import './LoginForm.css'; 

// Adaptador para la lógica de negocio (siguiendo arquitectura hexagonal)
interface LoginAdapter {
  login: (email: string, password: string) => Promise<void>;
}

// Implementación mock del adaptador
const mockLoginAdapter: LoginAdapter = {
  login: async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Login attempt:', { email, password });
  }
};

interface LoginFormProps {
  loginAdapter: LoginAdapter;
}

export default function LoginForm({ loginAdapter = mockLoginAdapter }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await loginAdapter.login(email, password);
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <Globe className="text-blue-600 w-16 h-16" />
        </div>
        <h2 className="title">
        ¡Welcome back!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="label">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </div>
  );
}
