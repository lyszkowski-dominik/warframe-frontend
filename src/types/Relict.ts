export type Location = {
  chance: number;
  rarity: string;
  location: string;
};

type Item = {
  name: string;
  uniqueName: string;
  rarity: string;
  warframeMarket: { id: string; urlName: string };
};

export type Reward = {
  chance: number;
  rarity: string;
  item: Item;
};

export type Relict = {
  uniqueName: string;
  imageName: string;
  locations: Location[];
  name: string;
  rewards: Reward[];
  type: string;
  vaulted: boolean;
};
