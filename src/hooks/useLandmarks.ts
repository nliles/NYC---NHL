import { useEffect, useState } from "react";
import { Asset, Entry, EntryFieldTypes } from "contentful";
import { getLandmarks } from "@/services/contentful";
import { LandmarkSkeleton, Landmark } from "../types";

export const useLandmarks = () => {
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const transformStringField = (field?: string) =>
      field ? String(field) : undefined;

    const fetchLandmarks = async () => {
      try {
        setLoading(true);
        const response = await getLandmarks();

        console.log(response);

        const parsedLandmarks = response.items.map(
          (entry: Entry<LandmarkSkeleton>) => {
            const imageData = entry.fields.image as unknown as Asset;

            return {
              id: entry.sys.id,
              name: String(entry.fields.name),
              borough: String(entry.fields.borough),
              location: {
                lat: Number(entry.fields.location.lat),
                lon: Number(entry.fields.location.lon),
              },
              architect: (entry.fields.architects as any[]) || [],
              architectAttribution:
                (entry.fields.architectAttribution as any[]) || [],
              bullets: Array.isArray(entry.fields.bullets)
                ? entry.fields.bullets
                : [],
              moreInfoUrl: String(entry.fields.moreInfoUrl),
              image: {
                url: String(imageData?.fields?.file?.url),
                title: imageData?.fields?.title
                  ? String(imageData?.fields?.title)
                  : undefined,
                description: imageData?.fields?.description
                  ? String(imageData?.fields?.description)
                  : undefined,
              },
              quote: transformStringField(entry.fields.quote as string),
              quoteAuthor: transformStringField(
                entry.fields.quoteAuthor as string,
              ),
              notableFeatures: transformStringField(
                entry.fields.notableFeatures as string,
              ),
              significance: String(entry.fields.significance),
              notable: transformStringField(entry.fields.notable as string),
              current: transformStringField(entry.fields.current as string),
            };
          },
        );

        setLandmarks(parsedLandmarks);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch landmarks"),
        );
      } finally {
        setLoading(false);
      }
    };

    fetchLandmarks();
  }, []);

  return { landmarks, loading, error };
};
