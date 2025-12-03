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
  builder?: EntryFieldTypes.Symbol;
  founded?: EntryFieldTypes.Symbol;
  founder?: EntryFieldTypes.Symbol;
  benefactor?: EntryFieldTypes.Symbol;
  classType?: EntryFieldTypes.Symbol;
  commissioner?: EntryFieldTypes.Symbol;
  location: EntryFieldTypes.Location;
  architects?: EntryFieldTypes.Array<any>;
  architectAttribution?: EntryFieldTypes.Array<any>;
  landscapeArchitects?: EntryFieldTypes.Array<any>;
  engineer?: EntryFieldTypes.Array<any>;
  architecturalStyle?: EntryFieldTypes.Array<any>;
  residentAttribution?: EntryFieldTypes.Array<any>;
  bullets: EntryFieldTypes.Object<Bullet[]>;
  moreInfoUrl: EntryFieldTypes.Symbol;
  lenapeName?: EntryFieldTypes.Symbol;
  height?: EntryFieldTypes.Symbol;
  size?: EntryFieldTypes.Symbol;
  length?: EntryFieldTypes.Symbol;
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
  benefactor?: string;
  builder?: string;
  borough: string;
  built?: string;
  bullets: Bullet[];
  current?: string;
  founded?: string;
  founder?: string;
  commissioner?: string;
  classType?: string;
  engineer: any[];
  height?: string;
  id: string;
  image: Image;
  landscapeArchitect?: any[];
  lenapeName?: string;
  length?: string;
  location: { lat: number; lon: number };
  moreInfoUrl: string;
  name: string;
  notable?: string;
  notableFeatures?: string;
  otherNames?: string;
  quote?: string;
  quoteAuthor?: string;
  rediscovered?: string;
  residentAttribution?: any[];
  significance: string;
  size?: string;
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
