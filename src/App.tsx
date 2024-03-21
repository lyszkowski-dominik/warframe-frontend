import { useEffect, useState } from "react";
import "./App.css";
import { fetchData } from "./utils/fetchData";
// import Relict from "./components/Relict";
// import { Relict as RelictType } from "./types/Relict";
// import uniqid from "uniqid";
import GroupedTable from "./components/GroupedTable";
import { Reward } from "./types/Reward";
import ItemsTable from "./components/ItemsTable";

function App() {
  // const [relics, setRelics] = useState([]);
  const [currentlyAvailableRelics, setCurrentlyAvailableRelics] = useState([]);
  const [rewards, setRewards] = useState<Reward[]>([]);

  const getData = async () => {
    const data = await fetchData();
    // setRelics(data.relics);
    setCurrentlyAvailableRelics(data.currentlyAvailableRelics);
    setRewards(data.rewards);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Warframe Relics</h1>

      <div className="card">
        <h2>Currently available relics: </h2>
        <div className="relics">
          <GroupedTable data={currentlyAvailableRelics} />
          {/* {currentlyAvailableRelics.map((relic: RelictType) => (
            <Relict key={`${relic.name}.${uniqid()}`} {...relic} />
          ))} */}
          <h3>All items table</h3>
          <ItemsTable data={rewards} />
        </div>
      </div>
    </>
  );
}

export default App;
