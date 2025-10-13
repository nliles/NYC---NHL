// src/services/contentful.js
import { EntryCollection } from "contentful";
import client from "../lib/contentful";
import { Landmark } from "../types";

export const getLandmarks = (): Promise<EntryCollection<Landmark>> => {
  return client.getEntries<Landmark>({
    content_type: "nycNhl",
    order: ["fields.name"],
    limit: 120,
    include: 2,
  });
};
