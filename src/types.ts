type Bullet = {
    [key: string]: string;
}

type Image = {
    fields: {
        description: string;
        file: {
            url: string;
        }
    }
}

type Fields = {
    name: string;
    borough: string;
    location: {
        lon: number;
        lat: number;
    };
    bullets: Bullet[];
    moreInfoUrl: string;
    image: Image;
    imageUrl: string;  
    quote?: string;
    quoteAuthor?: string;
};

export type Landmark = {
    fields: Fields
};

export type MapboxFeature = {
    type: "Feature";
    geometry: {
      type: "Point";
      coordinates: [number, number]; // [longitude, latitude]
    };
    properties: {
      [key: string]: any; // All your other data goes here
    };
  }