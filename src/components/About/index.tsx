import styles from "./About.module.css";

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
          other city in the United States. This interactive map allows you to
          explore these sites, learn about their history, and keep track of the
          landmarks you've discovered.
        </p>
      </section>
    </div>
    <section className={styles.aboutSection}>
      <h3>Technology Used</h3>
      <ul>
        <li>
          <span className={styles.highlight}>Frontend</span>: React (Vite)
        </li>
        <li>
          <span className={styles.highlight}>Mapping</span>:{" "}
          <a
            href="https://www.mapbox.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mapbox
          </a>
        </li>
        <li>
          <span className={styles.highlight}>Content Management</span>:{" "}
          <a
            href="https://www.contentful.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contentful
          </a>
        </li>
        <li>Data Storage: Local Storage</li>
        <li>Deployment: Netlify</li>
      </ul>
      <a href="https://www.linkedin.com/in/nliles/">Connect with me</a>
    </section>
    <section className={styles.aboutSection}>
      <h3>About Me</h3>
      <p>
        Hi, I'm Natalie, a front-end developer in the greater NYC area with a
        love of technology, travel, and the great outdoors.
      </p>
      <a href="https://www.linkedin.com/in/nliles/">Connect with me</a>
    </section>
  </div>
);

export default About;
