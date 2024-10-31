import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { Navbar } from "./Navbar";

type Card = {
  id: number;
  type: "image" | "word";
  content: string;
  matchId: number;
};

export default function MatchingGame() {
  const [cards, setCards] = useState<Card[]>([
    { id: 1, type: "image", content: "/images/banana.jpg", matchId: 1 },
    { id: 2, type: "image", content: "/images/apple.jpg", matchId: 2 },
    { id: 3, type: "image", content: "/images/orange.jpg", matchId: 3 },
    { id: 4, type: "image", content: "/images/grape.jpg", matchId: 4 },
    { id: 5, type: "image", content: "/images/watermelon.jpg", matchId: 5 },
    { id: 6, type: "image", content: "/images/pineapple.jpg", matchId: 6 },
    { id: 7, type: "image", content: "/images/strawberry.jpg", matchId: 7 },
    { id: 8, type: "image", content: "/images/cherry.jpg", matchId: 8 },
    { id: 9, type: "word", content: "Banane", matchId: 1 },
    { id: 10, type: "word", content: "Apfel", matchId: 2 },
    { id: 11, type: "word", content: "Orange", matchId: 3 },
    { id: 12, type: "word", content: "Traube", matchId: 4 },
    { id: 13, type: "word", content: "Wassermelone", matchId: 5 },
    { id: 14, type: "word", content: "Ananas", matchId: 6 },
    { id: 15, type: "word", content: "Erdbeere", matchId: 7 },
    { id: 16, type: "word", content: "Kirsche", matchId: 8 },
  ]);

  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [matches, setMatches] = useState<number[]>([]);
  const [attempts, setAttempts] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false); // Estado para verificar si se completó el juego

  useEffect(() => {
    setCards(shuffle(cards));
  }, []);

  const shuffle = (array: Card[]) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (card: Card) => {
    if (selectedCards.length === 2 || matches.includes(card.matchId)) return;

    setSelectedCards((prev) => [...prev, card]);

    if (selectedCards.length === 1) {
      setAttempts((prev) => prev + 1);
      if (selectedCards[0].matchId === card.matchId) {
        setMatches((prev) => {
          const updatedMatches = [...prev, card.matchId];
          if (updatedMatches.length === 8) {
            setGameCompleted(true); // Marca el juego como completado
          }
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
        className={`p-2 rounded cursor-pointer border text-sm md:text-base ${
          isMatched
            ? "bg-green-200 border-green-500 text-gray-400" // Mantiene en verde al acertar
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
            alt="image"
            className="w-full h-20 object-cover"
          />
        ) : (
          <p className="text-center font-semibold">{card.content}</p>
        )}
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 p-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">
          Juego de Emparejamiento
        </h1>
        <p className="text-lg font-semibold mb-6 text-blue-700">{`${matches.length}/8 Aciertos`}</p>

        <div className="grid grid-cols-4 gap-4 max-w-6xl w-full">
          <div className="col-span-2 grid grid-cols-1 gap-4">
            {cards.filter((card) => card.type === "image").map(renderCard)}
          </div>
          <div className="col-span-2 grid grid-cols-1 gap-4">
            {cards.filter((card) => card.type === "word").map(renderCard)}
          </div>
        </div>

        {gameCompleted && (
            <div className="mt-6 p-4 bg-white text-green-600 rounded-md text-2xl font-bold text-center">
            <p className="text-center">¡Felicidades!</p>
            <p className="text-justify">Has respondido correctamente todo.</p>
            </div>
        )}
      </div>
    </div>
  );
}
