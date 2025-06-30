import { FaLinkedin } from "react-icons/fa";
import styles from "./About.module.css";

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
    <div>
      <h2 className={styles.fixedHeader}>About</h2>
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
          are historic properties of exceptional national significance,
          designated by the Secretary of the Interior for their outstanding
          value in illustrating American heritage and culture.
        </p>
        <p>
          New York City boasts 116 National Historic Landmarks, more than any
          other city in the United States. These landmarks illustrate 10,000
          years of history, from Ward's Point's ancient burial grounds to
          Stonewall Inn's modern civil rights legacy.
        </p>
        <p>
          This interactive map allows you to explore these sites, learn about
          their history, and keep track of the landmarks you've discovered.
        </p>
      </section>
    </div>
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
        Hi, I'm Natalie, a front-end developer in the greater NYC area with a
        love of technology, travel, and the great outdoors.
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
);

export default About;
