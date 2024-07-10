export const PlantInfo = ({
  plantData,
  closeInfo,
}: {
  plantData: any;
  closeInfo: React.Dispatch<any>;
}) => {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] p-8 z-10">
      <div className="bg-orange-400 w-full h-full rounded-lg shadow-xl p-4 border-4 border-orange-300">
        <div className="flex justify-between items-center mb-8">
          <h1 className="w-fit text-2xl text-white">{plantData.name}</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-white"
            onClick={() => closeInfo(null)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-4">Latein</h2>
          <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">
            {plantData.wissenschaftlicher_name}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-4">Familie</h2>
          <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">
            {plantData.familie}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-4">Typ</h2>
          <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">
            {plantData.pflanzentyp}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="w-fit text-white text-xl pb-4">Essbar</h2>
          <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">
            {plantData.essbar ? "Ja" : "Nein"}
          </h2>
        </div>
        <h2 className="w-fit text-white text-xl pb-2">Nutzung:</h2>
        <h2 className="w-fit text-xl pb-4 text-green-600 font-bold">
          {plantData.nutzung.kulinarische_nutzung.map((use) => (
            <span className="mr-2">{use}</span>
          ))}
          <br />
          {plantData.nutzung.medizinische_nutzung.map((use) => (
            <span className="mr-2">{use}</span>
          ))}
          <br />
          {plantData.nutzung.weitere_nutzung.map((use) => (
            <span className="mr-2">{use}</span>
          ))}
        </h2>
      </div>
    </div>
  );
};
