import { useEffect, useState } from "react";
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
