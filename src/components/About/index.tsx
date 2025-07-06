import { FaLinkedin } from "react-icons/fa";
import styles from "./About.module.scss";

const technologies = [
  { key: "Frontend", value: "React (Vite)", url: "https://vite.dev/" },
  { key: "Mapping", value: "Mapbox", url: "https://www.mapbox.com/" },
  {
    key: "Content Management",
    value: "Contentful",
    url: "https://www.contentful.com/",
  },
  {
    key: "Data Storage",
    value: "Local Storage",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
  },
  { key: "Deployment", value: "Netlify", url: "https://www.netlify.com/" },
];

const About = () => (
  <div className={styles.container}>
    <div className={styles.fixedHeader}>
      <h2 className={styles.header}>About</h2>
    </div>
    <div className={styles.scrollableContent}>
      <section className={styles.aboutSection}>
        <h3>The Project</h3>
        <p>
          <a
            href="https://www.nps.gov/orgs/1582/index.htm"
            target="_blank"
            rel="noopener noreferrer"
          >
            National Historic Landmarks (NHLs)
          </a>{" "}
          are historic properties, designated by the Secretary of the Interior
          as the highest level of federal historic recognition for their value
          in illustrating American heritage and culture.
        </p>
        <p>
          New York City boasts 116 National Historic Landmarks, more than any
          other city in the United States. These landmarks illustrate over 8,000
          years of history, from Ward's Point's ancient burial grounds to
          Stonewall Inn's modern civil rights legacy.
        </p>
        <p>
          This interactive map allows you to explore these sites, learn about
          their history, and keep track of the landmarks you've discovered.
        </p>
      </section>
      <section className={styles.aboutSection}>
        <h3>Technology Used</h3>
        <ul>
          {technologies.map((tech) => (
            <li key={tech.key} className={styles.techItem}>
              <span className={styles.highlight}>{tech.key}</span>:{" "}
              <a href={tech.url} target="_blank" rel="noopener noreferrer">
                {tech.value}
              </a>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.aboutSection}>
        <h3>About Me</h3>
        <p>
          Hi, I'm Natalie, a front-end developer in the New York City area with
          a love of technology, travel, and urban exploration.
        </p>
        <a
          href="https://www.linkedin.com/in/nliles/"
          className={styles.connectLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} width={30} height={30} />
          Connect with me
        </a>
      </section>
    </div>
  </div>
);

export default About;
