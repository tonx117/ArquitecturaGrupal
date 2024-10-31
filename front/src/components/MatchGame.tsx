import { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { Navbar } from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import "@public/css/matchgame.css";
import { Link } from "react-router-dom";

type Card = {
  id: number;
  type: "image" | "word";
  content: string;
  matchId: number;
};

const fruitData: Record<string, string[]> = {
  en: [
    "Banana",
    "Apple",
    "Orange",
    "Grape",
    "Watermelon",
    "Pineapple",
    "Strawberry",
    "Cherry",
  ],
  es: [
    "Banana",
    "Manzana",
    "Naranja",
    "Uva",
    "Sandía",
    "Piña",
    "Fresa",
    "Cereza",
  ],
  fr: [
    "Banane",
    "Pomme",
    "Orange",
    "Raisin",
    "Pastèque",
    "Ananas",
    "Fraise",
    "Cerise",
  ],
  de: [
    "Banane",
    "Apfel",
    "Orange",
    "Traube",
    "Wassermelone",
    "Ananas",
    "Erdbeere",
    "Kirsche",
  ],
  it: [
    "Banana",
    "Mela",
    "Arancia",
    "Uva",
    "Anguria",
    "Ananas",
    "Fragola",
    "Ciliegia",
  ],
  pt: [
    "Banana",
    "Maçã",
    "Laranja",
    "Uva",
    "Melancia",
    "Abacaxi",
    "Morango",
    "Cereja",
  ],
  ru: [
    "Банан",
    "Яблоко",
    "Апельсин",
    "Виноград",
    "Арбуз",
    "Ананас",
    "Клубника",
    "Вишня",
  ],
  zh: ["香蕉", "苹果", "橙子", "葡萄", "西瓜", "菠萝", "草莓", "樱桃"],
  ja: [
    "バナナ",
    "リンゴ",
    "オレンジ",
    "ぶどう",
    "スイカ",
    "パイナップル",
    "いちご",
    "さくらんぼ",
  ],
  ko: ["바나나", "사과", "오렌지", "포도", "수박", "파인애플", "딸기", "체리"],
};

export default function MatchGame() {
  const location = useLocation();
  const { selectedLanguage } = location.state || { selectedLanguage: "en" };
  const language = fruitData[selectedLanguage] ? selectedLanguage : "en";
  console.log(language)

  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matches, setMatches] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const navigate = useNavigate();


  const shuffle = (array: Card[]) => array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const imageCards = [
      {
        id: 1,
        type: "image",
        content:
          "https://static.vecteezy.com/system/resources/previews/019/613/646/original/banana-graphic-clipart-design-free-png.png",
        matchId: 1,
      },
      {
        id: 2,
        type: "image",
        content:
          "https://cdn.pixabay.com/photo/2022/06/30/16/47/apple-7294069_960_720.png",
        matchId: 2,
      },
      {
        id: 3,
        type: "image",
        content:
          "https://static.vecteezy.com/system/resources/previews/012/073/841/original/doodle-freehand-sketch-drawing-of-orange-fruit-free-png.png",
        matchId: 3,
      },
      {
        id: 4,
        type: "image",
        content:
          "https://static.vecteezy.com/system/resources/previews/009/266/647/original/grape-icon-design-free-png.png",
        matchId: 4,
      },
      {
        id: 5,
        type: "image",
        content:
          "https://i.pinimg.com/originals/cc/a3/57/cca357a1b5321f7b072718e092295b63.png",
        matchId: 5,
      },
      {
        id: 6,
        type: "image",
        content:
          "https://static.vecteezy.com/system/resources/previews/009/597/663/original/pineapple-fruit-illustration-cartoon-png.png",
        matchId: 6,
      },
      {
        id: 7,
        type: "image",
        content:
          "https://easydrawingguides.com/wp-content/uploads/2018/09/Strawberry-10.png",
        matchId: 7,
      },
      {
        id: 8,
        type: "image",
        content:
          "https://static.vecteezy.com/system/resources/previews/018/931/299/original/cartoon-cherries-icon-png.png",
        matchId: 8,
      },
    ];

    const wordCards = [
      ...fruitData[language].slice(0, 4).map((word, index) => ({
        id: index + 9,
        type: "word",
        content: word,
        matchId: index + 1,
      })),
      ...fruitData[language].slice(4, 8).map((word, index) => ({
        id: index + 13,
        type: "word",
        content: word,
        matchId: index + 5,
      })),
    ];

    setCards(shuffle([...imageCards, ...wordCards]));
  }, [language]);

  const handleCardClick = (card: Card) => {
    if (selectedCards.length === 2 || matches.includes(card.matchId)) return;

    setSelectedCards((prev) => [...prev, card]);

    if (selectedCards.length === 1) {
      setAttempts((prev) => prev + 1);
      if (selectedCards[0].matchId === card.matchId) {
        setMatches((prev) => {
          const updatedMatches = [...prev, card.matchId];
          if (updatedMatches.length === 8) setGameCompleted(true);
          return updatedMatches;
        });
        setTimeout(() => setSelectedCards([]), 500);
      } else {
        setTimeout(() => setSelectedCards([]), 500);
      }
    }
  };

  const renderCard = (card: Card) => {
    const isMatched = matches.includes(card.matchId);
    const isSelected = selectedCards.includes(card);

    return (
      <div
        key={card.id}
        onClick={() => handleCardClick(card)}
        className={`flex items-center justify-center w-40 h-40 p-2 rounded cursor-pointer border text-lg font-semibold ${
          isMatched
            ? "bg-green-200 border-green-500 text-gray-400"
            : isSelected
            ? selectedCards[0]?.matchId === card.matchId
              ? "bg-green-200 border-green-500"
              : "bg-red-200 border-red-500"
            : "bg-white border-gray-200 hover:bg-blue-100"
        }`}
      >
        {card.type === "image" ? (
          <img
            src={card.content}
            alt="fruit"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="text-center">{card.content}</p>
        )}
      </div>
    );
  };

  const closeModal = () => setGameCompleted(false);
    const handleLearnButtonClick = () => {
      if (selectedLanguage) {
        navigate("/wordordergame", {
          state: { selectedLanguage: language },
        }); // Enviar solo el código del idioma
      }
    };
    const handleButtonClick = () => {
      handleLearnButtonClick()
      closeModal()
    }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 p-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Juego de Emparejamiento
        </h1>
        <p className="text-lg font-semibold mb-6 text-blue-700">{`${matches.length}/8 Aciertos`}</p>
        <div className="grid grid-cols-4 gap-4 max-w-6xl w-full">
          <div className="col-span-1 flex justify-center">
            <div className="grid grid-cols-1 gap-4">
              {cards
                .filter((card) => card.type === "image")
                .slice(0, 4)
                .map(renderCard)}
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="grid grid-cols-1 gap-4">
              {cards
                .filter((card) => card.type === "image")
                .slice(4, 8)
                .map(renderCard)}
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="grid grid-cols-1 gap-4">
              {cards
                .filter((card) => card.type === "word")
                .slice(0, 4)
                .map(renderCard)}
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="grid grid-cols-1 gap-4">
              {cards
                .filter((card) => card.type === "word")
                .slice(4, 8)
                .map(renderCard)}
            </div>
          </div>
        </div>
        {gameCompleted && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-sm w-full">
              <h2 className="text-xl font-bold">¡Juego Completado!</h2>
              <p>Intentos: {attempts}</p>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={closeModal}
              >
                Cerrar
              </button>
              <br />
              <Link to="/languageselect">
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={closeModal}
                >
                  Seleccionar Otro Idioma
                </button>
              </Link>
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleButtonClick}
              >
                Jugar Otro Juego
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
