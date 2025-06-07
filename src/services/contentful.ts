// src/services/contentful.js
import client from "../lib/contentful";

export const getLandmarks = () => {
  return client.getEntries({
    content_type: "nycNhl",
    order: ["fields.name"],
    limit: 120,
    include: 2,
  });
};
