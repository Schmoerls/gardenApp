import profilePic from "../assets/profile.png";

[
  "#49de80",
  "#3f51b5",
  "#f44336",
  "#ff9800",
  "#4caf50",
  "#ffc107",
  "#2196f3",
  "#e91e63",
  "#00bcd4",
  "#673ab7",
  "#ffeb3b",
  "#795548",
  "#607d8b",
  "#8bc34a",
  "#9c27b0",
  "#ff5722",
  "#00e676",
  "#ff4081",
  "#18ffff",
  "#b39ddb",
];

export const Profile = ({
  openProfile,
}: {
  openProfile: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="fixed w-full h-full p-8 z-10">
      <div className="bg-orange-400 w-full h-full rounded-lg shadow-xl p-4 border-4 border-orange-300">
        <div className="flex justify-between items-center pb-8">
          <div className="flex gap-4 items-center">
            <img
              className="h-16 w-16 rounded-full border-2 border-green-600"
              src={profilePic}
              alt="ProfilePicture"
            />
            <h1 className="text-2xl w-fit text-white font-bold">Maxi</h1>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-white"
            onClick={() => openProfile(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-1">Lvl 1</h2>
          <h2 className="w-fit text-white text-xl pb-1">Hobbygärtner</h2>
        </div>
        <div className="bg-white h-6 w-full rounded-full mb-8">
          <div className="bg-green-600 w-1/3 h-full rounded-l-full"></div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-4">Gepflanzte Pflanzen</h2>
          <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">4</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-4">Geerntete Pflanzen</h2>
          <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">2</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-4">Geteilte Plfanzen</h2>
          <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">1</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-4">Geteiltes Wissen</h2>
          <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">0</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-4">Geteilte Mittel</h2>
          <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">0</h2>
        </div>
      </div>
    </div>
  );
};
