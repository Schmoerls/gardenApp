import { useState } from "react";
import { Community } from "./Community";
import { MyGarden } from "./MyGarden";
import { ToDo } from "./ToDo";
import profilePic from "../assets/profile.png";
import plant from "../assets/plant.svg";
import { Profile } from "../components/Profile";

export const Dashboard = () => {
  const [menuState, setMenuState] = useState(0);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedPlantsId, setSelectedPlantsId] = useState([1, 3, 4]);
  const [selectedPlants, setSelectedPlants] = useState([]);

  return (
    <div className="h-screen bg-orange-50 flex flex-col">
      {profileOpen && <Profile openProfile={setProfileOpen} />}
      <div className="p-4 pb-24">
        <div className="flex items-center justify-between pb-8">
          <h1 className="text-2xl font-bold text-left">
            {menuState == 0 && "Mein Garten"}
            {menuState == 1 && "ToDos"}
            {menuState == 2 && "Community"}
          </h1>
          <img
            onClick={() => setProfileOpen(true)}
            className="h-14 w-14 rounded-full border-2 border-green-600"
            src={profilePic}
            alt="ProfilePicture"
          />
        </div>
        {menuState == 0 && (
          <MyGarden
            dataParent={selectedPlants}
            saveDataParent={setSelectedPlants}
            selectedId={selectedPlantsId}
            setSelectedId={setSelectedPlantsId}
          />
        )}
        {menuState == 1 && <ToDo selectedPlants={selectedPlants} />}
        {menuState == 2 && <Community />}
      </div>
      <div className="flex fixed bottom-0 w-full">
        <button
          onClick={() => setMenuState(0)}
          className={`w-1/2 h-full flex justify-center p-4 ${
            menuState == 0 ? "bg-green-600" : "bg-green-400"
          }`}
        >
          <img className="size-10" src={plant} alt="Menu Icon" />
        </button>
        <button
          onClick={() => setMenuState(1)}
          className={`w-1/2 h-full flex justify-center p-4 ${
            menuState == 1 ? "bg-green-600" : "bg-green-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
            />
          </svg>
        </button>
        <button
          onClick={() => setMenuState(2)}
          className={`w-1/2 h-full flex justify-center p-4 ${
            menuState == 2 ? "bg-green-600" : "bg-green-400"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
