import { ArrowRight } from "lucide-react";
import styles from "./LandmarkProfile.module.scss";
import ReactMarkdown from "react-markdown";
import colors from "@/styles/colors.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import remarkBreaks from "remark-breaks";
import ReferenceListItem from "./ReferenceListItem";
import { Landmark } from "@/types";
import { useState } from "react";
import Modal from "../Modal";

const pluralize = ({ text, count = 0 }: { text: string; count?: number }) => {
  if (count === 1) return text;
  return text + "s";
};

const ReferenceList = ({
  title,
  items,
  onClick,
}: {
  title: string;
  items: any[];
  onClick: (item: any) => void;
}) => (
  <li className={styles.bulletItem}>
    <p className={styles.key}>
      {pluralize({
        text: title,
        count: items?.length,
      })}
    </p>
    <div className={styles.value}>
      {items?.map((a: any, index: number) => (
        <ReferenceListItem
          key={a.fields.name}
          name={a.fields.name}
          summary={a.fields.summary}
          onClick={() => onClick(a.fields)}
          isLastItem={index === items.length - 1}
        />
      ))}
    </div>
  </li>
);

const LandmarkProfile = ({
  selectedLandmark,
  onChange,
  isVisited,
}: {
  selectedLandmark: Landmark;
  onChange: (visited: boolean) => void;
  isVisited?: boolean;
}) => {
  const [selectedItem, setSelectedItem] = useState<any>();
  const {
    name,
    architect,
    architectAttribution,
    architecturalStyle,
    benefactor,
    built,
    builder,
    date,
    event,
    founded,
    founder,
    commissioner,
    classType,
    height,
    engineer,
    moreInfoUrl,
    landscapeArchitect,
    length,
    quote,
    quoteAuthor,
    size,
    image,
    lenapeName,
    residentAttribution,
    otherNames,
    notableFeatures,
    notable,
    current,
    rediscovered,
    significance,
  } = selectedLandmark;

  const { url, title, description } = image;

  const openModal = (item: any) => {
    setSelectedItem(item);
  };

  const firstBullets = [
    { key: "Lenape Name", value: lenapeName },
    { key: "Other Names", value: otherNames },
    { key: "Founded", value: founded },
    { key: "Founder", value: founder },
    { key: "Built", value: built },
    { key: "Builder", value: builder },
    { key: "Benefactor", value: benefactor },
    { key: "Commissioner", value: commissioner },
    { key: "Rediscovered", value: rediscovered },
    { key: "Event Date", value: date },
    { key: "Event", value: event },
  ].filter((item) => item.value);

  const lastBullets = [
    { key: "Class & Type", value: classType },
    { key: "Height", value: height },
    { key: "Size", value: size },
    { key: "Length", value: length },
    { key: "Notable Features", value: notableFeatures },
    { key: "Significance", value: significance },
    { key: "Notable", value: notable },
    { key: "Current", value: current },
  ].filter((item) => item.value);

  const combinedArchitects = [
    ...(architect || []).map((a: any) => ({
      name: a.fields.name,
      summary: a.fields.summary,
      fields: a.fields,
    })),
    ...(architectAttribution || []).map((a: any) => ({
      name: a.fields.architect.fields.name,
      summary: a.fields.architect.fields.summary,
      fields: a.fields.architect.fields,
      attribution: a.fields.attribution,
    })),
  ];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.fixedHeader}>
            <h2 className={styles.header}>{name}</h2>
          </div>
          <div className={styles.scrollableContent}>
            <img src={url} alt={name} className={styles.img} />
            {title && description && (
              <a
                className={styles.caption}
                href={description}
                target="_blank"
                rel="noopener noreferrer"
              >
                {title}
              </a>
            )}
            <ul className={styles.bulletList}>
              {firstBullets.map((item) => (
                <li className={styles.bulletItem} key={item.value}>
                  <p className={styles.key}>{item.key}</p>
                  <p className={styles.value}>{item.value}</p>
                </li>
              ))}
              {!!engineer?.length && (
                <ReferenceList
                  title="Engineer"
                  items={engineer}
                  onClick={(item: any) => openModal(item)}
                />
              )}
              {!!combinedArchitects.length && (
                <li className={styles.bulletItem}>
                  <p className={styles.key}>
                    {pluralize({
                      text: "Architect",
                      count: combinedArchitects?.length,
                    })}
                  </p>
                  <div className={styles.value}>
                    {combinedArchitects?.map((a: any, index: number) => (
                      <ReferenceListItem
                        key={a.name}
                        name={a.name}
                        summary={a.summary}
                        attribution={a.attribution}
                        onClick={() => openModal(a.fields)}
                        isLastItem={index === combinedArchitects.length - 1}
                        showParenthesis
                      />
                    ))}
                  </div>
                </li>
              )}
              {!!architecturalStyle?.length && (
                <ReferenceList
                  title="Architectural Style"
                  items={architecturalStyle}
                  onClick={(item: any) => openModal(item)}
                />
              )}
              {!!landscapeArchitect?.length && (
                <ReferenceList
                  title="Landscape Architect"
                  items={landscapeArchitect}
                  onClick={(item: any) => openModal(item)}
                />
              )}
              {!!residentAttribution?.length && (
                <li className={styles.bulletItem}>
                  <p className={styles.key}>
                    {pluralize({
                      text: "Resident",
                      count: residentAttribution?.length,
                    })}
                  </p>
                  <div className={styles.value}>
                    {residentAttribution?.map((a: any, index: number) => (
                      <ReferenceListItem
                        key={a.fields.resident.fields.name}
                        name={a.fields.resident.fields.name}
                        summary={a.fields.resident.fields.summary}
                        attribution={a.fields.attribution}
                        onClick={() => openModal(a.fields.resident.fields)}
                        isLastItem={index === residentAttribution.length - 1}
                      />
                    ))}
                  </div>
                </li>
              )}
              {lastBullets.map((item) => (
                <li key={item.key} className={styles.bulletItem}>
                  <p className={styles.key}>{item.key}</p>
                  <div className={styles.value}>
                    <ReactMarkdown
                      remarkPlugins={[remarkBreaks]}
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            className={styles.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        ),
                        p: ({ node, ...props }) => (
                          <p {...props} className={styles.value} />
                        ),
                      }}
                    >
                      {item.value as string}
                    </ReactMarkdown>
                  </div>
                </li>
              ))}
            </ul>
            {quote && quoteAuthor && (
              <blockquote className={styles.quoteBlock}>
                <ReactMarkdown
                  className={styles.quoteText}
                  remarkPlugins={[remarkBreaks]}
                >
                  {quote}
                </ReactMarkdown>
                <p className={styles.quoteAttribution}>— {quoteAuthor}</p>
              </blockquote>
            )}
          </div>
        </div>
      </div>
      <div className={styles.learnMore}>
        <div className={styles.visited}>
          <label className={styles.label} htmlFor="visited">
            <input
              className={styles.checkbox}
              type="checkbox"
              id="visited"
              checked={isVisited}
              onChange={(e) => onChange(e.target.checked)}
            />
            <span className={styles.customCheckbox}></span>
            I've visited this landmark
          </label>
        </div>
        <a
          href={moreInfoUrl}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
          <ArrowRight strokeWidth={1} size={20} color={colors.lightBlue} />
        </a>
      </div>
      <Modal isOpen={!!selectedItem} onClose={() => setSelectedItem(undefined)}>
        {documentToReactComponents(selectedItem?.summary)}
      </Modal>
    </div>
  );
};

export default LandmarkProfile;
