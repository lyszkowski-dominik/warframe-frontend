import axios from "axios";

type Relic = {
  name: string;
  type: string;
  vaulted: boolean;
};

export const fetchRelics = async () => {
  const url = "https://api.warframestat.us/items/?only=name,vaulted,type";
  const response = await axios.get(url);
  const relics = response.data.filter(
    (item: Relic) => item.type === "Relic" && item.vaulted === false
  );
  // chance name attribute to split name string and join only position 1 and 2
    relics.forEach((relic: Relic) => {
        relic.name = `${relic.name.split(" ").slice(1, 3).join(" ")} Relic`;
    });
  return relics;
};
