import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Questionaire } from "./pages/Questionaire";
import { Welcome } from "./pages/Welcome";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Welcome /> : <Questionaire />}</>;
}

export default App;
