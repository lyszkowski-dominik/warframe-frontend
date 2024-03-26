import { useEffect, useState } from "react";
import GroupedTable from "../components/GroupedTable";
import { Reward } from "../types/Reward";
import ItemsTable from "../components/ItemsTable";
import { fetchData } from "../utils/fetchData";
import { browserName, browserVersion, deviceDetect, deviceType } from "react-device-detect";

const Available = () => {
  const [currentlyAvailableRelics, setCurrentlyAvailableRelics] = useState([]);
  const [rewards, setRewards] = useState<Reward[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const getData = async () => {
    const data = await fetchData();
    // setRelics(data.relics);
    setCurrentlyAvailableRelics(data.currentlyAvailableRelics);
    setRewards(data.rewards);
  };

  useEffect(() => {
    setIsFetching(true);
    getData();
    setIsFetching(false);
  }, []);

  const test = deviceDetect(window.navigator.userAgent);

  return (
    <div>
      <p>
        BrowserName: {browserName}, BrowserVersion: {browserVersion}, Device
        Type: {deviceType}

      </p>
      {Object.keys(test).map((key) => (
        <p>
          {key}: {test[key]}
        </p>
      ))}
      <h1>Warframe Relics</h1>
      <div className="card">
        {isFetching && <h1>Loading...</h1>}
        {!isFetching && (
          <>
            <h2>Currently available relics: </h2>
            <div className="relics">
              <GroupedTable data={currentlyAvailableRelics} />
              <h3>All items table</h3>
              <ItemsTable data={rewards} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Available;
