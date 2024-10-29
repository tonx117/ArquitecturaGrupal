import { useState } from 'react';
import { User, BookOpen, Globe, Award } from 'lucide-react';

interface LanguageProgress {
  language: string;
  level: string;
  progress: number;
}

interface UserProfile {
  name: string;
  email: string;
  nativeLanguage: string;
  learningLanguages: LanguageProgress[];
}

const UserProfileComponent = () => {
  const [user, setUser] = useState<UserProfile>({
    name: "María García",
    email: "maria@ejemplo.com",
    nativeLanguage: "Español",
    learningLanguages: [
      { language: "Inglés", level: "Intermedio", progress: 65 },
      { language: "Francés", level: "Principiante", progress: 25 },
    ]
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-blue-500 rounded-full p-3">
            <User className="text-white w-12 h-12" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-4">{user.name}</h1>
        <p className="text-center text-blue-600 mb-6">{user.email}</p>

        <div className="space-y-4">
          <div className="flex items-center text-blue-700">
            <Globe className="w-5 h-5 mr-2" />
            <span>Idioma nativo: {user.nativeLanguage}</span>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" /> Idiomas en aprendizaje
            </h2>
            {user.learningLanguages.map((lang, index) => (
              <div key={index} className="mb-3">
                <div className="flex justify-between text-blue-700 mb-1">
                  <span>{lang.language}</span>
                  <span>{lang.level}</span>
                </div>
                <div className="bg-blue-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 rounded-full h-2"
                    style={{ width: `${lang.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center text-blue-700">
            <Award className="w-5 h-5 mr-2" />
            <span>Nivel total: Intermedio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileComponent; // Asegúrate de exportar el componente por defecto
