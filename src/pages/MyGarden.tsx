import { useEffect, useState } from "react";
import { AddPlants } from "../components/AddPlants";
import plantData from "../assets/plants.json";
import { PlantInfo } from "../components/PlantInfo";
import bucket from "../assets/bucket.svg";
import cut from "../assets/cut.svg";
import water from "../assets/water.svg";

export const MyGarden = ({
  dataParent,
  saveDataParent,
  selectedId,
  setSelectedId,
}: {
  dataParent: any;
  saveDataParent: any;
  selectedId: number[];
  setSelectedId: any;
}) => {
  const [addPlantWindow, setAddPlantWindow] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<null | any>(null);

  const addPlant = (plantId: number) => {
    setSelectedId([...selectedId, plantId]);
    setAddPlantWindow(false);
  };

  useEffect(() => {
    const filteredItems = plantData.filter((item) =>
      selectedId.includes(item.id)
    );

    console.log(filteredItems);
    saveDataParent(filteredItems);
  }, [selectedId]);

  return (
    <>
      {addPlantWindow && (
        <AddPlants
          closeAdd={setAddPlantWindow}
          addPlant={addPlant}
          selectedPlants={selectedId}
        />
      )}
      {selectedPlant && (
        <PlantInfo plantData={selectedPlant} closeInfo={setSelectedPlant} />
      )}
      <div className="grid grid-cols-2 gap-2">
        {dataParent.map((plant) => (
          <p
            className={`py-8 relative rounded-xl text-xl font-bold text-gray-100`}
            style={{ background: plant.color }}
            onClick={() => setSelectedPlant(plant)}
          >
            {plant.name}
            <div className="absolute flex gap-0.5 top-[-4px] left-[-4px]">
              {plant.toDo.includes(0) && (
                <img
                  className="h-8 w-8 bg-blue-200 rounded-full border-2 border-black p-1"
                  src={water}
                  alt="Water Plant Icon"
                />
              )}
              {plant.toDo.includes(1) && (
                <img
                  className="h-8 w-8 bg-green-200 rounded-full border-2 border-black p-1"
                  src={cut}
                  alt="Water Plant Icon"
                />
              )}
              {plant.toDo.includes(2) && (
                <img
                  className="h-8 w-8 bg-orange-200 rounded-full border-2 border-black p-1"
                  src={bucket}
                  alt="Water Plant Icon"
                />
              )}
            </div>
          </p>
        ))}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-16 text-green-600 mx-auto mt-8"
        onClick={() => setAddPlantWindow(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </>
  );
};
