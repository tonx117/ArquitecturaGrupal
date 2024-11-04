import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { Navbar } from "./Navbar";
import { useLocation } from "react-router-dom";

const sentences: Record<string, string[]> = {
  en: [
    "The cat is sleeping",
    "I love programming",
    "She enjoys reading books",
    "They are playing outside",
  ],
  es: [
    "El gato está durmiendo",
    "Me encanta programar",
    "Ella disfruta leer libros",
    "Ellos están jugando afuera",
  ],
  fr: [
    "Le chat dort",
    "J'aime programmer",
    "Elle aime lire des livres",
    "Ils jouent dehors",
  ],
  de: [
    "Die Katze schläft",
    "Ich liebe Programmieren",
    "Sie liest gerne Bücher",
    "Sie spielen draußen",
  ],
  it: [
    "Il gatto sta dormendo",
    "Amo programmare",
    "Le piace leggere libri",
    "Stanno giocando fuori",
  ],
  pt: [
    "O gato está dormindo",
    "Eu amo programar",
    "Ela gosta de ler livros",
    "Eles estão brincando do lado de fora",
  ],
  ru: [
    "Кот спит",
    "Я люблю программировать",
    "Она любит читать книги",
    "Они играют на улице",
  ],
  zh: ["猫在睡觉", "我喜欢编程", "她喜欢读书", "他们在外面玩"],
  ja: [
    "猫は寝ています",
    "私はプログラミングが好きです",
    "彼女は本を読むのが好きです",
    "彼らは外で遊んでいます",
  ],
  ko: [
    "고양이가 자고 있습니다",
    "나는 프로그래밍을 좋아합니다",
    "그녀는 책 읽기를 즐깁니다",
    "그들은 밖에서 놀고 있습니다",
  ],
};

export default function WordOrderGame() {
  const location = useLocation();
  const { selectedLanguage } = location.state || { selectedLanguage: "en" };
  const language = selectedLanguage;

  const [sentence, setSentence] = useState<string>("");
  const [words, setWords] = useState<string[]>([]);
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    startNewGame();
  }, [language]);

  const startNewGame = () => {
    const randomSentence =
      sentences[language][
        Math.floor(Math.random() * sentences[language].length)
      ];
    setSentence(randomSentence);
    setWords(randomSentence.split(" ").sort(() => Math.random() - 0.5));
    setUserOrder([]);
    setIsCorrect(null);
    setIsPopupOpen(false);
  };

  const handleWordClick = (word: string) => {
    if (userOrder.length < words.length) {
      setUserOrder((prev) => [...prev, word]);
    }
  };

  const checkOrder = () => {
    if (userOrder.join(" ") === sentence) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setIsPopupOpen(true); // Abrir el popup al terminar
  };

  const resetGame = () => {
    startNewGame();
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 p-4">
        <h1 className="text-4xl font-bold text-black mb-6">
          Juego de Ordenar Palabras
        </h1>
        <p className="text-lg font-semibold mb-6 text-black">
          Ordena las palabras para formar la oración correcta:
        </p>
        <div className="text-xl font-bold mb-4">
          {userOrder.join(" ") || "______ ____ ____ ____"}
        </div>
        <div className="grid grid-cols-4 gap-4 max-w-6xl w-full justify-items-center">
          {words.map((word, index) => (
            <div
              key={index}
              onClick={() => handleWordClick(word)}
              className="flex items-center justify-center w-32 h-32 p-2 rounded cursor-pointer border text-lg font-semibold bg-white border-gray-200 hover:bg-blue-100"
            >
              {word}
            </div>
          ))}
        </div>
        <button
          className="mt-6 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={checkOrder}
        >
          Comprobar Orden
        </button>

        {/* Popup */}
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">
                {isCorrect ? "¡Correcto!" : "Inténtalo de nuevo."}
              </h2>
              <button
                className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                onClick={resetGame}
              >
                Reiniciar Juego
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
