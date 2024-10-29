import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import "@public/css/LanguageSelector.css";

type Language = {
  code: string;
  name: string;
  flag: string;
};

const languages: Language[] = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "pt", name: "Português", flag: "🇵🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = React.useState<Language | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="language-selector">
      <h2 className="language-title">Select Your Language</h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla">
            <div className="embla__container">
              {languages.map((lang) => (
                <div key={lang.code} className="embla__slide">
                  <div
                    className={`language-card ${selectedLanguage?.code === lang.code ? "selected" : ""}`}
                    onClick={() => setSelectedLanguage(lang)}
                  >
                    <div className="flex flex-col items-center justify-center p-4">
                      <span className="text-4xl mb-2">{lang.flag}</span>
                      <span className="text-sm font-medium text-gray-700">{lang.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2"
          onClick={scrollPrev}
        >
          &lt; {/* Or use an icon here */}
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2"
          onClick={scrollNext}
        >
          &gt; {/* Or use an icon here */}
        </button>
      </div>
      {selectedLanguage && (
        <p className="selected-language">
          You selected: {selectedLanguage.name} {selectedLanguage.flag}
        </p>
      )}
    </div>
  );
}
