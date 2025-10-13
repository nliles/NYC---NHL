import { Landmark, MapboxFeature } from "../types";

function convertToMapboxFeature(landmark: Landmark): MapboxFeature {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [landmark.location.lon, landmark.location.lat],
    },
    properties: {
      id: landmark.id,
      name: landmark.name,
    },
  };
}

export default convertToMapboxFeature;
