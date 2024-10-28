import { Globe2, BookOpen, MessageCircle, Award } from "lucide-react";
//import './landing.css';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-200 to-blue-300">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow">
        <div className="flex items-center space-x-2">
          <Globe2 className="h-6 w-6 text-blue-600" aria-label="Ícono de LinguaLearn" />
          <span className="text-2xl font-bold text-blue-800">LinguaLearn</span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4 text-blue-800" href="#">
            Características
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-blue-800" href="#">
            Precios
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-blue-800" href="#">
            Acerca de
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 text-blue-800" href="#">
            Contacto
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-blue-900">
                  Aprende idiomas de forma divertida y eficaz
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-800 md:text-xl">
                  Domina un nuevo idioma con LinguaLearn. Lecciones interactivas, práctica de conversación y seguimiento de progreso personalizado.
                </p>
              </div>
              <div className="space-x-4">
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md" 
                  aria-label="Comenzar gratis"
                >
                  Comienza gratis
                </button>
                <button 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded shadow-md" 
                  aria-label="Saber más"
                >
                  Saber más
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Características principales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <BookOpen className="h-12 w-12 text-blue-600 mb-4" aria-label="Lecciones interactivas" />
                <h3 className="text-xl font-bold mb-2 text-blue-800">Lecciones interactivas</h3>
                <p className="text-blue-700">Aprende con lecciones dinámicas y ejercicios interactivos.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MessageCircle className="h-12 w-12 text-blue-600 mb-4" aria-label="Práctica de conversación" />
                <h3 className="text-xl font-bold mb-2 text-blue-800">Práctica de conversación</h3>
                <p className="text-blue-700">Mejora tus habilidades de habla con nuestro asistente AI.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-blue-600 mb-4" aria-label="Seguimiento de progreso" />
                <h3 className="text-xl font-bold mb-2 text-blue-800">Seguimiento de progreso</h3>
                <p className="text-blue-700">Monitorea tu avance y gana insignias por tus logros.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-blue-900">
              Lo que dicen nuestros usuarios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "María G.", text: "LinguaLearn ha transformado mi forma de aprender idiomas. ¡Es divertido y efectivo!" },
                { name: "Carlos R.", text: "Gracias a esta app, ahora puedo mantener conversaciones en inglés con confianza." },
                { name: "Laura S.", text: "Las lecciones interactivas y el seguimiento de progreso me mantienen motivada todos los días." }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-blue-200">
                  <p className="text-blue-700 mb-4">"{testimonial.text}"</p>
                  <p className="font-bold text-blue-800">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Comienza tu viaje lingüístico hoy
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-200 md:text-xl">
                  Únete a miles de estudiantes que están dominando nuevos idiomas con LinguaLearn.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input 
                    className="flex-1 bg-white text-blue-900 px-4 py-2 rounded shadow" 
                    placeholder="Ingresa tu email" 
                    type="email" 
                    aria-label="Ingresa tu email" 
                    required
                  />
                  <button 
                    className="bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded shadow" 
                    type="submit" 
                    aria-label="Registrarse"
                  >
                    Registrarse
                  </button>
                </form>
                <p className="text-xs text-blue-200">
                  Al registrarte, aceptas nuestros términos de servicio y política de privacidad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-300">
        <p className="text-xs text-blue-700">© 2024 LinguaLearn. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-blue-700" href="#">
            Términos de servicio
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-blue-700" href="#">
            Privacidad
          </a>
        </nav>
      </footer>
    </div>
  );
}
