/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const fetchData = async () => {
  const response = await axios.get(
    "https://api.warframestat.us/items?only=name,type,rewards,vaulted,locations,imageName,uniqueName"
  );

  // filter only for category relics
  const relics = response.data.filter((item: any) => item.type === "Relic");

  // filter to new object only unique relics by name and imageName has intact in it
  const uniqueRelics = relics.filter((relic: any, index: number, self: any) => {
    return (
      self.findIndex(
        (item: any) =>
          item.name === relic.name && item.imageName.includes("intact")
      ) === index
    );
  });

  //   console.log(uniqueRelics);
  // filter only for currently available relics
  const currentlyAvailableRelics = uniqueRelics.filter(
    (relic: any) => !relic.vaulted
  );
  //   console.log(currentlyAvailableRelics);

  return { relics, currentlyAvailableRelics };
};
