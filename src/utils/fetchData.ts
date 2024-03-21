/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const transformRelics = (uniqueRelics: any) => {
  const newObj: {
    [key: string]: {
      chance: number;
      rarity: string;
      name: string;
      drops: string[];
    };
  } = {};
  uniqueRelics.forEach((relic: any) => {
    relic.rewards.forEach((reward: any) => {
      const name = reward.item.name.replace(/\s/g, "");
      if (!newObj[name]) {
        newObj[name] = {
          chance: reward.chance,
          rarity: reward.rarity,
          name: reward.item.name,
          drops: [],
        };
      }
      if (!relic.vaulted) {
        newObj[name].drops.push(relic.name);
      }
    });
  });

  // Convert the newObj into an array of objects
  const result = Object.values(newObj);

  // Ensure all items have at least one drop location
  result.forEach((item) => {
    if (item.drops.length === 0) {
      item.drops = ["Currently unavailable"];
    }
  });

  return result;
};

export const fetchData = async () => {
  const response = await axios.get(
    "https://api.warframestat.us/items?only=name,type,rewards,vaulted,locations,imageName,uniqueName?language=pl"
  );

  // filter only for category relics
  const relics = response.data.filter((item: any) => item.type === "Relic");

  // filter to new object only unique relics by name and imageName has intact in it
  const uniqueRelics = relics
    .filter((relic: any, index: number, self: any) => {
      return (
        self.findIndex(
          (item: any) =>
            item.name === relic.name && item.imageName.includes("intact")
        ) === index
      );
    })
    .map((relic: any) => {
      return {
        ...relic,
        columnName: relic.name.split(" ")[1],
      };
    });
  // iterate through uniqueRelics and its rewards and create new object with only property 'name' that comes from reward.item.name 'chance' and 'rarity' from reward
  const rewards = transformRelics(uniqueRelics);
  console.log(rewards);
  // create additional objects based on locations count copying rest of the attributes
  const allRelics = uniqueRelics
    .flatMap((relic: any) => {
      return relic.locations.map((location: any) => {
        return {
          ...relic,
          location: location.location,
          chance: location.chance * 100,
          rarity: location.rarity,
        };
      });
    })
    .map((relic: any) => {
      return {
        ...relic,
        locations: undefined,
        rewards: relic.rewards.map((reward: any) => {
          return {
            name: reward.item.name,
            chance: reward.chance,
            rarity: reward.rarity,
          };
        }),
        rewardsArray: relic.rewards
          .map((reward: any) => {
            return reward.item.name;
          })
          .join(", "),
      };
    });

  // filter only for currently available relics
  const currentlyAvailableRelics = allRelics.filter(
    (relic: any) => !relic.vaulted
  );

  return { relics, currentlyAvailableRelics, rewards };
};
