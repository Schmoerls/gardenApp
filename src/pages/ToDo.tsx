import { useEffect, useState } from "react";

const exampleToDos = [
  { name: "Karotten gießen", checked: false },
  { name: "Basilikum schneiden", checked: false },
  { name: "Erbeeren umtopfen", checked: false },
];

export const ToDo = ({ selectedPlants }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let newTodos = [];

    selectedPlants.map((plant) => {
      if (plant.toDo.includes(0)) {
        newTodos = [
          ...newTodos,
          { name: `${plant.name} gießen`, checked: false },
        ];
      }
      if (plant.toDo.includes(1)) {
        newTodos = [
          ...newTodos,
          { name: `${plant.name} schneiden`, checked: false },
        ];
      }
      if (plant.toDo.includes(2)) {
        newTodos = [
          ...newTodos,
          { name: `${plant.name} umtopfen`, checked: false },
        ];
      }
    });

    setTodos(newTodos);
  }, [selectedPlants]);

  const handleCheckToggle = (name) => {
    const updatedTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, checked: !todo.checked } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col gap-4">
      {todos.map((toDo) => (
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className={`size-6 border-2 border-black ${
              toDo.checked ? "text-green-800" : "text-orange-50"
            }`}
            onClick={() => handleCheckToggle(toDo.name)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
          <p className="text-xl">{toDo.name}</p>
        </div>
      ))}
    </div>
  );
};
