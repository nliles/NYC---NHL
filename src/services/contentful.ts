import client from "../lib/contentful";
import type { EntryCollection } from "contentful";
import { LandmarkSkeleton } from "../types";

export const getLandmarks = (): Promise<EntryCollection<LandmarkSkeleton>> => {
  return client.withoutUnresolvableLinks.getEntries<LandmarkSkeleton>({
    content_type: "nycNhl",
    limit: 120,
    order: ["fields.name"],
  });
};
