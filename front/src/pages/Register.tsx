import { useState } from 'react';
import { Globe } from 'lucide-react';
import "@public/css/RegisterForm.css"; // Importa el archivo CSS

// Adaptador para la lógica de negocio (siguiendo arquitectura hexagonal)
interface RegisterAdapter {
  register: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
}

// Implementación mock del adaptador
const mockRegisterAdapter: RegisterAdapter = {
  register: async (firstName, lastName, email, password) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Registration attempt:', { firstName, lastName, email, password });
  }
};

interface RegisterFormProps {
  registerAdapter: RegisterAdapter;
}

export default function RegisterForm({ registerAdapter = mockRegisterAdapter }: RegisterFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await registerAdapter.register(firstName, lastName, email, password);
    } catch (err) {
      setError('Error al registrarse. Por favor, inténtalo de nuevo.');
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
          ¡Regístrate y habla el mundo!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="firstName" className="label">
              Nombre
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="input"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="label">
              Apellido
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="input"
              placeholder="Tu apellido"
            />
          </div>
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
            {isLoading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
      </div>
    </div>
  );
}
