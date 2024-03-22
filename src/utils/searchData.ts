/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { fetchRelics } from "./fetchRelics";

export const searchData = async (searchedText: string) => {
  const response = await axios.get(
    `https://api.warframestat.us/items/search/${searchedText}?language=en`
  );
  const data = response.data;
  // filter for objects that has 'components' property
  const filteredData = data.filter((item: any) => item.components);

  const relics = await fetchRelics();
  // add property available to each drop in components , true if name of relic is in drops array
  filteredData.forEach((item: any) => {
    item.components.forEach((component: any) => {
      component.drops.forEach((drop: any) => {
        drop.available = relics.some((relic: any) => {
          return relic.name === drop.location.split(" ").slice(0, 3).join(" ");
        });
      });
    });
  });


  return filteredData;
};
