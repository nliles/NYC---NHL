import { useEffect, useState } from "react";
import { Asset, Entry } from "contentful";
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

        const parsedLandmarks = response.items.map(
          (entry: Entry<LandmarkSkeleton>) => {
            const imageData = entry.fields.image as unknown as Asset;
            const { name, borough, location, significance } = entry.fields;

            return {
              id: entry.sys.id,
              name: String(name),
              borough: String(borough),
              built: transformStringField(entry.fields.built as string),
              founded: transformStringField(entry.fields.founded as string),
              founder: transformStringField(entry.fields.founder as string),
              commissioner: transformStringField(
                entry.fields.commissioner as string,
              ),
              builder: transformStringField(entry.fields.builder as string),
              location: {
                lat: Number(location.lat),
                lon: Number(location.lon),
              },
              classType: String(entry.fields.classType),
              architect: (entry.fields.architects as any[]) || [],
              architectAttribution:
                (entry.fields.architectAttribution as any[]) || [],
              architecturalStyle:
                (entry.fields.architecturalStyle as any[]) || [],
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
              height: transformStringField(entry.fields.height as string),
              length: transformStringField(entry.fields.length as string),
              lenapeName: transformStringField(
                entry.fields.lenapeName as string,
              ),
              otherNames: transformStringField(
                entry.fields.otherNames as string,
              ),
              quote: transformStringField(entry.fields.quote as string),
              quoteAuthor: transformStringField(
                entry.fields.quoteAuthor as string,
              ),
              rediscovered: transformStringField(
                entry.fields.rediscovered as string,
              ),
              residentAttribution:
                (entry.fields.residentAttribution as any[]) || [],
              size: transformStringField(entry.fields.size as string),
              notableFeatures: transformStringField(
                entry.fields.notableFeatures as string,
              ),
              significance: String(significance),
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
