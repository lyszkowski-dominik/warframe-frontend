type Drop = {
  chance: number;
  location: string;
  rarity: string;
  type: string;
  available: boolean;
};
type Component = {
  description: string;
  imageName: string;
  itemCount: number;
  masterable: boolean;
  name: string;
  tradeable: boolean;
  uniqueName: string;
  drops: Drop[];
};
export type Entry = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  abilities?: any[];
  buildPrice: number;
  buildTime: number;
  components: Component[];
  name: string;
  description: string;
  type: string;
  tradable: boolean;
  uniqueName: string;
  wikiaThumbnail?: string;
  imageName: string;
  category?: string;
};
