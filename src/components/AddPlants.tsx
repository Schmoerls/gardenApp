import { useState } from "react";
import plantData from "../assets/plants.json";

export const AddPlants = ({
  closeAdd,
  addPlant,
  selectedPlants,
}: {
  closeAdd: React.Dispatch<React.SetStateAction<boolean>>;
  addPlant: Function;
  selectedPlants: number[];
}) => {
  const [search, setSearch] = useState("");

  const filteredData = plantData.filter(
    (item) =>
      !selectedPlants.includes(item.id) &&
      item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed top-0 left-0 w-full h-[70vh] p-4 z-10">
      <div className="bg-orange-400 w-full h-full rounded-lg shadow-xl p-4 border-4 border-orange-300">
        <div className="flex justify-between items-center">
          <h1 className="w-fit text-2xl text-white">Hinzufügen</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-white"
            onClick={() => closeAdd(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <input
          onChange={(event) => setSearch(event.target.value)}
          className="rounded-lg w-full text-lg p-1 my-4"
        />
        {filteredData.map((plant) => (
          <p
            onClick={() => addPlant(plant.id)}
            className="text-xl text-white w-fit pb-2"
          >
            {plant.name}
          </p>
        ))}
      </div>
    </div>
  );
};
