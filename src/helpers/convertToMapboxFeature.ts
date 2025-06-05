import { Landmark, MapboxFeature } from "../types";

function convertToMapboxFeature(landmark: Landmark): MapboxFeature {
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          landmark.fields.location.lon,
          landmark.fields.location.lat
        ]
      },
      properties: {
        name: landmark.fields.name,
        borough: landmark.fields.borough,
        bullets: landmark.fields.bullets,
        moreInfoUrl: landmark.fields.moreInfoUrl,
        image: landmark.fields.image,
        image_url: landmark.fields.image_url
      }
    };
  }

  export default convertToMapboxFeature;