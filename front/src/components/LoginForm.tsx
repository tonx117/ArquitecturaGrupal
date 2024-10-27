import { useState } from 'react';
import { Globe } from 'lucide-react';

// Adaptador para la lógica de negocio (siguiendo arquitectura hexagonal)
interface LoginAdapter {
  login: (email: string, password: string) => Promise<void>;
}

// Implementación mock del adaptador
const mockLoginAdapter: LoginAdapter = {
  login: async (email, password) => {
    // Simulación de una llamada a API
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Login attempt:', { email, password });
    // Aquí iría la lógica real de autenticación
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
      // Manejar el éxito del inicio de sesión aquí
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-500">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-6">
          <Globe className="text-blue-600 w-16 h-16" />
        </div>
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
          ¡Conéctate y habla el mundo!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
              placeholder="••••••••"
            />
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white rounded-md py-3 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </div>
  );
}
