import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "../components/Checkbox";

const questions = [
  {
    text: "Herzlich Willkommen zu deinem Gartenplaner, lernen wir uns erstmal kennen!",
  },
  {
    text: "Welche Art von Garten hast du?",
    options: ["Balkon", "Topfpflanzen", "Garten"],
  },
  {
    text: "Wie gut bist du mit Pflanzen?",
    options: ["Anfänger", "Hobbygärtner", "Fortgeschritten", "Experte"],
  },
  {
    text: "Woran hast du Interesse?",
    options: ["Gartenpflege", "Vernetzung mit anderen"],
  },
];

export const Questionaire = () => {
  const [questionCount, setQuestionCount] = useState(0);

  const navigate = useNavigate();

  const continueClicked = () => {
    if (questionCount >= questions.length - 1) {
      navigate("/dashboard");
    } else {
      setQuestionCount(questionCount + 1);
    }
  };

  return (
    <div className="bg-orange-50 h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-left pb-6">Einrichtung</h1>
      <div className="flex-grow flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-left">{questions[questionCount].text}</h2>
          {questions[questionCount].options?.map((option) => (
            <div className="flex gap-4">
              <Checkbox key={option} />
              {option}
            </div>
          ))}
        </div>
        <button
          className="bg-green-600 text-lg font-semibold px-2 py-1 rounded-lg text-slate-100"
          onClick={continueClicked}
        >
          Weiter
        </button>
      </div>
    </div>
  );
};
