import { Asset, EntrySkeletonType, EntryFieldTypes } from "contentful";

export type Bullet = {
  key: string;
  value: string;
};

type ArchitectEntry = {
  fields: {
    name: string;
    summary: any; // Contentful Rich Text or string
  };
};

export type LandmarkFields = {
  name: EntryFieldTypes.Symbol;
  borough: EntryFieldTypes.Symbol;
  built: EntryFieldTypes.Symbol;
  founded?: EntryFieldTypes.Symbol;
  founder?: EntryFieldTypes.Symbol;
  location: EntryFieldTypes.Location;
  architects?: EntryFieldTypes.Array<any>;
  architectAttribution?: EntryFieldTypes.Array<any>;
  architecturalStyle?: EntryFieldTypes.Array<any>;
  residentAttribution?: EntryFieldTypes.Array<any>;
  bullets: EntryFieldTypes.Object<Bullet[]>;
  moreInfoUrl: EntryFieldTypes.Symbol;
  nickname?: EntryFieldTypes.Symbol;
  lenapeName?: EntryFieldTypes.Symbol;
  height?: EntryFieldTypes.Symbol;
  size?: EntryFieldTypes.Symbol;
  image: Asset;
  otherNames?: EntryFieldTypes.Symbol;
  quote?: EntryFieldTypes.Text;
  quoteAuthor?: EntryFieldTypes.Symbol;
  notableFeatures?: EntryFieldTypes.Symbol;
  significance: EntryFieldTypes.Symbol;
  rediscovered?: EntryFieldTypes.Symbol;
  notable?: EntryFieldTypes.Symbol;
  current?: EntryFieldTypes.Symbol;
};

export type LandmarkSkeleton = EntrySkeletonType<LandmarkFields, "nycNhl">;

type Image = {
  url: string;
  title?: string;
  description?: string;
};

export type Landmark = {
  architect?: ArchitectEntry[];
  architectAttribution?: any[];
  architecturalStyle?: any[];
  borough: string;
  built?: string;
  bullets: Bullet[];
  current?: string;
  founded?: string;
  founder?: string;
  residentAttribution?: any[];
  location: { lat: number; lon: number };
  height?: string;
  size?: string;
  id: string;
  image: Image;
  moreInfoUrl: string;
  nickname?: string;
  lenapeName?: string;
  name: string;
  notable?: string;
  notableFeatures?: string;
  otherNames?: string;
  rediscovered?: string;
  quote?: string;
  quoteAuthor?: string;
  significance: string;
};

export type MapboxFeature = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    id: string;
    name: string;
  };
};
