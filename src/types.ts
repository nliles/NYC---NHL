import { Asset, EntrySkeletonType, EntryFieldTypes } from "contentful";

export type Bullet = {
  key: string;
  value: string;
};

export type LandmarkFields = {
  name: EntryFieldTypes.Symbol;
  borough: EntryFieldTypes.Symbol;
  built: EntryFieldTypes.Symbol;
  founded?: EntryFieldTypes.Symbol;
  location: EntryFieldTypes.Location;
  architects?: EntryFieldTypes.Array<any>;
  architectAttribution?: EntryFieldTypes.Array<any>;
  bullets: EntryFieldTypes.Object<Bullet[]>;
  moreInfoUrl: EntryFieldTypes.Symbol;
  image: Asset;
  quote?: EntryFieldTypes.Text;
  quoteAuthor?: EntryFieldTypes.Symbol;
  notableFeatures?: EntryFieldTypes.Symbol;
  significance: EntryFieldTypes.Symbol;
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
  architect?: any[];
  architectAttribution?: any[];
  borough: string;
  built?: string;
  bullets: Bullet[];
  current?: string;
  founded?: string;
  location: { lat: number; lon: number };
  id: string;
  image: Image;
  moreInfoUrl: string;
  name: string;
  notable?: string;
  notableFeatures?: string;
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
