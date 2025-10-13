import { useEffect, useState } from "react";
import { Entry } from "contentful";
import { getLandmarks } from "../services/contentful";
import { LandmarkSkeleton, Landmark } from "../types";

export const useLandmarks = () => {
  const [landmarks, setLandmarks] = useState<Landmark[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchLandmarks = async () => {
      try {
        setLoading(true);
        const response = await getLandmarks();

        const parsedLandmarks = response.items.map(
          (entry: Entry<LandmarkSkeleton>) => ({
            id: entry.sys.id,
            name: String(entry.fields.name),
            borough: String(entry.fields.borough),
            location: {
              lat: Number(entry.fields.location?.lat),
              lon: Number(entry.fields.location?.lon),
            },
            bullets: Array.isArray(entry.fields.bullets)
              ? entry.fields.bullets
              : [],
            moreInfoUrl: String(entry.fields.moreInfoUrl),
            image: {
              url: (entry?.fields.image?.fields as any)?.file?.url || "",
              title: (entry.fields.image as any)?.fields?.title || "",
              description:
                (entry.fields.image as any)?.fields?.description || "",
            },
            quote: String(entry.fields.quote),
            quoteAuthor: String(entry.fields.quoteAuthor),
          }),
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
