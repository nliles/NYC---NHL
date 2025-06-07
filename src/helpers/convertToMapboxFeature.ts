import { Landmark, MapboxFeature } from "../types";

function convertToMapboxFeature(landmark: Landmark): MapboxFeature {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [landmark.fields.location.lon, landmark.fields.location.lat],
    },
    properties: {
      name: landmark.fields.name,
      borough: landmark.fields.borough,
      bullets: landmark.fields.bullets,
      moreInfoUrl: landmark.fields.moreInfoUrl,
      image: landmark.fields.image?.fields?.file?.url,
      imageDescription: landmark.fields.image?.fields?.description,
      imageUrl: landmark.fields.imageUrl,
      quote: landmark.fields.quote,
      quoteAuthor: landmark.fields.quoteAuthor,
    },
  };
}

export default convertToMapboxFeature;
