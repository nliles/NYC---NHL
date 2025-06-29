import styles from "./About.module.css";

const About = () => (
  <div className={styles.container}>
    <div className={styles.aboutSection}>
      <h3>National Historic Landmarks in NYC</h3>
      <p>
        <a href="https://www.nps.gov/orgs/1582/index.htm" target="_blank">
          National Historic Landmarks (NHLs)
        </a>{" "}
        are historic properties that hold exceptional value or quality in
        illustrating or interpreting the heritage of the United States. These
        sites possess national significance and are designated by the Secretary
        of the Interior because they have been found to be nationally
        significant in American history and culture.
      </p>

      <p>
        New York City boasts{" "}
        <span className={styles.highlight}>
          116 National Historic Landmarks
        </span>
        , more than any other city in the United States. These landmarks
        represent the rich tapestry of American history, from colonial
        settlements and revolutionary battlegrounds to architectural marvels and
        cultural institutions that shaped the nation.
      </p>

      <p>
        Many of these locations also carry additional designations such as
        National Monuments, National Historic Sites, entries on the National
        Register of Historic Places, or New York City Landmarks. This layered
        recognition reflects their extraordinary importance to both local and
        national heritage.
      </p>
    </div>
    <div className={styles.aboutSection}>
      <h3>About the Creator</h3>
      <p>
        Hi, I'm <span className={styles.highlight}>Natalie</span>! I created
        this interactive map to help people explore and discover the incredible
        historic landmarks that make New York City such a unique place. Whether
        you're a history buff, a tourist, or a longtime New Yorker, I hope this
        tool helps you appreciate the remarkable heritage that surrounds us in
        this amazing city.
      </p>
    </div>
  </div>
);

export default About;
