import { Asset, EntrySkeletonType, EntryFieldTypes } from "contentful";

export type Bullet = {
  key: string;
  value: string;
};

export type LandmarkFields = {
  name: EntryFieldTypes.Symbol;
  borough: EntryFieldTypes.Symbol;
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
  id: string;
  name: string;
  borough: string;
  architect?: any[];
  architectAttribution?: any[];
  location: { lat: number; lon: number };
  bullets: Bullet[];
  moreInfoUrl: string;
  image: Image;
  quote?: string;
  quoteAuthor?: string;
  notableFeatures?: string;
  significance: string;
  notable?: string;
  current?: string;
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
