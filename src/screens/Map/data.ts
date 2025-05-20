const landmarks = [
  {
    id: 1,
    name: "69th Regiment Armory",
    image: "69th Regiment Armory",
    date_designated: "June 19, 1996",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.741667, lng: -73.983611 },
    },
    county: "New York",
    description:
      "Home of the watershed Armory Show in 1913, which introduced America to modern art",
  },
  {
    id: 2,
    name: "Admiral David Glasgow Farragut Gravesite",
    image: "Admiral David Glasgow Farragut Gravesite",
    date_designated: "October 17, 2012",
    location: {
      area: "Bronx",
      coordinates: { lat: 40.892222, lng: -73.865833 },
    },
    county: "Bronx",
    description:
      "Only intact known property directly associated with Admiral David Farragut",
  },
  {
    id: 3,
    name: "African Burial Ground",
    image: "African Burial Ground",
    date_designated: "April 19, 1993",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.714444, lng: -74.004444 },
    },
    county: "New York",
    description:
      "African Burial Ground is the nation's earliest and largest known African American cemetery. It was a burial site in Lower Manhattan of over 419 Africans from 1690s to 1794",
    link: "https://www.nps.gov/afbg/index.htm",
    quote:
      "For all those who were lost, for all those who were stolen, for all those who were left behind, for all those who were not forgotten.",
    quote_author: "Memorial inscription, African Burial Ground",
  },
  {
    id: 4,
    name: "Ambrose (lightship)",
    image: "Ambrose (lightship)",
    date_designated: "April 11, 1989",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.704722, lng: -74.0025 },
    },
    county: "New York",
    description:
      "Lightship, several miles offshore, that marked Ambrose Channel into New York Harbor, now at South Street Seaport Museum.",
  },
  {
    id: 5,
    name: "American Stock Exchange",
    image: "American Stock Exchange",
    date_designated: "June 6, 1978",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.708889, lng: -74.0125 },
    },
    county: "New York",
    description: "Former headquarters of the American Stock Exchange",
  },
  {
    id: 6,
    name: "Louis Armstrong House",
    image: "Louis Armstrong House",
    date_designated: "May 11, 1976",
    location: {
      area: "Corona",
      coordinates: { lat: 40.754444, lng: -73.861667 },
    },
    county: "Queens",
    description: "Home of jazz legend Louis Armstrong for 28 years",
    quote:
      "There's so much in 'Wonderful World' that brings me back to my neighborhood where I live in Corona, New York.",
    quote_author: "Louis Armstrong",
    link: "https://www.louisarmstronghouse.org/",
  },
  {
    id: 7,
    name: "Chester A. Arthur House",
    image: "Chester A. Arthur House",
    date_designated: "December 12, 1965",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.742778, lng: -73.982222 },
    },
    county: "New York",
    description:
      "Home of President Chester A. Arthur; site of his inaugural oath",
  },
  {
    id: 8,
    name: "Alice Austen House",
    image: "Alice Austen House",
    date_designated: "April 19, 1993 (#70000925)",
    location: {
      area: "Rosebank",
      coordinates: { lat: 40.615, lng: -74.063056 },
    },
    county: "Richmond",
    description: "Home of photographer Alice Austen, now a museum",
    link: "https://aliceausten.org/",
  },
  {
    id: 9,
    name: "Bartow–Pell Mansion",
    image: "Bartow–Pell Mansion",
    date_designated: "December 8, 1976 (#74001220)",
    location: {
      area: "Pelham Bay Park",
      coordinates: { lat: 40.871667, lng: -73.805556 },
    },
    county: "Bronx",
    description: "19th-century mansion in largest New York City park",
  },
  {
    id: 10,
    name: "Bayard-Condict Building",
    image: "Bayard-Condict Building",
    date_designated: "December 8, 1976 (#76001236)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.726389, lng: -73.995556 },
    },
    county: "New York",
    description:
      "Only Louis Sullivan building in New York City; one of the first steel skeleton skyscrapers.",
  },
  {
    id: 11,
    name: "Bell Laboratories Building",
    image: "Bell Laboratories Building",
    date_designated: "May 15, 1975 (#75001202)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.7375, lng: -74.01 },
    },
    county: "New York",
    description:
      "Bell Labs work here included experimental phonograph record, vacuum tubes, talking movies (1923), black and white and color TV, radar, and early commercial remote broadcasts. Today home to the Westbeth Artists Community (listed separately on the National Register of Historic Places).",
  },
  {
    id: 12,
    name: "Brooklyn Bridge",
    image: "Brooklyn Bridge",
    date_designated: "January 29, 1964 (#66000523)",
    location: {
      area: "Brooklyn and Manhattan",
      coordinates: { lat: 40.706389, lng: -73.9975 },
    },
    county: "Kings and New York",
    description:
      "The first steel wire suspension bridge; at one point the largest in the world",
  },
  {
    id: 13,
    name: "Brooklyn Heights Historic District",
    image: "Brooklyn Heights Historic District",
    date_designated: "January 12, 1965 (#66000524)",
    location: {
      area: "Brooklyn",
      coordinates: { lat: 40.696667, lng: -73.996667 },
    },
    county: "Kings",
    description:
      "Exemplary collection of 19th-century architectural styles; first historic district in New York City",
  },
  {
    id: 14,
    name: "Center for Brooklyn History",
    image: "Center for Brooklyn History",
    date_designated: "July 17, 1991 (#91002054)",
    location: {
      area: "Brooklyn",
      coordinates: { lat: 40.694722, lng: -73.992778 },
    },
    county: "Kings",
    description:
      "One of the few remaining buildings by George B. Post; innovative structural system",
  },
  {
    id: 15,
    name: "Ralph Johnson Bunche House",
    image: "Ralph Johnson Bunche House",
    date_designated: "May 11, 1976 (#76001266)",
    location: {
      area: "Kew Gardens",
      coordinates: { lat: 40.706389, lng: -73.8375 },
    },
    county: "Queens",
    description:
      "Home of Ralph Johnson Bunche, eminent African-American diplomat and Undersecretary General of United Nations",
  },
  {
    id: 16,
    name: "Carnegie Hall",
    image: "Carnegie Hall",
    date_designated: "December 29, 1962 (#66000535)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.765, lng: -73.980278 },
    },
    county: "New York",
    description: "One of the most famous music venues in the world",
  },
  {
    id: 17,
    name: "Andrew Carnegie Mansion",
    image: "Andrew Carnegie Mansion",
    date_designated: "November 13, 1966 (#66000536)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.784444, lng: -73.957778 },
    },
    county: "New York",
    description:
      "Home of Andrew Carnegie, now the Cooper-Hewitt, National Design Museum",
  },
  {
    id: 18,
    name: "Central Park",
    image: "Central Park",
    date_designated: "May 23, 1963 (#66000538)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.781944, lng: -73.966111 },
    },
    county: "New York",
    description:
      "The Green Lung of the city; one of the most visited city parks in the world; designed by Frederick Law Olmsted and Calvert Vaux.",
  },
  {
    id: 19,
    name: "Central Synagogue",
    image: "Central Synagogue",
    date_designated: "May 15, 1975 (#70000423)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.759722, lng: -73.970556 },
    },
    county: "New York",
    description:
      "Oldest synagogue continuously in use by a New York City Jewish congregation; built in a Moorish Revival style to recognize importance of that period in Jewish history",
  },
  {
    id: 20,
    name: "Chamber of Commerce Building",
    image: "Chamber of Commerce Building",
    date_designated: "December 22, 1977 (#73001214)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.709444, lng: -74.01 },
    },
    county: "New York",
    description:
      "Former home of the Chamber of Commerce of the State of New York, established in 1768; prototype for the chamber of commerce",
  },
  {
    id: 21,
    name: "Chrysler Building",
    image: "Chrysler Building",
    date_designated: "December 8, 1976 (#76001237)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.751667, lng: -73.975278 },
    },
    county: "New York",
    description:
      "Art Deco skyscraper; distinctive feature of Manhattan skyline; at one point world's tallest building",
  },
  {
    id: 22,
    name: "Church of the Ascension",
    image: "Church of the Ascension",
    date_designated: "December 23, 1987 (#87002593)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.733611, lng: -73.995556 },
    },
    county: "New York",
    description:
      "Early church design by Richard Upjohn; valuable interior artwork",
  },
  {
    id: 23,
    name: "City Hall",
    image: "City Hall",
    date_designated: "December 19, 1960 (#66000539)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.712778, lng: -74.005833 },
    },
    county: "New York",
    description:
      "Oldest city hall in U.S. still in use as main municipal government building",
  },
  {
    id: 24,
    name: "Conference House",
    image: "Conference House",
    date_designated: "May 23, 1966 (#66000566)",
    location: {
      area: "Tottenville",
      coordinates: { lat: 40.503056, lng: -74.253056 },
    },
    county: "Richmond",
    description:
      "Only surviving pre-Revolutionary War manor house in New York City; site of unsuccessful peace conference in 1776",
  },
  {
    id: 25,
    name: "Will Marion Cook House",
    image: "Will Marion Cook House",
    date_designated: "May 11, 1976 (#76001238)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.818056, lng: -73.943056 },
    },
    county: "New York",
    description:
      "Home of the leading black composer and musician Will Marion Cook",
  },
  {
    id: 26,
    name: "Cooper Union",
    image: "Cooper Union",
    date_designated: "July 4, 1961 (#66000540)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.729444, lng: -73.990556 },
    },
    county: "New York",
    description:
      "Pioneering adult education center; site of famous anti-slavery speech by Abraham Lincoln",
  },
  {
    id: 27,
    name: "Daily News Building",
    image: "Daily News Building",
    date_designated: "June 29, 1989 (#82001191)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.749444, lng: -73.973611 },
    },
    county: "New York",
    description:
      "First modern free-standing skyscraper designed by Raymond Hood",
  },
  {
    id: 28,
    name: "Dakota Apartments",
    image: "Dakota Apartments",
    date_designated: "December 8, 1976 (#72000869)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.776667, lng: -73.976389 },
    },
    county: "New York",
    description:
      "Combination of Renaissance architectural styles by Henry Hardenbergh; setting for Rosemary's Baby and the shooting death of John Lennon",
  },
  {
    id: 29,
    name: "Dyckman House",
    image: "Dyckman House",
    date_designated: "December 24, 1967 (#67000014)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.8675, lng: -73.923333 },
    },
    county: "New York",
    description: "Only remaining farmhouse in Manhattan",
  },
  {
    id: 30,
    name: "Eldridge Street Synagogue",
    image: "Eldridge Street Synagogue",
    date_designated: "June 19, 1996 (#80002687)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.715, lng: -73.993889 },
    },
    county: "New York",
    description:
      "One of the oldest synagogues in the U.S.; first built by Jews from Eastern Europe",
  },
  {
    id: 31,
    name: "Duke Ellington House",
    image: "Duke Ellington House",
    date_designated: "May 11, 1976 (#76001239)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.832222, lng: -73.940833 },
    },
    county: "New York",
    description:
      "Ellington, the legendary jazz composer and bandleader, lived in Apartment 4A from 1939 to 1961",
  },
  {
    id: 32,
    name: "Empire State Building",
    image: "Empire State Building",
    date_designated: "June 24, 1986 (#82001192)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.748333, lng: -73.985556 },
    },
    county: "New York",
    description:
      "World's tallest building from 1931 to 1972 and internationally recognized symbol of New York City",
  },
  {
    id: 33,
    name: "Equitable Building",
    image: "Equitable Building",
    date_designated: "June 2, 1978 (#78001869)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.709722, lng: -74.011111 },
    },
    county: "New York",
    description:
      "One of the earliest skyscrapers in Manhattan; profoundly influenced later skyscraper design",
  },
  {
    id: 34,
    name: "Hamilton Fish House",
    image: "Hamilton Fish House",
    date_designated: "May 15, 1975 (#72001456)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.73, lng: -73.988611 },
    },
    county: "New York",
    description:
      "Home of Hamilton Fish, future Governor and Senator of New York",
  },
  {
    id: 35,
    name: "Flatiron Building",
    image: "Flatiron Building",
    date_designated: "June 29, 1989 (#79001603)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.741111, lng: -73.989722 },
    },
    county: "New York",
    description: "Distinctive triangular building at Madison Square.",
  },
  {
    id: 36,
    name: "Founder's Hall, The Rockefeller University",
    image: "Founder's Hall, The Rockefeller University",
    date_designated: "May 30, 1974 (#74001269)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.7625, lng: -73.955 },
    },
    county: "New York",
    description:
      "Building marked the start of John D. Rockefeller Jr.'s putting the vast family fortune to philanthropic purposes",
  },
  {
    id: 37,
    name: "The Frick Collection and Frick Art Reference Library Building",
    image: "The Frick Collection and Frick Art Reference Library Building",
    date_designated: "October 6, 2008 (#08001091)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.771389, lng: -73.967222 },
    },
    county: "New York",
    description: "",
  },
  {
    id: 38,
    name: "Governors Island",
    image: "Castle Williams",
    date_designated: "February 4, 1985",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.691389, lng: -74.016111 },
    },
    county: "New York",
    description:
      "Island in NY Harbor which served various branches of the US Military from 1783 until the late 1990s; now a park",
  },
  {
    id: 39,
    name: "Grace Church",
    image: "Grace Church",
    date_designated: "December 22, 1977",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.731667, lng: -73.991944 },
    },
    county: "New York",
    description: "Gothic Revival masterpiece designed by James Renwick Jr.",
    link: "https://gracechurchnyc.org/",
  },
  {
    id: 40,
    name: "Grand Central Terminal",
    image: "Grand Central Terminal",
    date_designated: "December 8, 1976",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.752778, lng: -73.976389 },
    },
    county: "New York",
    description:
      "Beaux-Arts architecture; historic rail gateway to New York City; largest train station in the world by number of platforms",
  },
  {
    id: 41,
    name: "Green-Wood Cemetery",
    image: "Green-Wood Cemetery",
    date_designated: "September 20, 2006",
    location: {
      area: "Brooklyn",
      coordinates: { lat: 40.652222, lng: -73.991111 },
    },
    county: "Kings",
    description:
      "Popular tourist attraction in the 1850s; most famous New Yorkers who died during the second half of the nineteenth century buried here",
  },
  {
    id: 42,
    name: "Hamilton Grange National Memorial",
    image: "Hamilton Grange National Memorial",
    date_designated: "December 19, 1960",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.821389, lng: -73.947222 },
    },
    county: "New York",
    description:
      "Home of Alexander Hamilton: military officer, lawyer, member of the United States Constitutional Convention, American statesman, first United States Secretary of the Treasury, and Founding Father",
    link: "https://www.nps.gov/hagr/index.htm",
  },
  {
    id: 43,
    name: "Solomon R. Guggenheim Museum",
    image: "Solomon R. Guggenheim Museum",
    date_designated: "October 6, 2008",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.782778, lng: -73.958889 },
    },
    county: "New York",
    description: "The only museum designed by Frank Lloyd Wright",
    link: "https://www.guggenheim.org/",
  },
  {
    id: 44,
    name: "Henry Street Settlement and Neighborhood Playhouse",
    image: "Henry Street Settlement and Neighborhood Playhouse",
    date_designated: "May 30, 1974 (#74001272)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.713889, lng: -73.985278 },
    },
    county: "New York",
    description:
      "One of the nation's first settlement homes where new immigrants and the poor could find assistance",
  },
  {
    id: 45,
    name: "Matthew Henson Residence",
    image: "Matthew Henson Residence",
    date_designated: "May 15, 1975",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.825556, lng: -73.938889 },
    },
    county: "New York",
    description:
      "Home of Matthew Henson, African-American polar explorer who may have been the first to reach the North Pole",
  },
  {
    id: 46,
    name: "Hispanic Society of America",
    image: "Hispanic Society of America",
    date_designated: "October 17, 2012",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.833611, lng: -73.946389 },
    },
    county: "New York",
    description: "Museum of Iberian Art",
  },
  {
    id: 47,
    name: "Holland Tunnel",
    image: "Holland Tunnel",
    date_designated: "November 4, 1993",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.7275, lng: -74.021389 },
    },
    county: "New York",
    description:
      "Tunnel underneath the Hudson River, connecting Manhattan and New Jersey; civil engineering landmark; one of the earliest ventilated tunnels",
  },
  {
    id: 48,
    name: "USS Intrepid",
    image: "USS Intrepid",
    date_designated: "January 14, 1986",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.764722, lng: -74.001111 },
    },
    county: "New York",
    description:
      "One of the most active U.S. ships during World War II; today the Intrepid Museum moored along the West Side",
  },
  {
    id: 49,
    name: "James Weldon Johnson Residence",
    image: "James Weldon Johnson Residence",
    date_designated: "May 11, 1976 (#76001241)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.815278, lng: -73.943056 },
    },
    county: "New York",
    description:
      "Harlem home of African-American artist-activist James Weldon Johnson",
  },
  {
    id: 50,
    name: "King Manor",
    image: "King Manor",
    date_designated: "December 2, 1974 (#74001295)",
    location: {
      area: "Jamaica",
      coordinates: { lat: 40.703056, lng: -73.803889 },
    },
    county: "Queens",
    description:
      "Home of Rufus King, a signer of Declaration of Independence and early U.S. Senator from New York",
  },
  {
    id: 51,
    name: "Lettie G. Howard (schooner)",
    image: "100 px",
    date_designated: "April 11, 1989 (#84002779)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.706111, lng: -74.003333 },
    },
    county: "New York",
    description:
      "Last remaining Fredonia-type schooner (once the standard for American fishing boats) at the South Street Seaport",
  },
  {
    id: 52,
    name: "Lorillard Snuff Mill",
    image: "100 px",
    date_designated: "December 22, 1977 (#77000935)",
    location: {
      area: "New York Botanical Garden",
      coordinates: { lat: 40.859722, lng: -73.876111 },
    },
    county: "Bronx",
    description: "Oldest existing tobacco-manufacturing facility in U.S.",
  },
  {
    id: 53,
    name: "Low Memorial Library",
    image: "Low Memorial Library",
    date_designated: "December 23, 1987 (#87002599)",
    location: {
      area: "Columbia University",
      coordinates: { lat: 40.808333, lng: -73.961944 },
    },
    county: "New York",
    description:
      "First building on Morningside Heights campus; capped by largest freestanding granite dome in U.S.",
  },
  {
    id: 54,
    name: "R. H. Macy and Company Store (Macy's)",
    image: "R. H. Macy and Company Store (Macy's)",
    date_designated: "June 2, 1978 (#78001873)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.750278, lng: -73.988333 },
    },
    county: "New York",
    description: "Largest department store in world for many years",
  },
  {
    id: 55,
    name: "McGraw-Hill Building",
    image: "McGraw-Hill Building",
    date_designated: "June 29, 1989 (#80002701)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.757222, lng: -73.991111 },
    },
    county: "New York",
    description:
      "Early Art Deco building; first U.S. building in International Style",
  },
  {
    id: 56,
    name: "Claude McKay Residence",
    image: "Claude McKay Residence",
    date_designated: "December 8, 1976 (#76002143)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.814167, lng: -73.938333 },
    },
    county: "New York",
    description:
      "The Harlem YMCA, whose residents included African-American writer Claude McKay",
  },
  {
    id: 57,
    name: "Metropolitan Life Insurance Company Tower",
    image: "Metropolitan Life Insurance Company Tower",
    date_designated: "June 2, 1978 (#78001874)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.741111, lng: -73.9875 },
    },
    county: "New York",
    description:
      "Tallest building in the world 1909-13; still part of the skyline a century later",
  },
  {
    id: 58,
    name: "Metropolitan Museum of Art",
    image: "Metropolitan Museum of Art",
    date_designated: "June 24, 1986 (#86003556)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.778889, lng: -73.963611 },
    },
    county: "New York",
    description:
      "The Fifth Avenue building of the Metropolitan Museum of Art, one of the world's most important and prestigious art museums",
  },
  {
    id: 59,
    name: "J. Pierpont Morgan Library",
    image: "J. Pierpont Morgan Library",
    date_designated: "November 13, 1966 (#66000544)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.749444, lng: -73.981667 },
    },
    county: "New York",
    description:
      "Office, Library, and now Museum of J. P. Morgan; the Panic of 1907 ended in the Library",
  },
  {
    id: 60,
    name: "Morris-Jumel Mansion",
    image: "Morris-Jumel Mansion",
    date_designated: "January 20, 1961 (#66000545)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.834444, lng: -73.938611 },
    },
    county: "New York",
    description: "Oldest residential building in Manhattan",
    link: "https://morrisjumel.org/",
  },
  {
    id: 61,
    name: "National City Bank Building",
    image: "National City Bank Building",
    date_designated: "June 2, 1978 (#78001875)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.706111, lng: -74.009167 },
    },
    county: "New York",
    description:
      "Home to one of the country's largest and most important banks since 1908",
  },
  {
    id: 62,
    name: "New York Amsterdam News Building",
    image: "New York Amsterdam News Building",
    date_designated: "May 11, 1976 (#76001247)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.815, lng: -73.944722 },
    },
    county: "New York",
    description:
      "Influential black newspaper the New York Amsterdam News was published here 1916-38",
  },
  {
    id: 63,
    name: "New York Botanical Garden",
    image: "New York Botanical Garden",
    date_designated: "May 28, 1967 (#67000009)",
    location: {
      area: "Bronx",
      coordinates: { lat: 40.863611, lng: -73.878333 },
    },
    county: "Bronx",
    description:
      "One of the world's leading botanical gardens, with the largest herbarium in the U.S. and second largest in the world after the French National Museum of Natural History and home to many plant laboratories",
  },
  {
    id: 64,
    name: "New York Cotton Exchange",
    image: "New York Cotton Exchange",
    date_designated: "December 22, 1977 (#72001586)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.704444, lng: -74.010278 },
    },
    county: "New York",
    description: "First commodity market in the U.S.; now 1 Hanover Square",
  },
  {
    id: 65,
    name: "New York Life Building",
    image: "New York Life Building",
    date_designated: "June 2, 1978 (#78001876)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.742778, lng: -73.985556 },
    },
    county: "New York",
    description: "Last significant Cass Gilbert skyscraper in Manhattan",
  },
  {
    id: 66,
    name: "New York Public Library",
    image: "New York Public Library",
    date_designated: "December 21, 1965 (#66000546)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.753333, lng: -73.982222 },
    },
    county: "New York",
    description:
      "One of the largest and most important libraries in the U.S.; listing is for main branch building.",
  },
  {
    id: 67,
    name: "New York Stock Exchange",
    image: "New York Stock Exchange",
    date_designated: "June 2, 1978",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.706944, lng: -74.011111 },
    },
    county: "New York",
    description:
      "One of the first securities markets in the U.S.; still the world's largest",
  },
  {
    id: 68,
    name: "New York Studio School of Drawing, Painting and Sculpture",
    image: "New York Studio School of Drawing, Painting and Sculpture",
    date_designated: "April 27, 1992 (#92001877)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.733056, lng: -73.998333 },
    },
    county: "New York",
    description:
      "Original home of the Whitney Museum, the first devoted to 20th-century American art",
  },
  {
    id: 69,
    name: "New York Yacht Club",
    image: "New York Yacht Club",
    date_designated: "May 28, 1987 (#82001203)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.755556, lng: -73.981667 },
    },
    county: "New York",
    description:
      "Oldest yachting club in U.S.; longtime home of the America's Cup",
  },
  {
    id: 70,
    name: "Old Merchant's House",
    image: "Old Merchant's House",
    date_designated: "June 23, 1965",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.7275, lng: -73.9925 },
    },
    county: "New York",
    description: "Nineteenth-century family home; preserved inside and out",
    link: "https://merchantshouse.org/",
  },
  {
    id: 71,
    name: "Old Quaker Meeting House",
    image: "Old Quaker Meeting House",
    date_designated: "December 24, 1967 (#67000015)",
    location: {
      area: "Flushing",
      coordinates: { lat: 40.763056, lng: -73.830278 },
    },
    county: "Queens",
    description:
      "Only surviving 17th-century ecclesiastical frame building in New York; in almost continuous use since 1696",
  },
  {
    id: 72,
    name: "Philosophy Hall",
    image: "Philosophy Hall",
    date_designated: "July 21, 2003 (#03001046)",
    location: {
      area: "Columbia University",
      coordinates: { lat: 40.806111, lng: -73.9625 },
    },
    county: "New York",
    description:
      "Edwin Armstrong developed FM radio in this Columbia University building",
  },
  {
    id: 73,
    name: "Players Club",
    image: "Players Club",
    date_designated: "December 19, 1962 (#66000549)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.7375, lng: -73.986944 },
    },
    county: "New York",
    description:
      "Extensive collection of art and theater memorabilia; interior redone by Stanford White",
  },
  {
    id: 74,
    name: "Plaza Hotel",
    image: "Plaza Hotel",
    date_designated: "June 24, 1986",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.764722, lng: -73.974444 },
    },
    county: "New York",
    description:
      "French Renaissance-style building; outstanding example of American hotel architecture; symbol of elegance; visible from much of lower Central Park; setting for Kay Thompson's popular Eloise series of children's books",
  },
  {
    id: 75,
    name: "Plymouth Church of the Pilgrims",
    image: "Plymouth Church of the Pilgrims",
    date_designated: "July 4, 1961",
    location: {
      area: "Brooklyn",
      coordinates: { lat: 40.699167, lng: -73.993611 },
    },
    county: "Kings",
    description:
      "Important station on Underground Railroad when Henry Ward Beecher was pastor",
  },
  {
    id: 76,
    name: "Pupin Physics Laboratory, Columbia University",
    image: "Pupin Physics Laboratory, Columbia University",
    date_designated: "December 21, 1965 (#66000550)",
    location: {
      area: "Columbia University",
      coordinates: { lat: 40.81, lng: -73.961667 },
    },
    county: "New York",
    description:
      "Columbia University building; site of first splitting of uranium atom in U.S. and other milestones in development of atomic bomb",
  },
  {
    id: 77,
    name: "Quarters A, Brooklyn Navy Yard",
    image: "Quarters A, Brooklyn Navy Yard",
    date_designated: "May 30, 1974",
    location: {
      area: "Brooklyn",
      coordinates: { lat: 40.7025, lng: -73.981111 },
    },
    county: "Kings",
    description: "Home to Matthew Perry at the time of his opening of Japan",
  },
  {
    id: 78,
    name: "Paul Robeson Home",
    image: "Paul Robeson Home",
    date_designated: "December 8, 1976",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.834444, lng: -73.938889 },
    },
    county: "New York",
    description:
      "Home of legendary African-American actor and activist Paul Robeson",
  },
  {
    id: 79,
    name: "Jackie Robinson House",
    image: "Jackie Robinson House",
    date_designated: "May 11, 1976",
    location: {
      area: "Brooklyn",
      coordinates: { lat: 40.648333, lng: -73.915 },
    },
    county: "Kings",
    description: "Home of baseball great Jackie Robinson",
  },
  {
    id: 80,
    name: "Rockefeller Center",
    image: "Radio City Music Hall",
    date_designated: "December 23, 1987",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.758611, lng: -73.979167 },
    },
    county: "New York",
    description:
      "Successful urban planning project of 20th-century America; changed Midtown Manhattan; originating site of popular NBC television programs Today and Saturday Night Live",
  },
  {
    id: 81,
    name: "Sailors' Snug Harbor",
    image: "Sailors' Snug Harbor",
    date_designated: "December 8, 1976",
    location: {
      area: "Sailors' Snug Harbor",
      coordinates: { lat: 40.6425, lng: -74.102778 },
    },
    county: "Richmond",
    description: "First and only home for retired merchant seamen in U.S.",
  },
  {
    id: 82,
    name: "St. Ann and the Holy Trinity Church",
    image: "St. Ann and the Holy Trinity Church",
    date_designated: "December 23, 1987",
    location: {
      area: "Brooklyn",
      coordinates: { lat: 40.694444, lng: -73.9925 },
    },
    county: "Kings",
    description: "Site of first figural stained-glass windows in U.S.",
  },
  {
    id: 83,
    name: "St. George's Episcopal Church",
    image: "St. George's Episcopal Church",
    date_designated: "December 8, 1976",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.734444, lng: -73.985 },
    },
    county: "New York",
    description:
      "Home church of Harry Thacker Burleigh, African-American singer who helped establish the spiritual in the liturgy of many American faiths",
  },
  {
    id: 84,
    name: "St. Patrick's Cathedral",
    image: "St. Patrick's Cathedral",
    date_designated: "December 8, 1976 (#76001250)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.758611, lng: -73.976389 },
    },
    county: "New York",
    description: "First large-scale medieval-style church built in U.S.",
  },
  {
    id: 85,
    name: "St. Paul's Chapel",
    image: "St. Paul's Chapel",
    date_designated: "October 9, 1960",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.711389, lng: -74.01 },
    },
    county: "New York",
    description:
      "One of the few surviving colonial-era churches in city; George Washington worshipped here following his inauguration; site of informal memorials following September 11 attacks",
  },
  {
    id: 86,
    name: "Margaret Sanger Clinic",
    image: "Margaret Sanger Clinic",
    date_designated: "September 14, 1993",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.738056, lng: -73.993889 },
    },
    county: "New York",
    description: "Clinic where Margaret Sanger dispensed birth control",
  },
  {
    id: 87,
    name: "Schomburg Center for Research in Black Culture",
    image: "Schomburg Center for Research in Black Culture",
    date_designated: "December 23, 2016",
    location: {
      area: "Harlem",
      coordinates: { lat: 40.814444, lng: -73.941389 },
    },
    county: "New York",
    description:
      "Research library of the New York Public Library (NYPL) and an archive repository for information on people of African descent worldwide.",
  },
  {
    id: 88,
    name: "Gen. Winfield Scott House",
    image: "Gen. Winfield Scott House",
    date_designated: "November 7, 1973",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.735, lng: -73.995833 },
    },
    county: "New York",
    description:
      "Home of Winfield Scott, heroic general in the U.S.-Mexican War and later presidential candidate",
  },
  {
    id: 89,
    name: "Seventh Regiment Armory",
    image: "Seventh Regiment Armory",
    date_designated: "February 24, 1986 (#75001208)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.7675, lng: -73.966111 },
    },
    county: "New York",
    description:
      "One of the most impressive collections of 1880s interior decoration outside of a museum; only armory actually owned by the unit for which it was constructed",
  },
  {
    id: 90,
    name: "Harry F. Sinclair House",
    image: "Harry F. Sinclair House",
    date_designated: "June 2, 1978 (#78001882)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.776667, lng: -73.963611 },
    },
    county: "New York",
    description:
      "Harry F. Sinclair, the oil industrialist, lived here from 1918 to 1930; now part of the Ukrainian Institute; often used in filmmaking and television production",
  },
  {
    id: 91,
    name: "Alfred E. Smith House",
    image: "Alfred E. Smith House",
    date_designated: "November 28, 1972 (#72000882)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.713333, lng: -73.9975 },
    },
    county: "New York",
    description:
      "Home of four-time New York State governor Alfred E. Smith (and later presidential candidate) from 1907 to 1923",
  },
  {
    id: 92,
    name: "SoHo-Cast Iron Historic District",
    image: "SoHo-Cast Iron Historic District",
    date_designated: "June 2, 1978 (#78001883)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.724444, lng: -74.001389 },
    },
    county: "New York",
    description:
      "Believed to be the largest existing collection of late 19th-century cast iron facades in the world",
  },
  {
    id: 93,
    name: "A. T. Stewart Company Store",
    image: "A. T. Stewart Company Store",
    date_designated: "June 2, 1978 (#78001885)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.714167, lng: -74.006111 },
    },
    county: "New York",
    description:
      'Site of the first American department store (now known as the "New York Sun Building")',
  },
  {
    id: 94,
    name: "Stonewall",
    image: "Stonewall",
    date_designated: "February 16, 2000 (#99000562)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.733889, lng: -74.002222 },
    },
    county: "New York",
    description: "Site of 1969 Stonewall riots which began gay rights movement",
  },
  {
    id: 95,
    name: "St. Bartholomew's Church and Community House",
    image: "St. Bartholomew's Church and Community House",
    date_designated: "October 31, 2016 (#80002719)",
    location: {
      area: "Midtown Manhattan",
      coordinates: { lat: 40.757222, lng: -73.973611 },
    },
    county: "New York",
    description:
      "A pivotal example of the work of Bertram Grosvenor Goodhue and an outstanding example of early 20th-century ecclesiastical architecture.",
  },
  {
    id: 96,
    name: "Surrogate's Court",
    image: "Surrogate's Court",
    date_designated: "December 22, 1977 (#72000888)",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.713611, lng: -74.004722 },
    },
    county: "New York",
    description: "Probate Courthouse across from City Hall",
  },
  {
    id: 97,
    name: "Tenement Building at 97 Orchard Street",
    image: "Tenement Building at 97 Orchard Street",
    date_designated: "April 19, 1994",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.718611, lng: -73.990278 },
    },
    county: "New York",
    description:
      "Preserved tenement building that housed hundreds of immigrants; now the heart of the Lower East Side Tenement Museum.",
    link: "https://www.tenement.org/",
  },
  {
    id: 98,
    name: "Third Judicial District Courthouse",
    image: "Third Judicial District Courthouse",
    date_designated: "December 22, 1977",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.734722, lng: -73.999167 },
    },
    county: "New York",
    description:
      "Originally built as the Third Judicial District Courthouse; faced with demolition, public outcry led to its reuse as a branch of the New York Public Library",
  },
  {
    id: 99,
    name: "Tiffany and Company Building",
    image: "Tiffany and Company Building",
    date_designated: "June 2, 1978",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.75, lng: -73.981389 },
    },
    county: "New York",
    description:
      "Served as the home of Tiffany and Company from 1905 through 1940",
  },
  {
    id: 100,
    name: "Samuel J. Tilden House",
    image: "Samuel J. Tilden House",
    date_designated: "May 11, 1976",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.7375, lng: -73.986944 },
    },
    county: "New York",
    description:
      "Home of Samuel J. Tilden, former New York State governor and loser of the bitter 1876 presidential election",
  },
  {
    id: 101,
    name: "The Town Hall",
    image: "The Town Hall",
    date_designated: "March 2, 2012",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.756111, lng: -73.984722 },
    },
    county: "New York",
    description:
      '"America\'s Town Meetings of the Air" radio programs from here in the 1930s created public-affairs media.',
  },
  {
    id: 102,
    name: "Triangle Shirtwaist Factory",
    image: "Triangle Shirtwaist Factory",
    date_designated: "July 17, 1971",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.73, lng: -73.995833 },
    },
    county: "New York",
    description:
      "Site of the Triangle Shirtwaist Factory fire, one of the worst industrial disasters in the U.S., which led to many workplace reforms",
  },
  {
    id: 103,
    name: "Trinity Church",
    image: "Trinity Church",
    date_designated: "December 8, 1976",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.708056, lng: -74.012222 },
    },
    county: "New York",
    description: "Historic church which looks down Wall Street",
  },
  {
    id: 104,
    name: "Old New York County Courthouse",
    image: "Old New York County Courthouse",
    date_designated: "May 11, 1976",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.713056, lng: -74.006111 },
    },
    county: "New York",
    description:
      "Historic courthouse, more commonly known as the Tweed Courthouse, connected to Tammany Hall, now used by NYC's Department of Education",
  },
  {
    id: 105,
    name: "Union Square",
    image: "Union Square",
    date_designated: "December 9, 1997",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.735556, lng: -73.990556 },
    },
    county: "New York",
    description:
      "The political heart of Manhattan; many protests begin or end here",
  },
  {
    id: 106,
    name: "United Charities Building",
    image: "United Charities Building",
    date_designated: "July 17, 1991",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.739444, lng: -73.986389 },
    },
    county: "New York",
    description:
      "Built in 1893 by a wealthy businessman in order to provide his favorite charities a low cost location for their operations",
  },
  {
    id: 107,
    name: "United Workers Cooperatives",
    image: "United Workers Cooperatives",
    date_designated: "July 17, 1991",
    location: {
      area: "Bronx",
      coordinates: { lat: 40.866389, lng: -73.869722 },
    },
    county: "Bronx",
    description:
      "Built in 1926 by the United Workers' Association to improve the living standards of its members, many of whom lived in squalid conditions in the tenements of the Lower East Side",
  },
  {
    id: 108,
    name: "U.S. Customhouse",
    image: "U.S. Customhouse",
    date_designated: "December 8, 1976",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.704167, lng: -74.013889 },
    },
    county: "New York",
    description:
      "Cass Gilbert designed Customhouse for New York Harbor; now part of the Smithsonian Institution",
  },
  {
    id: 109,
    name: "University Heights Campus (Bronx Community College of the City University of New York)",
    image:
      "University Heights Campus (Bronx Community College of the City University of New York)",
    date_designated: "October 17, 2012",
    location: {
      area: "Bronx",
      coordinates: { lat: 40.857778, lng: -73.912222 },
    },
    county: "Bronx",
    description:
      "Collection of Beaux Arts buildings by Stanford White is one of the best examples of that style anywhere.",
  },
  {
    id: 110,
    name: "Van Cortlandt House",
    image: "Van Cortlandt House",
    date_designated: "December 24, 1976",
    location: {
      area: "Van Cortlandt Park",
      coordinates: { lat: 40.89, lng: -73.896389 },
    },
    county: "Bronx",
    description:
      "Mansion for the Van Cortlandt family built in 1748 and used during the American Revolution",
    link: "https://www.vchm.org/",
  },
  {
    id: 111,
    name: "Voorlezer's House",
    image: "Voorlezer's House",
    date_designated: "November 5, 1961",
    location: {
      area: "Richmondtown",
      coordinates: { lat: 40.571389, lng: -74.1475 },
    },
    county: "Richmond",
    description:
      "Oldest known surviving schoolhouse in America; owned by the Staten Island Historical Society",
  },
  {
    id: 112,
    name: "Wards Point Archeological Site",
    image: "Wards Point Archeological Site",
    date_designated: "April 19, 1993",
    location: {
      area: "Tottenville",
      coordinates: { lat: 40.498889, lng: -74.251944 },
    },
    county: "Richmond",
    description:
      "Archaeological site in Conference House Park containing prehistoric remains.",
  },
  {
    id: 113,
    name: "Woodlawn Cemetery",
    image: "Woodlawn Cemetery",
    date_designated: "June 23, 2011",
    location: {
      area: "Bronx",
      coordinates: { lat: 40.889167, lng: -73.873333 },
    },
    county: "Bronx",
    description:
      "Illustrates transition from rural cemetery to 20th-century styles; notable dead buried here include Robert Moses and R.H. Macy",
  },
  {
    id: 114,
    name: "Woolworth Building",
    image: "Woolworth Building",
    date_designated: "November 13, 1966",
    location: {
      area: "Manhattan",
      coordinates: { lat: 40.712222, lng: -74.008056 },
    },
    county: "New York",
    description:
      "One of the oldest — and most famous — skyscrapers in New York City; still one of the tallest buildings in New York City",
  },
  {
    id: 115,
    name: "Wyckoff House",
    image: "Wyckoff House",
    date_designated: "December 24, 1967",
    location: {
      area: "Brooklyn",
      coordinates: { lat: 40.644444, lng: -73.920833 },
    },
    county: "Kings",
    description: "Oldest surviving Dutch saltbox frame house in America",
  },
  {
    id: 116,
    name: "Wyckoff-Bennett Homestead",
    image: "Wyckoff-Bennett Homestead",
    date_designated: "December 24, 1976",
    location: {
      area: "Brooklyn",
      coordinates: { lat: 40.610833, lng: -73.951389 },
    },
    county: "Kings",
    description: "Housed Hessian soldiers during the American Revolution",
  },
];

export default landmarks;
