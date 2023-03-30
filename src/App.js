import { useEffect } from "react";

function App() {
  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);

  return <div className="App"></div>;
}

export default App;
