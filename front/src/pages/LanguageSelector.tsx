import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Flag from "react-world-flags";
import "@public/css/LanguageSelector.css";
import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";

type Language = {
  code: string;
  name: string;
  nativeName: string;
  flagCode: string;
};

const languages: Language[] = [
  { code: "en", name: "Inglés", nativeName: "English", flagCode: "gb" },
  { code: "es", name: "Español", nativeName: "Español", flagCode: "es" },
  { code: "fr", name: "Francés", nativeName: "Français", flagCode: "fr" },
  { code: "de", name: "Alemán", nativeName: "Deutsch", flagCode: "de" },
  { code: "it", name: "Italiano", nativeName: "Italiano", flagCode: "it" },
  { code: "pt", name: "Portugués", nativeName: "Português", flagCode: "pt" },
  { code: "ru", name: "Ruso", nativeName: "Русский", flagCode: "ru" },
  { code: "zh", name: "Chino", nativeName: "中文", flagCode: "cn" },
  { code: "ja", name: "Japonés", nativeName: "日本語", flagCode: "jp" },
  { code: "ko", name: "Coreano", nativeName: "한국어", flagCode: "kr" },
];

export const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] =
    React.useState<Language | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const navigate = useNavigate();

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleLearnButtonClick = () => {
    if (selectedLanguage) {
      navigate("/Game", { state: { selectedLanguage: selectedLanguage.code } }); // Enviar solo el código del idioma
    }
  };

  return (
    <div>
      <Navbar />
      <div className="language-selector flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">
          Selecciona tu idioma
        </h2>
        <div className="relative w-full max-w-4xl px-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="embla__slide flex-none w-1/3 p-2"
                >
                  <div
                    className={`cursor-pointer border rounded-lg p-6 transform transition-transform duration-300 ${
                      selectedLanguage?.code === lang.code
                        ? "bg-green-500 text-white shadow-lg scale-105"
                        : "bg-white text-gray-800 border-gray-300 hover:bg-blue-100"
                    }`}
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <Flag
                        code={lang.flagCode}
                        style={{ width: "60px", height: "40px" }}
                      />
                      <span className="text-lg font-semibold mt-2">
                        {lang.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {lang.nativeName}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg focus:outline-none z-10"
            onClick={scrollPrev}
          >
            &lt;
          </button>
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg focus:outline-none z-10"
            onClick={scrollNext}
          >
            &gt;
          </button>
        </div>
        {selectedLanguage && (
          <>
            <p className="mt-8 text-2xl text-blue-800 font-medium flex items-center">
              Has seleccionado:{" "}
              <span className="font-semibold ml-2">
                {selectedLanguage.name}
              </span>
              ({selectedLanguage.nativeName})
              <Flag
                code={selectedLanguage.flagCode}
                style={{
                  width: "30px",
                  height: "20px",
                  marginLeft: "8px",
                  marginTop: "9px",
                }}
              />
            </p>
            <button
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
              onClick={handleLearnButtonClick}
            >
              Aprender
            </button>
          </>
        )}
      </div>
    </div>
  );
};
