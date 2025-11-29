import { ArrowRight, Info } from "lucide-react";
import styles from "./LandmarkProfile.module.scss";
import ReactMarkdown from "react-markdown";
import colors from "@/styles/colors.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import remarkBreaks from "remark-breaks";
import { Landmark } from "@/types";
import React, { useState } from "react";
import Modal from "../Modal";

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
    built,
    bullets,
    founded,
    moreInfoUrl,
    quote,
    quoteAuthor,
    image,
    notableFeatures,
    notable,
    current,
    significance,
  } = selectedLandmark;

  const { url, title, description } = image;

  const openModal = (item: any) => {
    setSelectedItem(item);
  };

  const lastBullets = [
    { key: "Notable Features", value: notableFeatures },
    { key: "Significance", value: significance },
    { key: "Notable", value: notable },
    { key: "Current", value: current },
  ].filter((item) => item.value);

  console.log(built);

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
            {bullets && (
              <ul className={styles.bulletList}>
                {founded && (
                  <li className={styles.bulletItem}>
                    <p className={styles.key}>Founded</p>
                    <p className={styles.value}>{founded}</p>
                  </li>
                )}
                {built && (
                  <li className={styles.bulletItem}>
                    <p className={styles.key}>Built</p>
                    <p className={styles.value}>{built}</p>
                  </li>
                )}
                {bullets.map((item) => {
                  if (
                    (item.key === "Architect" || item.key === "Architects") &&
                    (architect?.length || architectAttribution?.length)
                  ) {
                    const totalArchitects =
                      (architect?.length || 0) +
                      (architectAttribution?.length || 0);
                    return (
                      <li key="architect1" className={styles.bulletItem}>
                        <p className={styles.key}>
                          {totalArchitects === 1 ? "Architect" : "Architects"}
                        </p>
                        <div className={styles.value}>
                          {/* Render simple architects first */}
                          {architect?.map((a: any, index: number) => (
                            <React.Fragment key={a.fields.name}>
                              {a.fields.summary ? (
                                <button
                                  type="button"
                                  onClick={() => openModal(a.fields)}
                                  className={styles.modalButton}
                                >
                                  {a.fields.name}
                                  <sup>
                                    <Info color="#6b8e8e" size={12} />
                                  </sup>
                                </button>
                              ) : (
                                <span>{a.fields.name}</span>
                              )}
                            </React.Fragment>
                          ))}

                          {/* Render architects with attributions */}
                          {architectAttribution?.map(
                            (a: any, index: number) => (
                              <React.Fragment
                                key={a.fields.architect.fields.name}
                              >
                                {a.fields.architect.fields.summary ? (
                                  <button
                                    type="button"
                                    onClick={() =>
                                      openModal(a.fields.architect.fields)
                                    }
                                    className={styles.modalButton}
                                  >
                                    {a.fields.architect.fields.name}
                                    <sup>
                                      <Info color="#6b8e8e" size={12} />
                                    </sup>
                                  </button>
                                ) : (
                                  <span>{a.fields.architect.fields.name}</span>
                                )}
                                {(index < architectAttribution.length - 1 ||
                                  (architectAttribution?.length ?? 0) > 0) &&
                                  ", "}
                              </React.Fragment>
                            ),
                          )}
                        </div>
                      </li>
                    );
                  }
                  return (
                    <li key={item.key} className={styles.bulletItem}>
                      <p className={styles.key}>{item.key}</p>
                      <p className={styles.value}>{item.value}</p>
                    </li>
                  );
                })}
                {lastBullets.map((item) => (
                  <li key={item.key} className={styles.bulletItem}>
                    <p className={styles.key}>{item.key}</p>
                    {item.key === "Significance" ? (
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
                            p: ({ node, ...props }) => <p {...props} className={styles.value}/>,
                          }}
                        >
                          {item.value as string}
                        </ReactMarkdown>
                      </div>
                    ) : (
                      <p className={styles.value}>{item.value}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
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
