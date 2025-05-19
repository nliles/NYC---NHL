import styles from "./ParkProfile.module.css";

const park = {
    id: 3,
    name: "African Burial Ground",
    image: "African Burial Ground",
    date_designated: "April 19, 1993 (#93001597)",
    location: {
      area: "Manhattan",
      coordinates: "40°42′52″N 74°00′16″W",
    },
    county: "New York",
    description: [
        "African Burial Ground is the nation's earliest and largest known African American cemetery. It was a burial site in Lower Manhattan of over 419 Africans from 1690s to 1794",
        "Africans did much of the arduous labor - they cleared land for farms and broadened former Native American trails (Broadway) to accommodate horse drawn wagons. Worked in sawmills. They helped build “The Wall” (Wall Street) under Governor Peter Stuyvesant’s orders."
    ],
    link: "https://www.nps.gov/afbg/index.htm",
  }

const ParkProfile = () => {
  return (
    <div>
      <h3>{park.name}</h3>
      {park.description.map((desc) => (
        <p key={desc}>{desc}</p>
      ))}
    </div>
  );
};

export default ParkProfile;
