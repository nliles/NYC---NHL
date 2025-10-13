import { EntrySkeletonType } from "contentful";

export type Bullet = {
  [key: string]: string;
};

type Image = {
  fields: {
    title: string;
    description: string;
    file: {
      url: string;
    };
  };
};

type LatLong = {
  lon: number;
  lat: number;
};

export type SelectedLandmark = {
  name: string;
  borough: string;
  location: LatLong;
  image: string;
  imageTitle?: string;
  imageDescription?: string;
  bullets: Bullet[];
  moreInfoUrl: string;
  quote?: string;
  quoteAuthor?: string;
};

type LandmarkFields = {
  name: string;
  borough: string;
  location: LatLong;
  bullets: Bullet[];
  moreInfoUrl: string;
  image: Image;
  quote?: string;
  quoteAuthor?: string;
};

export type Landmark = EntrySkeletonType &{
  contentTypeId: "nycNhl";
  fields: LandmarkFields;
};

export type MapboxFeature = {
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    [key: string]: any;
  };
};
