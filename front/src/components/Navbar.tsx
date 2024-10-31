import { Globe2 } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="flex  flex-col ">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow">
        <div className="flex items-center space-x-2">
          <Globe2
            className="h-6 w-6 text-blue-600"
            aria-label="Ícono de TomyLanguage"
          />
          <span className="text-2xl font-bold text-blue-800">TomyLanguage</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-blue-800"
            href="#"
          >
            Características
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-blue-800"
            href="#"
          >
            Precios
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-blue-800"
            href="#"
          >
            Acerca de
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 text-blue-800"
            href="#"
          >
            Contacto
          </a>
        </nav>
      </header>
    </div>
  );
};
