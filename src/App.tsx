import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./utils/fetchData";
import Relict from "./components/Relict";
import { Relict as RelictType } from "./types/Relict";
import uniqid from "uniqid";

function App() {
  const [relics, setRelics] = useState([]);
  const [currentlyAvailableRelics, setCurrentlyAvailableRelics] = useState([]);

  const getData = async () => {
    const data = await fetchData();
    setRelics(data.relics);
    setCurrentlyAvailableRelics(data.currentlyAvailableRelics);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(relics);
  console.log(currentlyAvailableRelics);
  return (
    <>
      <h1>Warframe Relics</h1>
      <div className="card">
        <h2>Currently available relics: </h2>
        <div className="relics">
          {currentlyAvailableRelics.map((relic: RelictType) => (
            <Relict key={`${relic.name}.${uniqid()}`} {...relic} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
