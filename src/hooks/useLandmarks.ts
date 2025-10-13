import { useEffect, useState } from "react";
import { Asset, Entry } from "contentful";
import { getLandmarks } from "@/services/contentful";
import { LandmarkSkeleton, Landmark } from "../types";

export const useLandmarks = () => {
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLandmarks = async () => {
      try {
        setLoading(true);
        const response = await getLandmarks();

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
              bullets: Array.isArray(entry.fields.bullets)
                ? entry.fields.bullets
                : [],
              moreInfoUrl: String(entry.fields.moreInfoUrl),
              image: {
                url: String(imageData?.fields?.file?.url),
                title: imageData?.fields?.title ? String(imageData?.fields?.title) : undefined,
                description: imageData?.fields?.description ? String(imageData?.fields?.description) : undefined,
              },
              quote: entry.fields.quote ? String(entry.fields.quote) : undefined,
              quoteAuthor: entry.fields.quoteAuthor ? String(entry.fields.quoteAuthor) : undefined,
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
