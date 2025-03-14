import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { useState } from "react";

function App() {
  const [isloaded, setIsLoaded] = useState(false);
  return (
    <>
      <>{!isloaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}</>
    </>
  );
}

export default App;
