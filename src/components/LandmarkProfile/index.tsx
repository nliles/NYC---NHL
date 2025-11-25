import { ArrowRight, Info } from "lucide-react";
import styles from "./LandmarkProfile.module.scss";
import ReactMarkdown from "react-markdown";
import colors from "@/styles/colors.module.scss";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import remarkBreaks from "remark-breaks";
import { Landmark } from "@/types";
import { useState } from "react";
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
  const { name, architect, bullets, moreInfoUrl, quote, quoteAuthor, image } =
    selectedLandmark;

  const { url, title, description } = image;

  const openModal = (item: any) => {
    setSelectedItem(item);
  };

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
                {bullets.map((item) => {
                  if (
                    (item.key === "Architect" || item.key === "Architects") &&
                    architect?.length
                  ) {
                    return (
                      <li key="architect1" className={styles.bulletItem}>
                        <p className={styles.key}>
                          {architect.length === 1 ? "Architect" : "Architects"}
                        </p>
                        <div className={styles.value}>
                          {architect.map((a: any) =>
                            a.fields.summary ? (
                              <button
                                type="button"
                                key={a.fields.name}
                                onClick={() => openModal(a.fields)}
                                className={styles.modalButton}
                              >
                                {a.fields.name}
                                <sup>
                                  <Info color="#6b8e8e" size={12} />
                                </sup>
                              </button>
                            ) : (
                              <span key={a.fields.name}>{a.fields.name}</span>
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
      <Modal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(undefined)}
      >
        {documentToReactComponents(selectedItem?.summary)}
      </Modal>
    </div>
  );
};

export default LandmarkProfile;
