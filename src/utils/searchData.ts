/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const searchData = async (searchedText: string) => {
  const response = await axios.get(
    `https://api.warframestat.us/items/search/${searchedText}?language=en`
  );
  const data = response.data;
  // filter for objects that has 'components' property
  const filteredData = data.filter((item: any) => item.components);

  return filteredData;
};
