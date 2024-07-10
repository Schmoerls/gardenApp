import { useState } from "react";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="w-6 h-6 border-2 border-slate-500 flex justify-center items-center">
      <button
        className={`w-4 h-4 ${checked && "bg-slate-500"}`}
        onClick={() => setChecked(!checked)}
      />
    </div>
  );
};
