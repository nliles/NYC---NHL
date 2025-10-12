type Bullet = {
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

export type LandmarkFields = {
  name: string;
  borough: string;
  location: {
    lon: number;
    lat: number;
  };
  bullets: Bullet[];
  moreInfoUrl: string;
  image: Image;
  quote?: string;
  quoteAuthor?: string;
};

export type Landmark = {
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
